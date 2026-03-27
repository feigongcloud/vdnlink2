import React from 'react';
import './AiToolsSection.css';

const plans = [
  {
    id: '普惠款',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_08.jpg',
    details: [
      { type: 'wifi',     text: '共享带宽' },
      { type: 'location', text: '1个 原生IP' },
      { type: 'time',     text: '7×24H 在线技术支持' },
    ],
    notes: [
      '普惠套餐',
      '共享带宽',
    ],
  },
  {
    id: '定制款',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_09.jpg',
    details: [
      { type: 'wifi',     text: '?M 独享不限流量' },
      { type: 'location', text: '多个 原生IP' },
      { type: 'time',     text: '7×24H 在线技术支持' },
    ],
    notes: [
      'AI赋能跨境电商，提供美区等独享原生IP',
      '全球热门AI网站访问支持',
    ],
  },
];

export default function AiToolsSection() {
  return (
    <section className="ai-section">
      {/* 标题区 */}
      <div className="ai-header">
        <h3 className="ai-title">海外AI工具访问网络方案</h3>
        <p className="ai-sub">
          随时随地优雅地访问及使用 ChatGPT、Midjourney 等热门 AI 应用
        </p>
      </div>

      {/* 卡片列表 */}
      <div className="ai-grid">
        {plans.map(plan => (
          <div key={plan.id} className="ai-card">
            <div className="card-img">
              <img src={plan.img} alt={plan.id} />
            </div>

            <div className="card-details">
              <h4>套餐内容：</h4>
              <ul>
                {plan.details.map(d => (
                  <li key={d.text} className={`detail-item ${d.type}`}>
                    <span className="detail-icon" />
                    <span className="txt">{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="card-btn"  onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}} >试用·联系</button>

            <ul className="card-notes">
              {/* {plan.notes.map(n => <li key={n}>{n}</li>)} */}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}