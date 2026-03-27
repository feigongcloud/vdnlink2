import React from 'react';
import './TiktokHeroSection.css';

import FeatureSectionTk from './FeatureSectionTk';

const bottomPills = ['不限流量', '独享原生IP', '15M带宽'];

export default function TiktokHeroSection() {
  const featureItems = [
    '全球覆盖, 多国节点',
    '高速稳定, 超低延迟',
    '合法合规, 运营商专线出海',
    '一键直连, 支持24小时自主下单',
  ];

  return (
    <section className="tiktok-hero">
      {/* Hero 文案 */}
      <div className="hero-text">
        {/* <p className="hero-pre">专为TiKTok短视频养号运营服务</p> */}
        <h3 style={{  fontSize: '1.25rem', color: '#333',letterSpacing:'8px' }}>
        专为TiKTok短视频养号运营服务
        </h3>
        <h1 className="hero-title">TIKTOK短视频专线网络</h1>
        <p className="hero-sub">
          做号养号/矩阵运营 ｜ 极速上传/下载视频 ｜ 观看TikTok直播 ｜ TikTok小店运营
        </p>
      </div>

      {/* Card */}
      <div className="hero-card">
    {/* 价格 */}
    {/* <div className="price-group">
          <span className="price-pre">每天仅需</span>
          <span className="price-number-tk">3.3</span>
          <span className="price-unit-tk">元起</span>
        </div> */}

        {/* 中心二维码 */}
        {/* <div className="qr-group">
          <img
            src="https://g2.vdnlink.cn/tk_p1_icon_01.jpg"
            alt="微信扫码了解更多"
            className="qr-img"
          />
          <p className="qr-label">微信扫码 · 了解更多</p>
        </div> */}

        {/* 右侧特性列表 */}
        {/* <ul className="feature-list-tk">
          {featureItems.map(item => (
            <li key={item}>
              <span className="dot" />
              {item}
            </li>
          ))}
        </ul> */}
      </div>

      {/* 底部 Pills */}
      <div className="bottom-pills">
        {bottomPills.map(text => (
          <span key={text} className="pill">
            {text}
          </span>
        ))}
      </div>


<FeatureSectionTk/>

    </section>
  );
}