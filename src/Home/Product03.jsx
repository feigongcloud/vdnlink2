import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button,Typography ,message} from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components';
import {sendSpecialService}  from './service'
const { Title, Paragraph, Text, Link } = Typography;

class Product03 extends React.PureComponent {

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
        <div className='product-page' id='product01'>
      <div className={`product-layout-wrapper ${className}`}>
        <div className="product-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
            TikTok类跨境直播网络方案
            </h1>
            <p key="p">为全球TikTok等跨境直播提供无缝的网络方案。我们的服务覆盖超过50个国家和地区，配置专线级网络和高质量原生独享IP，确保直播的稳定性、速度和精确性。无论您在户外还是室内，无论是国内团队出海还是海外团队进行跨境直播，我们都能满足您一键开播的需求，让您享受流畅的直播体验。</p>
            <p className='pf'>跨境直播，像本土用户一样，快、稳、准！</p>
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
              <img src='https://g2.vdnlink.cn/1707014742086.jpeg' loading="lazy" />
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

export default Product03;
