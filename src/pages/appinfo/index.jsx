import React, { Component,Suspense,lazy } from 'react';
import { enquireScreen } from 'enquire-js';
import Favicon from 'react-favicon';
import favicon from '../../assets/favicon-online.ico';
import {Helmet} from "react-helmet";
import Nav0 from '../../Home/Nav0';
import Footer1 from '../../Home/Footer1'; 
import '../../Home/less/antMotionStyle.less';
import Page2 from './page2';
import AppContent1 from './AppContent1';
import AppFeature18 from './AppFeature18';
import AppUsageScene from './AppUsageScene';
import AppFeature19 from './AppFeature19';
import AppContent17 from '../../Home/AppContent17';

// import CarouselBanner from '../../Home/CarouselBanner'

const LazyComponent = lazy(() => import('../../Home/CarouselBanner'));

import {
    Nav00DataSource,
    Content170DataSource,
    Footer10DataSource,
  
  } from '../../Home/data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};


class AppInfo extends Component {

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

    render(){

        const children = [
            <Nav0
            id="Nav0_0"
            key="Nav0_0"
            dataSource={Nav00DataSource}
            isMobile={this.state.isMobile}
          />,

          <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>,

<AppUsageScene/>,

<AppFeature18/>,

<Page2 key="page1" isMobile={this.state.isMobile} />,



   <AppContent1/>,

   <AppFeature19/>,

   <AppContent17
   id="Content17_0"
   key="Content17_0"
   dataSource={Content170DataSource}
   isMobile={this.state.isMobile}
 />, 

          <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />,
        ]

return(
    <>
            

    <Helmet>

    <meta charSet="utf-8" />

<meta
name="title"
content="TikTok直播专线_tiktok网络专线_tiktok加速器_跨境电商直播_一键开播_独享原生IP_国际专线_外贸专线_跨境专线_稳定安全合规_VIPSpeed"
/>

<meta
name="keywords"
content="tiktok直播专线,Tiktok网络专线,TikTok加速器,TK海外专线,TK直播,TK一键开播,tiktok专线加速,tiktok电商直播,跨境电商直播."
/>
<meta
name="description"
content="tiktok直播网络专线,VIPSpeed跨境电商海外专线加速方案,0成本免费测试、0门槛即开即用。TikTok直播稳定流畅,海外本地固定IP安全合规,1000家跨境电商大卖家选择,支持东南亚/美国/英国等海外多平台(TikTok,Facebook,Instagram等)跨境电商直播短视频加速，满足社媒/电商养号/直播/短视频等多场景。"
/>


 <title>VIPSpeed</title>


      </Helmet>

      <Favicon url={favicon} />
  
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
  {/* <SuspendButton img="https://g1.vdnlink.cn/jump-wechat.png" style={{"width":200,"height":200,"right":24,"z-index":99999,"border-radius":0}}></SuspendButton> */}
  </>
)

    }

}

export default AppInfo