import React from 'react';
import wb_logo from '../assets/icon-weibo.svg';
import wx_logo from '../assets/icon-weixin.svg';
import zh_logo from '../assets/icon-zhihu.svg';
import yg_logo from '../assets/icon-yg.png';
import {Tag,Typography,Button,Card}  from 'antd';
const { Title } = Typography;
import { SaveOutlined,SearchOutlined } from '@ant-design/icons';


export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://g1.vdnlink.cn/vipspeed2.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: '',
  },
  content: {
    className: 'banner0-content',
    children: '',
  },
  button: { className: 'banner0-button', children: '' },
};


export const Banner02DataSource = {
  wrapper: { className: 'banner2' },
  textWrapper: { className: 'banner2-text-wrapper' },
  title: {
    className: 'banner2-title',
    children: '跨境直播快更稳，合规跨境更放心',
  },
  content: {
    className: 'banner2-content',
    children: '尊享全球跨境网络专线加速服务',
  },
  button: { className: 'banner2-button', children: '立即体验' },
};


export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '全场景支持' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://g1.vdnlink.cn/support01.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'TikTok直播',
            },
            { name: 'content', children: '满足目前直播间所有设备的网络需求' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://g1.vdnlink.cn/support02.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'TikTok短视频矩阵',
            },
            {
              name: 'content',
              children: '支持多IP模式，IP上线100，满足做号养号',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://g1.vdnlink.cn/support03.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '全平台加速',
            },
            {
              name: 'content',
              children: '支持Amazon、Shopify、Lazada等跨境电商平台加速',
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '合作伙伴', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg01.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg02.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg03.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg04.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg05.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg06.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg07.svg',
          },
          content: { children: '' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://g1.vdnlink.cn/partnersvg08.svg',
          },
          content: { children: '' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '选择VIPSPeed的理由',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-wdlc.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '稳定流畅' },
          content: {
            className: 'content3-content',
            children:
              'TikTok上24小时高清直播，不卡顿，不掉线',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-dxys.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '独享原生IP' },
          content: {
            className: 'content3-content',
            children:
              'IP未被标记或污染，纯净唯一，用完即废，解决0播放、限流、黑屏等问题',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-qqfg.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '全球覆盖' },
          content: {
            className: 'content3-content',
            children:
              '与多个国家/地区运营商合作，满足TIKTOK稳定运营要求',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-24fw.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '7X24H服务' },
          content: {
            className: 'content3-content',
            children:
              '客服随时在线为您提供专业的技术支持',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-jcjy.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '即插即用' },
          content: {
            className: 'content3-content',
            children:
              '不挑设备，无需配置或安装软件，连接WIFI就能使用',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://g1.vdnlink.cn/icon-hfhg.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '线路合法合规' },
          content: {
            className: 'content3-content',
            children:
              '使用符合国家政策的三大运营商正规运营商跨境专线',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 8,
        className: 'block',
        title: {
          className: 'logo',
          children:
            <div>&nbsp;</div>,
        },
        childWrapper: {
         
          children: [
            {
              name: 'content0',
              children: '官方客服:18665843307',
              className: 'footercontent01',
            },
            {
              name: 'content0',
              children: '广东省深圳市福田区新一代产业园3栋1804',
              className: 'footercontent01',
            },
            {
              name: 'content0',
              children: '深圳视界云天科技有限公司',
              className: 'footercontent01',
            },
            {
              name: 'weibo',
              className: 'links-weibo',
              children:<span><div class='f01'><a href='https://weibo.com/vdncloud' target='_blank'><img  src={wb_logo} /></a></div><div class='f01'> <a href='https://mp.weixin.qq.com/s/jhrg-1j9iPZ551cD0R9amg' target='_blank'><img src={wx_logo} /></a></div><div class='f01'> <a href='https://www.zhihu.com/column/vdncloud2016' target='_blank'><img src={zh_logo} /></a> </div><div class='f01'> <a href='https://www.cifnews.com/vdnlink' target='_blank'><img src={yg_logo} /></a> </div></span>
                
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '' },
            { name: 'link1', href: '#', children: '' },
            { name: 'link2', href: '#', children: '' },
            { name: 'link3', href: '#', children: '' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            { href: 'https://www.zhihu.com/column/vdncloud2016', name: 'link0', children: '知乎' },
            { href: 'https://weibo.com/vdncloud', name: 'link1', children: '微博' },
            { href: 'https://mp.weixin.qq.com/s/jhrg-1j9iPZ551cD0R9amg', name: 'link3', children: '公众号' },
            { href: 'https://www.cifnews.com/vdnlink', name: 'link5', children: '雨果跨境' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '支持中心' },
        childWrapper: {
          children: [
            { href: 'https://marketplace.huaweicloud.com/contents/e0ef4e14-e714-4ca0-876f-0955e60fbaee#productid=OFFI773485048240300032', name: 'link0', children: '云商店' },
            { href: 'http://link.vdncloud.com', name: 'link1', children: '在线购买' },
            { href: '/guide', name: 'link3', children: '产品套餐' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <a target='_blank' href='https://beian.miit.gov.cn'>粤ICP备2022128504号</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <a target='_blank' href='https://www.qcc.com/firm/d8eaade3b534fa18f8ee067ef7c03e64.html'>Copyright © 深圳视界云天科技有限公司</a>
      </span>
    ),
  },
};




export const Content170DataSource = {
  OverPack: {
    className: 'home-page-wrapper content17-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '联系我们', className: 'title-h1' },
      {
        name: 'content',
        children:
          '',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '',
        className: 'title-content',
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        offset:6,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://g1.vdnlink.cn/icon-presale.png',
            },
            {
              name: 'title',
              className: 'feature17-block-title',
              children: '售前咨询',
            },
            {
              name: 'content',
              className: 'feature17-block-content',
              children: '关于VIPSpeed加速盒子的疑问，可联系我们售前小组为您解答。',
            },
            // {
            //   name: 'image',
            //   className: 'feature7-block-image',
            //   children:
            //     'https://g1.vdnlink.cn/vipspeedkf.png',
            // },
            // {
            //   name: 'subcontent',
            //   className: 'feature17-block-content-sub',
            //   children: <>官方微信小助手<img src='https://g1.vdnlink.cn/vipspeedkf.png' /></>,
            // },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://g1.vdnlink.cn/icon-aftersale.png',
            },
            {
              name: 'title',
              className: 'feature17-block-title',
              children: '售后支持',
            },
            {
              name: 'content',
              className: 'feature17-block-content',
              children: '在您的使用周期内，为您提供7×24小时的技术支持与服务保障。',
            },
          ],
        },
      },
   
    ],
  },
};

