import React from 'react';
import './IPResultSection.css';

const cards = [
  {
    img: 'https://g2.vdnlink.cn/tk_p5_icon_01.jpg',   // 替换为你的第一张截图 URL
    link: 'www.yalala.com',
  },
  {
    img: 'https://g2.vdnlink.cn/tk_p5_icon_02.jpg',   // 替换为你的第二张截图 URL
    link: 'www.ipinfo.io',
  },
];

export default function IPResultSection() {
  return (
    <section className="ip-section">
      <h2 className="ip-title">IP 检测结果展示</h2>
      <div className="ip-cards">
        {cards.map(({ img, link }, idx) => (
          <div key={idx} className="ip-card">
            <div className="ip-card-image">
              <img src={img} alt={`ip-screenshot-${idx}`} />
            </div>
            <div className="ip-card-footer">
              <span className="ip-icon">IP</span>
              <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}