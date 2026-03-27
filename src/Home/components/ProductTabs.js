// src/components/ProductTabs.js
import React, { useState } from 'react';
import './ProductTabs.css';

const data = {
  tiktok: {
    price: '3.3',
    unit: '元起/天',
    features: ['1个原生IP', '不限流量', '15M带宽'],
    cards: [
      { title: '做号养号·矩阵运营', img: 'https://g2.vdnlink.cn/p3_icon_08.jpg' },
      { title: '极速上传·下载视频', img: 'https://g2.vdnlink.cn/p3_icon_07.jpg' },
      { title: '观看TikTok直播', img: 'https://g2.vdnlink.cn/p3_icon_05.jpg' },
      { title: 'TikTok小店运营', img: 'https://g2.vdnlink.cn/p3_icon_06.jpg' },
    ],
  },
  ecom: {
    price: '5.5',
    unit: '元起/天',
    features: ['2个原生IP', '不限流量', '20M带宽'],
    cards: [
      { title: '跨境直播网络方案', tags: ['Tiktok直播', '原生独享', '稳定流畅', '精准'], img: 'https://g2.vdnlink.cn/1707014742086.jpeg' , desc: '为全球TikTok等跨境直播提供无缝的网络方案。我们的服务覆盖超过50个国家和地区，配置专线级网络和高量原生独享IP，确保直播的稳定性、速度和精确性。无论您在户外还是室内，无论是国内团队出海还是海外团队进行跨境直播，我们都能满足您一键开播的需求，让您享受流畅的直播体验。'},
      { title: '企业跨境办公网络方案', tags: ['跨境网络办公', '智能分流', '全球互联', '稳定'], img: 'https://g2.vdnlink.cn/1707014825715.jpeg',desc:'为全球企业提供高效稳定的国际办公网络方案。专线级网络服务能实现全球任意两点间的快速、稳定连接，无论访问国内还是国外，都能无感切换、智能分流。让您的全球总部与分支机构轻松实现网络互联互通，无忧访问全球总部IT服务及资源，真正实现全球范围内的协同办公。' },
      { title: '短视频运营网络方案', tags: ['做号养号', '矩阵运营', '高效', '精准'], img: 'https://g2.vdnlink.cn/1707014903914.jpeg',desc:'专业的TikTok短视频类矩阵运营网络方案。服务覆盖50+国家及地区，提供专线级网络和高质量原生独享IP，拥有千万级IP资源库。满足多终端、多IP节点需求定制，满足TikTok、Reels等短视频平台的做号养号、精品养号、矩阵养号需求。单台设备最大支持 120 台终端同时接入。' },
      { title: '海外AI工具访问网络方案', tags: ['海外热门AI', '访问加速', '效率加倍'], img: 'https://g2.vdnlink.cn/1707014870139.jpeg',desc:'企业级ChatGPT类海外AI应用访问网络方案。提供美区等原生独享 IP、专线级网络服务，体验高速、稳定、安全的网络连接，无论是工作室还是大型跨国企业，满足您随时随地优雅地访问及使用ChatGPT、Bard、Poe等热门AGI应用，无需担心网络问题和账号封号等风险。' },
    ],
  },
};

export default function ProductTabs() {
  const [active, setActive] = useState('tiktok');

  return (
    <div className="prod-tabs-wrapper">
      {/* Tab 按钮 */}
      <div className="prod-tabs">
        <button
          className={`tab-btn ${active === 'tiktok' ? 'active' : ''}`}
          onClick={() => setActive('tiktok')}
        >
          TikTok短视频专线
        </button>
        <button
          className={`tab-btn ${active === 'ecom' ? 'active' : ''}`}
          onClick={() => setActive('ecom')}
        >
          跨境电商专线
        </button>
      </div>

      {/* 内容面板 */}
      <div className="prod-content">
        {/* 价格与特性 */}
        {active==='tiktok' ? (<div className="price-box">
        {/* <div className="price-main">
          <div className="price-number">{data[active].price}</div>
          <div className="price-unit">{data[active].unit}</div>
          </div> */}
          {/* <ul className="feature-list">
            {data[active].features.map(f => (
              <li key={f}><span className="dot" />{f}</li>
            ))}
          </ul> */}
          <img src='https://g2.vdnlink.cn/p3_icon_price_01.png' />
        </div>): null}
        

        {/* 四宫格卡片 */}
        <div className="card-grid">
          {data[active].cards.map(card => (
            // <div key={card.title} className="card-item">
            //   <div className="card-header">{card.title}</div>
            //   <img src={card.img} alt={card.title} />
            // </div>

<div
      key={card.title}
      className={`card-item ${active === 'ecom' ? 'ecom-card' : ''}`}
    >
      <img src={card.img} alt={card.title} />
      {active === 'ecom' ? (
        // <div className="card-overlay">
        //   <h3>{card.title}</h3>
        //   <ul className="overlay-tags">
        //     {card.tags.map(tag => (
        //       <li key={tag} className="overlay-tag">{tag}</li>
        //     ))}
        //   </ul>
        //   <p>{card.desc}</p>
        // </div>
        <div className="card-info-wrapper">
        {/* 默认态信息层：标题 + tags */}
        <div className="card-info">
          <h3 className="info-title">{card.title}</h3>
          <ul className="info-tags">
            {card.tags.map(tag => (
              <li key={tag} className="info-tag">{tag}</li>
            ))}
          </ul>
        </div>
        {/* Hover 态信息层：标题 + desc */}
        <div className="card-detail">
          <h3 className="detail-title">{card.title}</h3>
          <p className="detail-desc">{card.desc}</p>
        </div>
      </div>

      ) : (
        <div className="card-header">{card.title}</div>
      )}
    </div>

          ))}
        </div>

        {/* 更多按钮 */}
        <button className="learn-more"  onClick={()=>{  active==='tiktok' ? location.href='tiktok' : location.href='guide' }} >点击了解更多 &gt;</button>
      </div>
    </div>
  );
}