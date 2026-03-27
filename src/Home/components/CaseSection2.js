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
      <img
              src="https://g2.vdnlink.cn/p4_icon_bg_01.png"
              alt="科学研究院-博商管理"
              className="case-img-bg"
            />
      </div>

      {/* 第二条案例 */}
      <div className="case-box">
      <img
              src="https://g2.vdnlink.cn/p4_icon_bg_02.png"
              alt="科学研究院-博商管理"
              className="case-img-bg"
            />
      </div>


 {/* 直播基地 - 重庆 */}
 <div className="case-box">
 <img
              src="https://g2.vdnlink.cn/p4_icon_bg_0301.png"
              alt="科学研究院-博商管理"
              className="case-img-bg"
            />
      </div>

      {/* 高校合作 */}
      <div className="case-box">
      <img
              src="https://g2.vdnlink.cn/p4_icon_bg_0401.png"
              alt="科学研究院-博商管理"
              className="case-img-bg"
            />
      </div>

    </section>
  );
}