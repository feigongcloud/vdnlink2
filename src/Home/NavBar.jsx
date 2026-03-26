import React from 'react';
import { Menu } from 'antd';
import { useLocation, history } from 'umi';
import lv1 from '../assets/logo_v2_01.jpg'
import lv2 from '../assets/logo_v2_02.jpg'

const navContainer = {
  display: 'inline-flex',
  alignItems: 'center',
  background: '#fff',
  padding: '0 24px',
  borderRadius: 50,
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 32,
};

const vipStyle = {
  color: '#1890ff',
  fontWeight: 'bold',
  marginLeft: 4,
};

const menuStyle = {
  borderBottom: 'none',
  background: 'transparent',
  fontWeight: 'bold',
};

function NavBar() {
  const { pathname } = useLocation();
  const current = pathname.replace(/\/$/, '') || '/';

  return (
    <div style={navContainer}>
      {/* Logo + 品牌 */}
      <div style={logoStyle}>
        <img src={lv1} alt="logo" style={{ height: 24, marginRight: 8 }} />|
        <img src={lv2} alt="logo" style={{ height: 18, marginLeft: 8,marginTop:4 }} />
        {/* <span>
          视界云 |<span style={vipStyle}>VIPspeed</span>
        </span> */}
      </div>

      {/* 菜单项 */}
      <Menu
        mode="horizontal"
        theme="light"
        selectedKeys={[current]}
        onClick={e => history.push(e.key)}
        style={menuStyle}
      >
        <Menu.Item key="/">首页</Menu.Item>
        <Menu.Item key="/tiktok">TikTok短视频专线</Menu.Item>
        <Menu.Item key="/guide">跨境电商专线</Menu.Item>
        <Menu.Item key="/partner">跨境电商工具</Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;