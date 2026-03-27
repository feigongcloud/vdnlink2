import React from 'react';
import { enquireScreen } from 'enquire-js';
import Favicon from 'react-favicon';
import favicon from '../assets/favicon-online.ico';
import {Helmet} from "react-helmet";
import Footer1 from '../Home/Footer1';
import Nav1 from '../Home/NavBar';
import PlanSection from './components/PlanSection';
import ContactSection from '../Home/components/ContactSection'
import ShortVideoPlanSection from './components/ShortVideoPlanSection';
import OfficeNetworkSection from './components/OfficeNetworkSection';
import AiToolsSection from './components/AiToolsSection';
import '../Home/less/antMotionStyle.less';

import {
    Nav00DataSource,
    Footer10DataSource,
  } from '../Home/data.source';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};


export default class EcommercePage extends React.Component {
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
            </div>,

            <PlanSection/>,

            <ShortVideoPlanSection/>,

            <OfficeNetworkSection/>,

            <AiToolsSection/>,

            <ContactSection/>,

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
            </>
        )
      }

}