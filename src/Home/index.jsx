/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React,{Suspense,lazy} from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner0 from './Banner0';
import Content0 from './Content0';
import Content5 from './Content5';
import Content3 from './Content3';
import Content11 from './Content11';
import Content13 from './Content13';
import Content15 from './Content15';
import Content16 from './Content16';
import Content17 from './Content17';
import Feature18 from './Content18';
import Footer1 from './Footer1';
// import CarouselBanner from './CarouselBanner';
import Product01 from './Product01';
import Product02 from './Product02';
import Product03 from './Product03';
import Product04 from './Product04';
import Page1 from './page1';
import Evaluate from './Evaluate';
import AppContent17 from './AppContent17';



const LazyComponent = lazy(() => import('./CarouselBanner'));

import {
  Nav00DataSource,
  Banner01DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Content110DataSource,
  Content150DataSource,
  Content160DataSource,
  Content170DataSource,
  Feature180DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
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
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Banner0
      //   id="Banner0_1"
      //   key="Banner0_1"
      //   dataSource={Banner01DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // <CarouselBanner/>,

      <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>,

      <Product03/>,

      <Product01/>,

      <Product02/>,

    

      <Product04/>,

      <Page1 key="page1" isMobile={this.state.isMobile} />,

    //   <Content3
    //   id="Content3_0"
    //   key="Content3_0"
    //   dataSource={Content30DataSource}
    //   isMobile={this.state.isMobile}
    // />,

    <Evaluate/>,

    <Content11 
    id="Content1_1"
    key="Content1_1"
    dataSource={Content110DataSource}
    isMobile={this.state.isMobile}
    />,

      // <Content0
      //   id="Content0_0"
      //   key="Content0_0"
      //   dataSource={Content00DataSource}
      //   isMobile={this.state.isMobile}
      // />,


      // <Content13 />,


      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,

      <Feature18
      id="Content18_0"
      key="Content18_0"
      dataSource={Feature180DataSource}
      isMobile={this.state.isMobile}
    />, 

      <AppContent17
      id="Content17_0"
      key="Content17_0"
      dataSource={Content170DataSource}
      isMobile={this.state.isMobile}
    />, 

      <Content15
      id="Content15_0"
      key="Content15_0"
      dataSource={Content150DataSource}
      isMobile={this.state.isMobile}
    />,  

    <Content16
    id="Content16_0"
    key="Content16_0"
    dataSource={Content160DataSource}
    isMobile={this.state.isMobile}
  />, 
     
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
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
