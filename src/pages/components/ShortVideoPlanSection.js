import React from 'react';
import './ShortVideoPlanSection.css';

const plans = [
  {
    id: '普惠款',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_05.jpg',
    details: [
      { type: 'wifi',     text: '共享带宽' },
      { type: 'location', text: '1个 原生IP' },
      { type: 'time',     text: '7×24H 在线技术支持' },
    ],
    notes: [
      '普惠套餐，共享带宽，适合外贸类个体商家短视频运营',
    ],
  },
  {
    id: '套餐B1',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_06.jpg',
    details: [
      { type: 'wifi',     text: '5M 独享不限流量' },
      { type: 'location', text: '5个 原生IP' },
      { type: 'time',     text: '7×24H 在线技术支持' },
    ],
    notes: [
      '盒子会自动发射5个Wi-Fi，每个Wi-Fi对应一个IP',
    ],
  },
  {
    id: '定制款',
    img: 'https://g2.vdnlink.cn/tk_p8_icon_07.jpg',
    details: [
      { type: 'wifi',     text: '?M 独享不限流量' },
      { type: 'location', text: '多个 原生IP' },
      { type: 'time',     text: '7×24H 在线技术支持' },
    ],
    notes: [
      '矩阵运营“矩”划算，短视频做号养号更简单',
    ],
  },
];

export default function ShortVideoPlanSection() {
  return (
    <section className="shortvideo-section">
      {/* 二级标题 */}
      <div className="shortvideo-header">
        <h3 className="shortvideo-title">短视频运营网络方案</h3>
        <p className="shortvideo-sub">
          满足 TikTok 等短视频平台的做号养号、精品养号、矩阵养号需求
        </p>
      </div>

      {/* 套餐卡片列表 */}
      <div className="shortvideo-grid">
        {plans.map(plan => (
          <div key={plan.id} className="shortvideo-card">
            {/* 卡片顶部大图 */}
            <div className="card-img">
              <img src={plan.img} alt={plan.id} />
            </div>
            {/* 套餐内容 */}
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
            {/* 操作按钮 */}
            <button className="card-btn" onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}>试用·联系</button>
            {/* 备注 */}
            <ul className="card-notes">
              {/* {plan.notes.map(n => <li key={n}>{n}</li>)} */}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}