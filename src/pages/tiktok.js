
import Favicon from 'react-favicon';
import {Helmet} from "react-helmet";
import favicon from '../assets/favicon-online.ico';
import TiktokV2 from '../Home/tiktok_v2';

export default function() {
  return (
    <>
     <Helmet>
     <meta charSet="utf-8" />

     <meta
      name="title"
      content="TikTok直播专线_tiktok短视频矩阵运营_TK加速器_企业跨境办公网络_AIGC网络访问_原生IP独享_合规普惠_稳定流畅_视界云VIPSpeed"
    />

     <meta
      name="keywords"
      content="tiktok直播,tiktok国际版,美国IP节点,TK线路,美国直播专线,英区直播专线,英美专线,tk短视频矩阵,TikTok运营,TK网络,tk直播,海外直播,企业跨境办公,chatgpt网络,AI访问"
    />
    <meta
      name="description"
      content="视界云VIPspeed全球跨境网络专线,0门槛试用!网络支持:全球50+国家/地区海外原生IP独享、TikTok直播快更稳,TK短视频矩阵运营“矩”划算,TK做号养号流量佳,企业跨境办公,访问国内或国外都一样快,无感切换智能分流,ChatGPT、Midjourney等热门AI生成式AIGC网络访问"
    />

    <title>视界云VIPspeed</title>


<script>
{'var _hmt1 = _hmt1 || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?74570af8a2750e0757c6b0490a75e3e6";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'}
</script>

<script>
{'var _hmt2 = _hmt2 || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?bd6a56fe54fb6d5fc43846977f967f39";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'}
</script>

            
            </Helmet>
     <Favicon url={favicon} />
     
     <TiktokV2 />
    
     
    </>
   
  );
}
