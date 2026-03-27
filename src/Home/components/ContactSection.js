import React from 'react';
import './ContactSection.css';

const contacts = [
  {
    bg: 'https://g2.vdnlink.cn/p8_icon_03.png', // 客服背景图
    qr: '/images/qr-service.png',
    label: '- 微信客服 -',
    alt: '微信客服二维码',
  },
  {
    bg: 'https://g2.vdnlink.cn/p8_icon_04.png', // 公众号背景图
    qr: '/images/qr-public.png',
    label: '- 微信公众号 -',
    alt: '微信公众号二维码',
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">联系我们</h2>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <div key={i} className="contact-item">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${c.bg})` }}
            />
            {/* <div className="qr-container">
              <img src={c.qr} alt={c.alt} />
            </div>
            <div className="contact-label">{c.label}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}