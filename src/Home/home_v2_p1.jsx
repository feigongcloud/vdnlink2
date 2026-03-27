import React,{ useState } from 'react';
import { message ,Typography } from 'antd';
import 'antd/dist/antd.css';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import {sendSpecialService}  from './service'
import FeatureSection from './components/FeatureSection';
const { Title, Paragraph, Text, Link } = Typography;

const HomeV2Page1 = () => {
  // Banner 区样式
  const bannerStyle = {
    width: '100%',
    minHeight: '125vh',
    // background: 'linear-gradient(90deg, #E0FFF3 0%, #D7F3FF 100%)',
    background: 'linear-gradient(140deg, #F0FEFF 0%, #E5F9FF 50%, #FFF5FF 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    padding: '0 16px',
    paddingTop:'70px'
  };

  const titleStyle = {
    margin: 10,
    fontSize: '3.5rem',
    fontWeight: 900,
    color: '#0057FF',
    lineHeight: 1.2,
    letterSpacing:'8px'
  };

  const subtitleStyle = {
    margin: '8px 0 24px',
    fontSize: '1rem',
    color: '#555',
    letterSpacing:'2px'
  };

  const btnStyle = {
    background: 'linear-gradient(270deg, #4CD7FF 0%, #0062FF 100%)',
    border: 'none',
    borderRadius: 24,
    padding: '12px 32px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const imageStyle = {
    maxWidth: 400,
    width: '100%',
    marginTop: 20,
  };

   const [modalVisit, setModalVisit] = useState(false);

  return (
    <div style={{ position: 'relative' }}>

      {/* Hero Banner */}
      <section style={bannerStyle}>
        <h3 style={{  fontSize: '1.25rem', color: '#333',letterSpacing:'8px' }}>
          助您高效、安全、经济出海
        </h3>
        <h1 style={titleStyle}>
          跨境电商专线网络
        </h1>
        <p style={subtitleStyle}>
          TikTok短视频专线 ｜ 海外跨境直播 ｜ 短视频矩阵运营 ｜ 企业跨境办公 ｜ 海外AI工具访问
        </p>
        <button style={btnStyle}  onClick={() => {
              setModalVisit(true);
            }}>
          获取专属服务
        </button>

        {/* 产品图 */}
        <img
          style={imageStyle}
          src="https://g2.vdnlink.cn/p1_v2_pd.jpg"   /* 替换成你的实际资源路径 */
          alt="产品展示"
        />

<FeatureSection/>

      </section>

 <ModalForm
        title="获取专属服务"
        open={modalVisit}
        
        onFinish={async (val) => {
       console.log(val)

       sendSpecialService(val).then(res=>{
           console.log(res)
       })

          message.success('提交成功');
          return true;
        }}
        onOpenChange={setModalVisit}
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
   
 
    </div>
  );
};

export default HomeV2Page1;