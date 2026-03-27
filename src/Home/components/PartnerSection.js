// PartnerSection.js
import React from 'react';
import './PartnerSection.css';

const logos = [
  'https://g2.vdnlink.cn/p7_logo_01n.png',
  'https://g2.vdnlink.cn/p7_logo_02n.png',
  'https://g2.vdnlink.cn/p7_logo_03n.png',
  'https://g2.vdnlink.cn/p7_logo_04n.png',
  'https://g2.vdnlink.cn/p7_logo_05n.png',
  'https://g2.vdnlink.cn/p7_logo_06n.png',
  'https://g2.vdnlink.cn/p7_logo_07n.png',
  'https://g2.vdnlink.cn/p7_logo_08n.png',
  'https://g2.vdnlink.cn/p7_logo_09n.png',
  'https://g2.vdnlink.cn/p7_logo_10n.png',
  'https://g2.vdnlink.cn/p7_logo_11n.png', // 第11个
];

export default function PartnerSection() {
  const row1 = logos.slice(0, 4);
  const row2 = logos.slice(4, 7);
  const row3 = logos.slice(7, 11);

  return (
    <section className="partner-section">
      <h2 className="partner-title">合作伙伴</h2>

      <div className="partner-grid">
        {/* 第一行 4 个 */}
        <div className="partner-row row--first">
          {row1.map(src => (
            <div key={src} className="partner-item">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* 第二行 3 个，左偏移嵌合 */}
        <div className="partner-row row--second">
          {row2.map(src => (
            <div key={src} className="partner-item">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* 第三行 4 个 */}
        <div className="partner-row row--third">
          {row3.map(src => (
            <div key={src} className="partner-item">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}