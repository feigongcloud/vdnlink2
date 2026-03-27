// src/components/FeatureSectionTk.js
import React from 'react';
import { Row, Col, Card } from 'antd';
import './FeatureSection.css';

const features = [
  {
    icon: 'https://g2.vdnlink.cn/tk_p2_icon_01.jpg',
    title: '独享IP',
    desc: '直采本地运营商资源高质量IP库',
  },
  {
    icon: 'https://g2.vdnlink.cn/tk_p2_icon_02.jpg',
    title: '高速稳定',
    desc: '使用专线网络稳定流畅、超低延迟',
  },
  {
    icon: 'https://g2.vdnlink.cn/tk_p2_icon_03.jpg',
    title: '一键直连',
    desc: '快捷联网支持24小时自主下单',
  },
  {
    icon: 'https://g2.vdnlink.cn/tk_p2_icon_04.jpg',
    title: '独家定制',
    desc: '针对TikTok短视频运营打造的专属网络',
  },
];

export default function FeatureSectionTk() {
  return (
    <section className="feature-section">
      {/* 四角装饰线 */}
      <div className="corner-lines" />

      <Row gutter={[24, 24]} justify="center">
        {features.map(item => (
          <Col key={item.title} xs={24} sm={12} md={8} lg={4}>
            <Card className="feature-card" bordered={false} hoverable>
              <img src={item.icon} alt={item.title} className="feature-icon" />
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}