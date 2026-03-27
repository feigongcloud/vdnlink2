// UsageStepsSection.js
import React from 'react';
import './UsageStepsSection.css';

const steps = [
  {
    number: '01',
    title: '微信扫码或搜索小程序',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_21.png',
  },
  {
    number: '02',
    title: '按需求完成下单，获取账号密码',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_22.png',
  },
  {
    number: '03',
    title: 'iOS 客户端 AppStore 下载',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_23.png',
  },
  {
    number: '04',
    title: 'Android 客户端扫码或复制链接',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_24.png',
  },
  {
    number: '05',
    title: '打开 App，用账号密码登录',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_25.png',
  },
  {
    number: '06',
    title: '一键连接，开启网络',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_26.png',
  },
  {
    number: '05',
    title: '打开 App，用账号密码登录',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_27.png',
  },
  {
    number: '06',
    title: '一键连接，开启网络',
    img: 'https://g2.vdnlink.cn/tk_p6_icon_28.png',
  },
];

export default function UsageStepsSection() {
  return (
    <section className="usage-steps">
      <h2 className="usage-title">使用步骤</h2>
      <div className="us-steps-grid">
        {steps.map(({ number, title, img }) => (
        
              <img src={img} alt={title} className="us-step-content-img" />
          
         
        ))}
      </div>

      {/* 下单须知保持不变 */}
      <div className="pre-order-note">
        <h3>下单前必读</h3>
        <p>请在确认购买前充分了解服务详情</p>
        <ol>
          <li>本产品专注于 TikTok 短视频场景，不支持 TikTok 直播；</li>
          <li>不支持访问 Google、Instagram、Facebook 等无法正常访问的国外网站；</li>
          <li>使用后的 IP 无法重新分配，不支持任何形式退款。</li>
        </ol>
      </div>
    </section>
  );
}