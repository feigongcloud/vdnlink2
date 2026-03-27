// src/components/FeatureSection.js
import React from 'react';
import { Row, Col, Card } from 'antd';
import './FeatureSection.css';

const features = [
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y2.jpg',
    title: '稳定流畅',
    desc: '支持TK等24小时跨境直播不卡顿、不掉线',
  },
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y3.jpg',
    title: '独享原生IP',
    desc: 'IP纯境唯一，用完即废，解决0播、限流、黑屏等问题',
  },
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y4.jpg',
    title: '全球覆盖',
    desc: '美国、印尼、越南、泰国、新加坡、英国等50+国家及地区',
  },
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y5.jpg',
    title: '7×24H服务',
    desc: '客户随时在线，为您提供专业的技术与服务支持',
  },
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y6.jpg',
    title: '即插即用',
    desc: '不挑设备、无需配置或安装软件，连接WiFi就能用',
  },
  {
    icon: 'https://g2.vdnlink.cn/p1_icon_y1.jpg',
    title: '线路合法合规',
    desc: '使用符合国家政策的三大运营商跨境专线',
  },
];

export default function FeatureSection() {
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