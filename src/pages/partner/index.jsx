import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import React, { Component } from 'react';
import { Nav00DataSource } from '../../Home/data.source';
import Nav0 from '../../Home/Nav0';
import { enquireScreen } from 'enquire-js';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';
import dayjs from 'dayjs';
import AvatarList from './components/AvatarList';
import axios from 'axios';
import GlobalConstant from '../constant';
import {Helmet} from "react-helmet";
import favicon  from '../../assets/favicon-online.ico'
import Favicon from 'react-favicon';

const { Paragraph } = Typography;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

const FormItem = Form.Item;

class Partners extends Component {

    
     

    constructor(props) {
        super(props);
        this.state = {
          isMobile,
          show: !location.port, // 如果不是 dva 2.0 请删除
          data:[],
          loading:false,
          categoryOptions:[]
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


         //load data

         axios.get(GlobalConstant.API_HOST+'/ccs/vdnlinkPartnerCategory/queryArticleCategorys').then((res) => {
            
            this.setState({categoryOptions:res.data.data})
		});

         axios.get(GlobalConstant.API_HOST+'/ccs/vdnlinkPartner/list?category=255').then((res) => {
			console.log(res.data)
            
            this.setState({data:res.data.data})
		});

      }

      

    render(){

       

          const list = this.state.data?.list || [];

          console.log(list)

          const cardList = list && (
            <List
              rowKey="id"
              loading={this.state.loading}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 4,
              }}
              dataSource={list}
              renderItem={(item) => (
                <a href={item.urllink} target='_blank'>
                <List.Item>
                  <Card className={styles.card} hoverable  cover={<img alt={item.title} src={item.cover} loading="lazy" />}>
                   
                  </Card>
                </List.Item>
                </a>
              )}
            />
          );

          const _that=this

    const filterPartner=(values)=>{

        _that.setState({loading:true})
        axios.post(GlobalConstant.API_HOST+'/ccs/vdnlinkPartner/queryPartnerFilter', values)
        .then(function (res) {
            
            _that.setState({data:res.data.data})
            _that.setState({loading:false})
        })
        .catch(function (error) {
            console.log(error);
        });

    }


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

             <Nav0
              id="Nav0_0"
              key="Nav0_0"
              dataSource={Nav00DataSource}
              isMobile={this.state.isMobile}
            />

<div className={styles.coverCardList}>
        <Card bordered={false}>
          <Form layout="inline" onValuesChange={(_, values) => {
            // 表单项变化时请求数据
            // 模拟查询表单生效
            console.log(values)

            filterPartner(values)

          
          }}>
          <StandardFormRow
              title="所属类目"
              block
              style={{
                paddingBottom: 11,
              }}
            >
              <FormItem name="category">
                  <TagSelect expandable={  this.state.categoryOptions.length<10?false:true}>
                  {this.state.categoryOptions.map((item) => (
                  <TagSelect.Option value={item.id} key={item.id}>
                    {item.category}
                  </TagSelect.Option>
                ))}
                    
                  </TagSelect>
              </FormItem>
            </StandardFormRow>
            </Form>
            </Card>

            <div className={styles.cardList}>{cardList}</div>
            </div>

           

            </>
        )
    }
}




export default Partners