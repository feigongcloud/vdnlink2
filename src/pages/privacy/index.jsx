import React from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import Favicon from 'react-favicon';
import favicon from '../../assets/favicon-online.ico'
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const PrivacyPage = () => {
  return (
    <>
    <Favicon url={favicon} />
    <Layout className="layout">
      {/* Header */}
      

      {/* Breadcrumb */}
      <Content style={{ padding: '0',  }}>
       

        {/* Main content */}
        <div className="site-layout-content" style={{ background: '#fff', padding: 24 }}>
         
        <Title level={2}>隐私政策</Title>
          <Paragraph>
            欢迎访问我们的隐私政策页面。我们非常重视您的隐私，并致力于保护您的个人信息。请仔细阅读本隐私政策以了解我们如何收集、使用和保护您的数据。
<br/>视界云VIPSPEED由【深圳视界云天科技有限公司】（以下简称“我们”或“视界云”）开发，是面向企业客户提供的一款SDWAN办公网络安全应用。您应当知悉并理解，视界云仅为本APP的软件开发方，本隐私政策声明收集的数据全部由您所在企业直接收集：您安装并启动本APP后需输入您所在企业的“账号密码”方可使用本软件，视界云将根据您输入的账号密码自动下发相应企业的网络配置。如您对本APP收集和使用数据的规则有任何疑问，请与您所在的企业联系。
<br/>本条款构成您与我们之间具有法律约束力的协议，我们在此特别提醒您认真阅读、充分理解本协议各条款，特别是其中与您的权益相关的条款可能以黑体加粗或加下划线的形式提示您重点注意。请您审慎阅读并选择接受或不接受本协议。若您不同意本条款，请您立即停止访问或使用本软件。
          </Paragraph>

          <Title level={3}>一、我们收集的信息</Title>
          <Paragraph>
1. 视界云VIPSPEED在您使用本软件的过程中收集如下信息：
<br/>
【Andriod APP】系统语言、操作系统信息、操作系统 api 版本号、Android_ID、网络设备硬件地址（MAC 地址）、CPU 信息；存储信息：硬盘使用情况、内存使用情况；系统或网络识别信息：IP地址、cookie 数据；网络身份识别信息：账号密码；应用信息：应用版本；WLAN 接入点（BSSID、SSID）、网络接入方式、类型、状态、网络质量数据；服务内容信息：用户反馈；服务日志信息；
<br/>
【IOS APP】设备信息：设备名称、设备 ID、设备型号、操作系统信息、操作系统 api 版本号；系统或网络识别信息：IP地址、cookie 数据；无线网络名称、WLAN接入点（BSSID、SSID）、网络接入方式、类型、状态、网络质量数据；服务内容信息：用户反馈；
<br/>
日志信息与您使用某些功能、应用、网站相关的信息，包括使用服务的时间和持续时间、网络请求信息、标准系统日志、崩溃信息、使用服务或进行操作而产生的行为日志信息以及设备和软件的事件信息。
          </Paragraph>
<Paragraph>
2. 视界云VIPSPEED会为下述目的收集使用您的个人信息
<br/>
（1）登录和认证
<br/>
当您登录视界云VIPSPEED软件时，需要由您企业管理人员（以下简称“用户管理员”）向您提供企业账号、密码，您输入上述信息后即可登录本软件，如有需要客户也会向您的手机号码发送验证短信以完成登录账号认证。如您需要重置密码，您需要通过Web端页面输入当前密码及客户向您的手机号码发送验证短信，并需要核对您输入的短信验证码以确保您的账户登录安全。
<br/>
（2）统计分析
<br/>
为统计分析产品运行情况及改进用户体验，视界云VIPSPEED可能会使用您的设备信息和日志信息，前述信息将会被匿名化处理，不会与您的个人身份相关联。
</Paragraph>

          <Title level={3}>二、对 Cookies 及同类技术的使用</Title>
          <Paragraph>
            视界云VIPSPEED使用Cookies和其它类似技术（例如web beacons、Flash cookies等）（简称“Cookies”），以提升您使用本软件的体验。当您使用“视界云VIPSPEED”及相关服务时，视界云VIPSPEED可能会使用相关技术向您的设备发送一个或多个Cookie或匿名标识符，以收集和存储您访问、使用本产品时的信息。大部分网络浏览器自动接受Cookies，但具体是否接受由您自己决定。您可通过同意选择接受或禁用Cookies，您理解并同意，视界云VIPSPEED可能存放本软件运行所必要的Cookies，包括让您能够登录本软件安全区域的Cookies。前述存放必要的Cookies行为是提供基础服务内容的必要条件，如您不同意相关授权，您无法使用本软件任何服务。
          </Paragraph>

          <Title level={3}>三、如何处理、转移、公开披露您的个人信息</Title>
          <Paragraph>
            您的企业决定如何处理、转移、公开披露您的个人信息，具体请与您的企业沟通了解。如您的企业选择视界云VIPSPEED的公有云服务，您同意您的企业将委托视界云处理您的个人信息。视界云非常重视对个人信息的保护，视界云将按您企业的要求处理您的个人信息。
          </Paragraph>
	
	  <Title level={3}>四、个人信息的存储</Title>
          <Paragraph>
            您的企业决定前述个人信息的存储方式、地点和期限，以及到期后的处理方式，具体请与您的企业沟通了解。如您的企业选择使用视界云的公有云服务，您的个人信息将存储在中华人民共和国境内服务器。我们不会将您的个人信息传输至境外，日后如果您的企业要求或我们需要向境外传输，我们将会遵循国家相关规定，征求您的授权同意。
          </Paragraph>


	  <Title level={3}>五、个人信息的安全保护</Title>
          <Paragraph>
            我们非常重视您个人信息的安全。我们在客户端实施了严格安全技术措施，防止您的个人信息遭到未经授权的访问、修改，避免数据的损坏或丢失。
<br/>
尽管已经采取了上述合理有效措施，并已经遵守了相关法律规定要求的标准，但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全，我们将尽力确保您提供给我们的个人信息的安全性。请您知悉并理解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。因此，我们强烈建议您采取积极措施保护个人信息的安全，包括但不限于使用复杂密码、定期修改密码、不将自己的账号密码等个人信息透露给他人。
          </Paragraph>

	  <Title level={3}>六、如何联系我们</Title>
          <Paragraph>
            如对本隐私政策内容有任何疑问、意见或建议，您可通过登录视界云官方公众号或扫描微信客服二维码或发送邮件至support@vdncloud.com 与我们联系。我们将会在收到您的申请后及时进行处理，并在15个工作日或法律法规要求的时限内回复您的请求
          </Paragraph>

          {/* Add more sections as needed */}
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        ©2024 深圳视界云天 版权所有
      </Footer>
    </Layout>
    </>
  );
};

export default PrivacyPage;