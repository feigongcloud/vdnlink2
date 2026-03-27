// src/components/PlanSection.js
import React from 'react';
import './PlanSection.css';

const plans = [
  {
    id: 'A2',
    model: 'SFT1200',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_02.jpg',
    details: [
      { type: 'wifi',  text: '5M 独享不限流量' },
      { type: 'location',    text: '1个 原生IP' },
      { type: 'time', text: '7×24H 在线技术支持' },
    ],
    notes: [
      '支持一台手机直播',
      '满足直播设备的整体网络需求',
    ],
  },
  {
    id: 'A3',
    model: 'SFT1200',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_03.jpg',
    details: [
      { type: 'wifi',  text: '10M 独享不限流量' },
      { type: 'location',    text: '1个 原生IP' },
      { type: 'time', text: '7×24H 在线技术支持' },
    ],
    notes: [
      '支持一台手机直播或电脑OBS直播',
      '满足全场景所有设备的网络需求',
    ],
  },
  {
    id: 'C1',
    model: 'AX1800',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_04.jpg',
    details: [
      { type: 'wifi',  text: '15M 独享不限流量' },
      { type: 'location',    text: '3个 原生IP' },
      { type: 'time', text: '7×24H 在线技术支持' },
    ],
    notes: [
      '每个IP：独享5M带宽，支持一台手机直播',
      '满足直播设备的整体网络需求',
    ],
  },
];

export default function PlanSection() {
  return (
    <section className="plan-section">
      <div className="plan-header">
        {/* <p className="plan-pre">跨境网络高速畅享</p> */}
        <h3 style={{  fontSize: '1.25rem', color: '#333',letterSpacing:'8px' }}>
        跨境网络高速畅享
        </h3>
        <h1 className="plan-title">跨境电商专线网络</h1>
        <p className="plan-sub">
        海外跨境直播 ｜ 短视频矩阵运营 ｜ 企业跨境办公 ｜ 海外AI工具访问
        </p>
      </div>

      <div className="solution-header">
        <h3 className="solution-title">跨境直播网络方案</h3>
        <p className="solution-sub">
          覆盖50+国家及地区、支持海外出海直播、支持户外跨境直播
        </p>
      </div>

      <div className="plan-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            {/* <div className="plan-badge">套餐{plan.id}</div> */}

            <div className="plan-img">
              <img src={plan.img} alt={`套餐${plan.id}`} />
            </div>

            {/* <div className="plan-model">设备型号：{plan.model}</div> */}

            {/* 套餐内容 */}
            <div className="plan-details">
              <h4>套餐内容：</h4>
              <ul className="plan-details-list">
                {plan.details.map(item => (
                  <li key={item.text} className={`detail-item ${item.type}`}>
                    {/* <img src={item.icon} className="detail-icon" alt="" /> */}
                    <span className="detail-icon"></span>

                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="plan-button" onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}>试用·联系</button>

            <ul className="plan-notes">
              {/* {plan.notes.map(n => <li key={n}>{n}</li>)} */}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}