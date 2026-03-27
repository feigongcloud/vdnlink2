// src/components/CaseSection.js
import React from 'react';
import { Row, Col } from 'antd';
import './CaseSection.css';

export default function CaseSection() {
  return (
    <section className="case-section">
      <h2 className="case-section-title">客户案例</h2>

      {/* 第一条案例 */}
      <div className="case-box">
        <Row gutter={24} align="middle">
          {/* 文本部分 */}
          <Col xs={24} md={14} className="case-content">
            <h3 className="case-box-title">科学研究院-博商管理</h3>
            <p className="case-box-desc">
              博商管理（获客文化）于2023年4月份开始与我公司达成商务合作，
              主要从事东南亚地区如：泰国、菲律宾、马来等国家跨境业务。
              该公司采购我司数百原生独立IP，500余M带宽，主要以短视频矩阵为主，
              直播为辅，短视频单条播放量高达千万，单账号100W+粉丝量。
            </p>
            <div className="case-steps">
              <div className="case-step">
                <div className="cs-step-badge">01</div>
                <div className="step-text">IP质量优质效果突出</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">02</div>
                <div className="step-text">海外市场重大突破</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">03</div>
                <div className="step-text">稳定获客</div>
              </div>
            </div>
          </Col>

          {/* 图片部分 */}
          <Col xs={24} md={10} className="case-img-col">
            <img
              src="https://g2.vdnlink.cn/p4_icon_01.jpg"
              alt="科学研究院-博商管理"
              className="case-img"
            />
          </Col>
        </Row>
      </div>

      {/* 第二条案例 */}
      <div className="case-box">
        <Row gutter={24} align="middle">
          {/* 图片在左 */}
          <Col xs={24} md={10} className="case-img-col">
            <img
              src="https://g2.vdnlink.cn/p4_icon_02.jpg"
              alt="紫砂基地服务商-Tiktok产业带"
              className="case-img"
            />
          </Col>

          {/* 文本+图示 */}
          <Col xs={24} md={14} className="case-content">
            <h3 className="case-box-title">紫砂基地服务商-Tiktok产业带</h3>
            <p className="case-box-desc">
              无锡 tiktok 紫砂跨境直播基地，专注紫砂、茶叶、文玩等非遗文创产品出海，
              目前用我们专线的入驻紫砂商家已达120+家。
            </p>
            <div className="case-diagram">
              <div className="diagram-step">无线RT</div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">CPE</div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">modem</div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">POP</div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step">CMI</div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step tik-icon">TikTok</div>
            </div>
          </Col>
        </Row>
      </div>


 {/* 直播基地 - 重庆 */}
 <div className="case-box">
        <Row gutter={24} align="middle">
          <Col xs={24} md={14} className="case-content">
            <h3 className="case-box-title">直播基地-重庆</h3>
            <p className="case-box-desc">
              用户需求：直播基地位于重庆，直播目标地区为马来西亚、美国；单个直播间5主播同时对美国、马来地区直播；直播间总数：30+。
            </p>
            <div className="case-steps">
              <div className="case-step">
                <div className="cs-step-badge">01</div>
                <div className="step-text">直播基地部署设备，完美模拟海外网络环境</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">02</div>
                <div className="step-text">根据主播数设置海外IP，主播之间网络环境完全隔离</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">03</div>
                <div className="step-text">加速海外网络，提升网络质量，助力规模化运行</div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} className="case-img-col">
            <img src="https://g2.vdnlink.cn/p4_icon_03.jpg" alt="直播基地-重庆" className="case-img" />
          </Col>
        </Row>
      </div>

      {/* 高校合作 */}
      <div className="case-box">
        <Row gutter={24} align="middle">
          <Col xs={24} md={10} className="case-img-col">
            <img src="https://g2.vdnlink.cn/p4_icon_04.jpg" alt="高校合作" className="case-img" />
          </Col>
          <Col xs={24} md={14} className="case-content">
            <h3 className="case-box-title">高校合作</h3>
            <p className="case-box-desc">
              2024全国三维数字化设计创新大赛，跨境数字贸易专项赛；全国一百多所高校参加此次竞赛活动；活动形式：TikTok直播+短视频；周期：三个月。
            </p>
            <div className="case-steps">
              <div className="case-step">
                <div className="cs-step-badge">01</div>
                <div className="step-text">提供软件+硬件的部署，根据学校数量及环境匹配不同方案</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">02</div>
                <div className="step-text">提供0到1的网络教学服务，全链路资源对接</div>
              </div>
              <div className="case-step">
                <div className="cs-step-badge">03</div>
                <div className="step-text">实施黑白名单方案，为学校提供合规安全稳定的跨境电商出海网络</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </section>
  );
}