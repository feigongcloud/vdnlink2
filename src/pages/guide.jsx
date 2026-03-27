import React from 'react';
import { enquireScreen } from 'enquire-js';
import Favicon from 'react-favicon';
import SuspendButton from 'suspend-button'
import favicon from '../assets/favicon-online.ico';
import {Helmet} from "react-helmet";
import Nav0 from '../Home/Nav0';
import Footer1 from '../Home/Footer1';
import Banner2 from '../Home/Banner2';
import Feature0 from '../Home/Feature0';
import Feature1 from '../Home/Feature1';
import Content21 from '../Home/Content21';
import Content17 from '../Home/Content17';
import Content8 from '../Home/Content8';
import Combo1 from '../Home/Combo1';
import Combo2 from '../Home/Combo2';
import Combo3 from '../Home/combo3';
import Combo4 from '../Home/Combo4';
import CarouselBanner2 from '../Home/CarouselBanner2';
import AppContent17 from '../Home/AppContent17';

import {
    Nav00DataSource,
    Banner02DataSource,
    Feature00DataSource,
    Feature10DataSource,
    Footer10DataSource,
    Content210DataSource,
    Content170DataSource,
    Content80DataSource,
    Combo0DataSource,
    Combo1DataSource,
    Combo2DataSource,
    Combo3DataSource
  } from '../Home/data.source';

  import '../Home/less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};


export default class Guide extends React.Component {


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

          //   <Banner2
          //   id="Banner0_2"
          //   key="Banner0_2"
          //   dataSource={Banner02DataSource}
          //   isMobile={this.state.isMobile}
          // />,


          <CarouselBanner2/>,
        // <Feature0
        //   id="Feature0_0"
        //   key="Feature0_0"
        //   dataSource={Feature00DataSource}
        //   isMobile={this.state.isMobile}
        // />,

        // <Content8 
        // id="Content8_0"
        // key="Content8_0"
        // dataSource={Content80DataSource}
        // isMobile={this.state.isMobile}
        // />,

        <Combo1
        id="combo0_0"
           key="combo0_0"
           dataSource={Combo0DataSource}
        />,

        <Combo3
        id="combo0_0"
           key="combo0_0"
           dataSource={Combo2DataSource}
        />,

        <Combo2
        id="combo0_0"
           key="combo0_0"
           dataSource={Combo1DataSource}
        />,

      

        <Combo4
        id="combo0_0"
           key="combo0_0"
           dataSource={Combo3DataSource}
        />,
        
        <Feature1 
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
        />,

        // <Content21 
        // id="Content21_0"
        // key="Content21_0"
        // dataSource={Content210DataSource}
        // isMobile={this.state.isMobile}
        // />,

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

        return (
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

<script>
{'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?74570af8a2750e0757c6b0490a75e3e6";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'}
</script>

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
          );
     }
}