export  const Content160DataSource={
  OverPack: {
    className: 'home-page-wrapper content16-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          '',
        className: 'title-image',
      },
      { name: 'title', children: 'VIPSpeed跨境网络加速伴侣', className: 'title-h1' },
      {
        name: 'content',
        children:
          '跨境不减速，跨境更提速、助您轻松畅享全球加速服务！',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即试用' } },
  },
}


export  const Content210DataSource={
  OverPack: {
    className: 'home-page-wrapper content21-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          '',
        className: 'title-image',
      },
      { name: 'title', children: '费试用7天(入门款除外)', className: 'title-h1' },
      {
        name: 'content',
        children:<><span className='neworder'>节点IP独享使用</span><span className='neworder2'>7*24小时售后无忧</span></>,
        className: 'title-content3',
      },
      {
        name: 'content',
        children:'使用运营商跨境专线，稳定合规',
        className: 'title-content',
      },
      {
        name: 'content',
        children: '设备即插即用，无需任何配置',
        className: 'title-content',
      },
      {
        name: 'content',
        children: '其他更高的配置套餐，可联系商务定制',
        className: 'title-content2',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即试用' } },
  },
}



export  const Content150DataSource={
  OverPack: {
    className: 'home-page-wrapper content15-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'VIPSpeed开启您的全球加速服务!',
        className: 'title-image',
      },
      { name: 'title', children: '', className: 'title-h1' },
      {
        name: 'content',
        children:
          '',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即试用' } },
  },
}


export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          '',
        className: 'title-image',
      },
      { name: 'title', children: '', className: 'title-h1' },
      {
        name: 'content',
        children:
          '',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '即刻体验' } },
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        offset:6,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://g1.vdnlink.cn/icon-presale.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: '售前咨询',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '关于VIPSpeed加速盒子的疑问，可联系我们售前小组为您解答。',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://g1.vdnlink.cn/icon-aftersale.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: '售后支持',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '在您的使用周期内，为您提供7×24小时的技术支持与服务保障。',
            },
          ],
        },
      },
   
    ],
  },
};


