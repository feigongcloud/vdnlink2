// src/components/AfterSalesSection.js
import React from 'react';
import { Row, Col } from 'antd';
import './AfterSalesSection.css';

const items = [
  {
    icon: 'https://g2.vdnlink.cn/p6_icon_01.jpg',
    title: '快速响应',
    desc: '技术服务采用并行式服务结构，可快速响应客户呼叫，支持邮件、电话、任意即时通讯软件等沟通工具。',
  },
  {
    icon: 'https://g2.vdnlink.cn/p6_icon_02.jpg',
    title: '高效反馈',
    desc: '运维工程师7*24小时参与一线客户服务，任何问题无需信息传递，实现高效反馈。',
  },
  {
    icon: 'https://g2.vdnlink.cn/p6_icon_03.jpg',
    title: '主动预警',
    desc: '结合多维度智能监控系统，实现对异常服务情况的主动预警，使提前发现和解决异常问题的范围提升到80%以上。',
  },
];

export default function AfterSalesSection() {
  return (
    <section className="after-sales-section">
      <h2 className="after-sales-title">售后保障</h2>
      <Row gutter={[24, 24]} justify="center">
        {items.map(item => (
          <Col key={item.title} xs={24} sm={12} md={8}>
            <div className="after-sales-card">
              <img src={item.icon} alt={item.title} className="card-icon" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}