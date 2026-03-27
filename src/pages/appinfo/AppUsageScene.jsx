import React, { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import './AppUsageScene.css';

const { Title, Text } = Typography;

const data = [
  {
    title: 'TikTok短视频养号运营',
    subtitle: '专注于TikTok短视频平台注册、做号养号、矩阵运营、极速上传/下载视频、观看TikTok直播、TikTok小店运营。',
    img: 'https://g2.vdnlink.cn/appsycj01.png',
  },
  {
    title: 'TikTok跨境直播',
    subtitle: '支持TikTok、Shopee、TemuAmazon等跨境电商平台直播加速，不卡顿、不掉线、不标黄。',
    img: 'https://g2.vdnlink.cn/appsycj02.png',
  },
  {
    title: 'AIGC平台网络访问',
    subtitle: '支持ChatGPT、Midjourney、Runway等顶尖AI创作工具为短视频制作注入创新动力，效率翻倍增长。',
    img: 'https://g2.vdnlink.cn/appsycj03.png',
  },
];

const AppUsageScene = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="app-usage-scene">
      <Title level={3} style={{ textAlign: 'center', color: '#0059FF',marginBottom:40,fontSize:32 }}>
        APP适用场景
      </Title>
      <Row gutter={[16, 16]} justify="center">
        <Col span={15}>
          <Card
            hoverable
            className="scene-card"
            cover={<img alt="scene" src={data[0].img} />}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-content">
            {hoveredIndex === null  && (
              <Title level={4} className="scene-title">
                {data[0].title}
              </Title>)}
              {hoveredIndex === 0 && (
                <Text className="scene-subtitle">{data[0].subtitle}</Text>
              )}
            </div>
          </Card>
        </Col>
        <Col span={9}>
          <Card
            hoverable
            className="scene-card"
            cover={<img alt="scene" src={data[1].img} />}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-content">
            {hoveredIndex === null  && (
              <Title level={4} className="scene-title">
                {data[1].title}
              </Title> )}
              {hoveredIndex === 1 && (
                <Text className="scene-subtitle">{data[1].subtitle}</Text>
              )}
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            hoverable
            className="scene-card"
            cover={<img alt="scene" src={data[2].img} />}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-content">
            {hoveredIndex === null  && (
              <Title level={4} className="scene-title">
                {data[2].title}
              </Title>)}
              {hoveredIndex === 2 && (
                <Text className="scene-subtitle">{data[2].subtitle}</Text>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AppUsageScene;