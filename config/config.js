
export default {
    singular: true,
    antd:{},
    exportStatic: {},
    chainWebpack(config,{env}) {
        //define self configuration
        config.output.filename("static/js/vdnlink.[hash].js");
        config.output.chunkFilename("static/js/[id].[chunkhash:8].chunk.js");
    
      },
    routes:[{
        path: "/",
        component: '@/pages/index',
    },
    {
        path:'/tiktok',
        component:'@/pages/tiktok'
    },
    {
        path:'/guide',
        component:'@/pages/ecommerce'
    },
    {
        path:'/partner',
        component:'@/pages/partner_v2'
    },
    {
        path:'/info',
        component:'@/pages/App'
    },
    {
        path:'/app',
        component:'@/pages/appinfo'
    },
    {
        path:'/detail/:id',
        component:'@/pages/detail/detail'
    },
    {
        path:'/privacy-policy',
        component:'@/pages/privacy'
    }
],
};