export const Feature180DataSource = {
  wrapper: { className: 'home-page-wrapper feature18-wrapper' },
  page: { className: 'home-page feature18' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature18-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature18-title-h1',
        children: '售后保障',
      },
      {
        name: 'content',
        className: 'feature18-title-content',
        children: '',
      },
    ],
  },
  blockWrapper: {
    className: 'feature18-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 12,
        xs: 24,
        name: 'block0',
        className: 'feature18-block',
        children: {
          className: 'feature18-block-group',
          children: [
            {
              name: 'image',
              className: 'feature18-block-image',
              children:
                'https://g1.vdnlink.cn/iconvs01.svg',
            },
            {
              name: 'content',
              className: 'feature18-block-title',
              children: '快速响应',
            },
            {
              name: 'content',
              className: 'feature18-block-content',
              children: '技术服务采用并行式服务结构，可快速响应客户呼叫，支持邮件、电话、任意即时通讯软件等沟通工具',
            },
          ],
        },
      },
      {
        md: 12,
        xs: 24,
        name: 'block1',
        className: 'feature7-block-hidden',
        children: {
          className: 'feature7-block-group',
          children: [
            
          ],
        },
      },
      {
        md: 12,
        xs: 24,
        name: 'block2',
        className: 'feature18-block',
        children: {
          className: 'feature18-block-group',
          children: [
            {
              name: 'image',
              className: 'feature18-block-image',
              children:
                'https://g1.vdnlink.cn/iconvs02.svg',
            },
            {
              name: 'title',
              className: 'feature18-block-title',
              children: '高效反馈',
            },
            {
              name: 'content',
              className: 'feature18-block-content',
              children: '运维工程师7*24小时参与一线客户服务，任何问题无需信息传递，实现高效反馈',
            },
          ],
        },
      },
      {
        md: 12,
        xs: 24,
        name: 'block3',
        className: 'feature7-block-hidden',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: '身份证',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '识别身份证正反面姓名、身份证号、发证机关等相关信息',
            },
          ],
        },
      },
      {
        md: 12,
        xs: 24,
        name: 'block4',
        className: 'feature18-block',
        children: {
          className: 'feature18-block-group',
          children: [
            {
              name: 'image',
              className: 'feature18-block-image',
              children:
                'https://g1.vdnlink.cn/iconvs03.svg',
            },
            {
              name: 'title',
              className: 'feature18-block-title',
              children: '主动预警',
            },
            {
              name: 'content',
              className: 'feature18-block-content',
              children: '结合多维度智能监控系统，实现对异常服务情况的主动预警，使提前发现和解决异常问题的范围提升到80%以上',
            },
          ],
        },
      },
      {
        md: 12,
        xs: 24,
        name: 'block5',
        className: 'feature7-block-hidden',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: '身份证',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '识别身份证正反面姓名、身份证号、发证机关等相关信息',
            },
          ],
        },
      },
     
    ],
  },
};


export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content19-wrapper' },
  page: { className: 'home-page content19' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content19-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">A1套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>1198</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/SFT1200.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频、直播</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-SFT1200 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>5M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>1个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>每个直播间独立放一台设备；</li><li>支持一台手机直播或电脑OBS直播；</li><li>小号手机勿连入正在直播的IP占用带宽。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary" block icon={<SaveOutlined />} >
              <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97SFT1200.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content19-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">A2套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>1798</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/SFT1200.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频、直播</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-SFT1200 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>10M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>1个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>每个直播间独立放一台设备；</li><li>支持一台手机直播或电脑OBS直播；</li><li>1台主播手机或电脑，1-2台小号进直播间观看，一台电脑查看Tiktok Shop后台和直播大屏。</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary" block icon={<SaveOutlined />} >
               <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97SFT1200.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },
      
      
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">B1套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>3298</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/AX1800.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-AX1800 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>5M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>5个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>盒子会自动发射5个WIFI，每个WIFI对应一个IP。</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary" block icon={<SaveOutlined />} >
               <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97AX1800.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content19-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">B2套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>4398</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/AX1800.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-AX1800 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>5M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>8个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>盒子会自动发射10个WIFI对应一个IP。</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary" block icon={<SaveOutlined />} >
               <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97AX1800.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },

      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">C1套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>3498</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/AX1800.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频、直播</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-AX1800 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>15M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>3个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>盒子会自动发射3个WIFI，每个WIFI对应一个IP。</li><li>如果几个直播间，距离较近，可以用一台设备来覆盖（为保证直播效果，直播手机距离设备10米以内，最多穿一堵墙）；</li><li>每个IP，独享5M带宽；</li><li>每个IP，支持一部手机直播或电脑OBS直播；小号手机勿连入正在直播的IP占用带宽</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary" block icon={<SaveOutlined />} >
               <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97AX1800.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content19-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content19-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<Tag color="#234FEC">C2套餐</Tag>
           },
           {
            name:'price',
            className: 'content19-block-item-price',
            children:<><span className='num'>5888</span><span className='unit'>元/月</span></>
           },
            {
              name: 'image',
              className: 'content19-block-icon jzjgrlz134-editor_css',
              children:
                'https://g1.vdnlink.cn/AX1800.png',
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用场景:短视频、直播</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc',
              children: <span>使用设备:GL-AX1800 路由器</span>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>25M</span><span className='fontnum2'>独享不限流量</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum3'>配置</span><span className='fontnum'>5个</span><span className='fontnum2'>原生IP</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc2',
              children: <><span className='fontnum'>7*24h</span><span className='fontnum2'>在线技术支持</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc3',
              children: <><span className='fontnum5'>使用说明</span></>,
            },
            {
              name: 'desc',
              className: 'content19-block-item-desc5',
              children: <><ul><li>盒子会自动发射5个WIFI，每个WIFI对应一个IP。</li><li>如果几个直播间，距离较近，可以用一台设备来覆盖（为保证直播效果，直播手机距离设备10米以内，最多穿一堵墙）；</li><li>每个IP，独享5M带宽；</li><li>每个IP，支持一部手机直播或电脑OBS直播；小号手机勿连入正在直播的IP占用带宽</li></ul></>,
            },
            {
              name: 'title',
              className: 'content19-block-button',
              children: <> <Button type="primary"  block icon={<SaveOutlined />} >
             <a href='https://g1.vdnlink.cn/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97AX1800.png' target='_blank' > 使用说明下载</a>
            </Button></>,
            },
          ],
        },
      },

    ],
  },
};




