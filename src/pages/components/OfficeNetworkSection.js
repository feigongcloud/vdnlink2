import React from 'react';
import './OfficeNetworkSection.css';

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
      '企业跨境办公网络无感切换、智能分流、访问国内国外一样快',
    ],
  },
];

export default function OfficeNetworkSection() {
  return (
    <section className="office-section">
      <div className="office-header">
        <h3 className="office-title">企业跨境办公网络方案</h3>
        <p className="office-sub">
          全球总部与分支机构互联互通、无忧访问全球总部IT服务及资源
        </p>
      </div>

      <div className="office-grid">
        {plans.map(plan => (
          <div key={plan.id} className="office-card">
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
            <button className="card-btn" onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}>试用·联系</button>
            <ul className="card-notes">
              {/* {plan.notes.map(n => <li key={n}>{n}</li>)} */}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}