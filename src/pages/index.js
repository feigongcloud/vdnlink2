
import Home from '../Home'
import Favicon from 'react-favicon';
import {Helmet} from "react-helmet";
import favicon from '../assets/favicon-online.ico';
import SuspendButton from 'suspend-button'

export default function() {
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
     
     <Home />
    
     {/* <SuspendButton img="https://g1.vdnlink.cn/jump-wechat.png" style={{"width":200,"height":200,"right":24,"z-index":999999,"border-radius":0}}></SuspendButton> */}
     
    </>
   
  );
}