export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content20-wrapper' },
  page: { className: 'home-page content20' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '热门咨询' }],
  },
  childWrapper: {
    className: 'content20-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed使用的是什么专线?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             我们使用的是符合国家政策的、与三大运营商直接合作的跨境专线（海底光缆），政策合法合规，用户可放心使用。
        </Card>
              </>
           },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content20-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed专线是怎么搭建的?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             通过搭建国内中转平台+跨境专线+海外中转平台，跨境专线底层路线使用的是与三大运营商合作的跨境专线。
        </Card>
              </>
           },
          ],
        },
      },
      
      
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed延迟有多高?会卡顿吗?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             延迟：国内延迟不到30ms；目的到国家东南亚100ms以内；欧美150ms左右；卡顿：不会卡顿，我们会保障我们的网络链路是我完全通畅的，其他问题如本地网络问题我们会配合协助您一起解决。
        </Card>
              </>
           },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content20-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>直播网络效果稳定吗?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             非常稳定。VIPSpeed运维团队每天都会对产品进行各项功能指标测试及优化，包括每天24小时连续直播测试等，且我们配置7*24小时的值班运维人员及时响应客户的问题及需求。
        </Card>
              </>
           },
          ],
        },
      },

      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>需要押金吗?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             支持免费试用，免费试用7天(入门级套餐除外)。由于涉及硬件成本，需要支付押金（标准为白色盒子：200元/台 、黑色盒子：600元/台），待收到退回盒子5个工作日内安排押金全额返还。服务过程中如涉及盒子质量问题，免费予以更换。
        </Card>
              </>
           },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content20-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed操作使用是否复杂?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             产品使用无门槛，也无需下载任何软件，简单几步即可完成。<br/><br/><br/><br/>
        </Card>
              </>
           },
          ],
        },
      },

      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>支持场景有哪些?TikTok直播是否支持?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             目前提供包括但不限于TikTok、亚马逊、速卖通、Shpee、Lazada、Shopify、Facebook、Instagram Live、Youtube Live等跨境平台直播、短视频全场景一站式跨境网络加速支持。
        </Card>
              </>
           },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content20-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>能签合同吗?怎么签?支持开票吗?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             合同：需要签合同，这是保障您和我们双方的权益。怎么签：线下签；或者线上您和我们先后打印出来盖章留存。开票：提供开盘信息，我们会在3-5天内为您开票。
        </Card>
              </>
           },
          ],
        },
      },

      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content19-block product-card-0',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed专线覆盖哪些地区?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             我们海外资源非常丰富，全球主要国家及地区均已覆盖，
             <p>并支持结合用户需求定制。</p>
             <p>IP节点都是和当地运营商合作原生独享IP。</p>
        </Card>
              </>
           },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content20-block product-card-1',
        md: 12,
        xs: 24,
        children: {
          className: 'content20-block-item',
          children: [
            {
              name:'tag',
              className: 'content19-block-item-tag',
              children:<>
             <Card title={<><Tag color="#E52E40">Q</Tag><span>VIPSpeed怎么收费，是否有折扣优惠?</span></>} bordered={false} >
             <Tag color="#2DDAAC">A</Tag>
             在免费试用期结束后，用户可以结合自身需求选择年度、季度或月度形式套餐进行订阅。按相应套餐预付享有以下折扣：季度签约：95折，半年签约9折、年度签约：8.5折
        </Card>
              </>
           },
          ],
        },
      },
      


    ],
  },
};