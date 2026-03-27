/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React,{Suspense,lazy} from 'react';
import { enquireScreen } from 'enquire-js';
import Nav1 from './NavBar';
import Footer1 from './Footer1';
import ProductTabs from './components/ProductTabs';
import CaseSection from './components/CaseSection2';
import GlobalStatsSection from './components/GlobalStatsSection';
import AfterSalesSection from './components/AfterSalesSection';
import PartnerSection from './components/PartnerSection';
import ContactSection from './components/ContactSection';



const LazyComponent = lazy(() => import('./home_v2_p1'));

import {
  Nav00DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class HomeV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <div
      style={{
        position: 'absolute',         /* ② 绝对定位 */
        top: 10,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',    /* 居中 */
        zIndex: 1000,
      }}
    >
      <Nav1
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />
      </div>
      ,

      <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>,

     <ProductTabs/>,

    <CaseSection/>,

    <GlobalStatsSection/>,

    <AfterSalesSection/>,

    <PartnerSection/>,

    <ContactSection/>,
     
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
        style={{ position: 'relative' }} 
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
