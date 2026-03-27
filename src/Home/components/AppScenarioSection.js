import React from 'react';
import './AppScenarioSection.css';

const scenarios = [
  {
    img: 'https://g2.vdnlink.cn/tk_p4_icon_01.jpg',
    title: '做号养号&矩阵运营',
  },
  {
    img: 'https://g2.vdnlink.cn/tk_p4_icon_02.jpg',
    title: '极速上传&下载视频',
  },
  {
    img: 'https://g2.vdnlink.cn/tk_p4_icon_03.jpg',
    title: '观看TikTok直播',
  },
  {
    img: 'https://g2.vdnlink.cn/tk_p4_icon_04.jpg',
    title: 'TikTok小店运营',
  },
];

export default function AppScenarioSection() {
  return (
    <section className="app-scenario">
      <h2 className="app-scenario-title">应用场景支持</h2>
      <div className="scenario-grid">
        {scenarios.map((s, idx) => (
          <div key={idx} className="scenario-card">
            <img src={s.img} alt={s.title} className="scenario-img" />
            <div className="scenario-caption">{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}