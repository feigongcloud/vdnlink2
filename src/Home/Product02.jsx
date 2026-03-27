import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button,Typography,message } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components';
import {sendSpecialService}  from './service'
const { Title, Paragraph, Text, Link } = Typography;

class Product02 extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  handleModalVisible = visible => {
    console.log(visible)
    this.setState({
      modalVisible: visible
    });
  };
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'product-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <>
        <div className='product-page' id="product03">
      <div className={`product-layout-wrapper ${className}`}>
        <div className="product-layout">
        
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
            短视频类矩阵运营网络方案
            </h1>
            <p key="p">专业的TikTok短视频类矩阵运营网络方案。服务覆盖50+国家及地区，提供专线级网络和高质量原生独享IP，拥有千万级IP资源库。满足多终端、多IP节点需求定制，满足TikTok、Reels等短视频平台的做号养号、精品养号、矩阵养号需求。单台设备最大支持 120 台终端同时接入。</p>
            <p className='pf'>短视频做号养号、精品养号、矩阵养号，简单、高效、更精准！</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                  this.handleModalVisible(true)
              }}
              >
                 获取专属服务
              </Button>
            </span>
          </QueueAnim>

          <div className={`${className}-image-wrapper`}>
              <img src='https://g2.vdnlink.cn/1707014903914.jpeg' loading="lazy" />
          </div>
         
        </div>
      </div>
      </div>

      <ModalForm
        title="获取专属服务"
        open={this.state.modalVisible}
        
        
        onFinish={async (val) => {
       console.log(val)

       sendSpecialService(val).then(res=>{
           console.log(res)
       })

          message.success('提交成功');
          return true;
        }}
        onOpenChange={this.handleModalVisible}
      >
         <Typography>
         <Paragraph>
         请留下您的联系方式，我们的专属顾问将在24小时内联系您，详谈您的需求、安排产品试
用。如您希望即时沟通，可添加7X24H官方客服微信（VX:SJYT2022）。
    </Paragraph>
         </Typography>
        <ProForm.Group>
        <ProFormText
            width="md"
            name="name"
            label="姓名/称呼"
            placeholder="请输入姓名/称呼"
            rules={[{ required: true, message: '请输入姓名/称呼!' }]}
          />

          <ProFormText
            width="md"
            name="phone"
            label="手机号/微信"
            placeholder="请输入手机号/微信"
            rules={[{ required: true, message: '请输入手机号/微信!' }]}
          />
        </ProForm.Group>
        {/* <ProForm.Group>
          <ProFormText
            width="md"
            name="company"
            label="单位名称"
            placeholder="请输入单位名称"
            rules={[{ required: true, message: '请输入单位名称!' }]}
          />
           <ProFormText
            width="md"
            name="post"
            label="职位"
            placeholder="请输入职位"
            rules={[{ required: true, message: '请输入职位!' }]}
          />

        </ProForm.Group> */}
        <ProForm.Group>
        <ProFormTextArea
          width="md"
          name="area"
          label="需求/国家或地区"
          placeholder="需求/国家或地区"
          rules={[{ required: true, message: '请输入需求/国家或地区!' }]}
        />
        </ProForm.Group>
       
       
      </ModalForm>

      </>
    );
  }
}

export default Product02;
