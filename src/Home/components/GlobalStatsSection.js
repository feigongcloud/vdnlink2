// src/components/GlobalStatsSection.js
import React from 'react';
import { Row, Col } from 'antd';
import './GlobalStatsSection.css';

const stats = [
  { value: '4000+', label: '全球边缘节点' },
  { value: '60+',   label: '电商直播基地' },
  { value: '50+',   label: '国家及地区覆盖' },
  { value: '2000+', label: '跨境大卖家首选' },
];

export default function GlobalStatsSection() {
  return (
    <section className="global-section">
      <h2 className="global-title">跨境全球</h2>
      <div className="global-content">
        <img
          className="global-bg"
          src="https://g2.vdnlink.cn/p5_icon_02.jpg"  /* 替换成你的背景图地址 */
          alt="全球网络"
        />
        <Row className="stats-row" justify="space-around" align="middle">
          {stats.map(s => (
            <Col key={s.label} xs={12} sm={6} className="stats-item">
              <div className="stats-value">{s.value}</div>
              <div className="stats-underline" />
              <div className="stats-label">{s.label}</div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}