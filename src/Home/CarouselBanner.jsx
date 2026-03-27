import React,{ useState } from 'react';
import { Carousel,Button,message ,Typography } from 'antd';
import 'antd/dist/antd.css';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import {sendSpecialService}  from './service'

const { Title, Paragraph, Text, Link } = Typography;

const contentStyle= {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


const CarouselBanner=() => {
    
  const [modalVisit, setModalVisit] = useState(false);


    return (
      <>
      
        <Carousel autoplay>

        <div className='b01' >
           <img src='https://g2.vdnlink.cn/banner56.jpg' loading="lazy"/>
           <Button className='butt01' type="primary"
            onClick={() => {
              setModalVisit(true);
            }}
           >获取专属服务</Button>
        </div>

        <div className='b01' >
           <img src='https://g1.vdnlink.cn/banner031.jpg' loading="lazy"/>
           <Button className='butt01' type="primary"
            onClick={() => {
              setModalVisit(true);
            }}
           >获取专属服务</Button>
        </div>
        {/* <div className='b01'>
        <img src='https://g1.vdnlink.cn/banner081.jpg' loading="lazy"/>
        <Button className='butt01' type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >获取专属服务</Button>
        </div> */}
        <div className='b01'>
        <img src='https://g1.vdnlink.cn/banner101.jpg' loading="lazy"/>
        <Button className='butt01' type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >获取专属服务</Button>
        </div>

        <div className='b01'>
        <img src='https://g2.vdnlink.cn/banner112.jpg' loading="lazy"/>
        <Button className='butt01' type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >获取专属服务</Button>
        </div>


        
       
      </Carousel>

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
};


export default CarouselBanner;