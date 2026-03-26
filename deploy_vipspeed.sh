#!/usr/bin/env bash
###############################################################################
# Umi 项目一键构建 + 跳板机部署脚本（macOS）
# Author: you@company.com
###############################################################################
set -euo pipefail

### === 自定义变量 ===
BUILD_DIR="dist"                                 # umi build 默认输出目录
SSH_KEY="$HOME/Documents/sz/shisongjienew.pem"   # 私钥
REMOTE_USER="shisongjienew"
REMOTE_HOST="123.60.140.77"
REMOTE_PORT="61493"
REMOTE_DIR="/usr/local/openresty/nginx/html/frontend/vipspeed"

# 跳板机兼容老算法
SSH_OPTS="-o HostKeyAlgorithms=+ssh-rsa,ssh-dss \
          -o PubkeyAcceptedKeyTypes=+ssh-rsa,ssh-dss \
          -o StrictHostKeyChecking=accept-new \      # 首次自动接受指纹
          -o BatchMode=yes \                         # 禁止回退到密码询问
          -A -i ${SSH_KEY} -p ${REMOTE_PORT}"

### === 0. 环境检测 ===
command -v umi >/dev/null || {
  echo "❌  本机未找到 umi，请先执行 'npm i -g umi' 或使用 npx/pnpm"; exit 1; }
command -v rsync >/dev/null || {
  echo "❌  本机未找到 rsync"; exit 1; }

### === 1. 本地构建 ===
echo "👉 [1/3] 运行 umi build..."
rm -rf "${BUILD_DIR}"
# npx 可自动找到项目内 umi 版本；如果全局安装用 'umi build'
npx umi build

### === 2. 远端备份 + 创建目录 ===
echo "👉 [2/3] 远端备份旧版并创建目录..."
ssh ${SSH_OPTS} ${REMOTE_USER}@${REMOTE_HOST} <<'EOF'
set -e
DIR="/usr/local/openresty/nginx/html/frontend/vipspeed"
BACKUP_DIR="${DIR}_bak_$(date +%Y%m%d_%H%M%S)"
if [ -d "$DIR" ]; then
  echo "   • 备份 ${DIR} -> ${BACKUP_DIR}"
  mv "$DIR" "$BACKUP_DIR"
fi
mkdir -p "$DIR"
EOF
# 如果远端必须 root 权限才能 mv，请给上面两行加 sudo

### === 3. rsync 同步 ===
echo "👉 [3/3] rsync 同步新版本..."
rsync -az --delete -e "ssh ${SSH_OPTS}" "${BUILD_DIR}/" \
      "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/"

echo "✅ 部署完成！访问：https://www.vdnlink.cn"