import React from 'react';
import { Table,Typography } from 'antd';
const { Title } = Typography;
import './appinfo.less'

class AppContent1 extends React.PureComponent {

    render(){

        const check = '✔';
        const cross = '✘';

        const columns = [
            {
              title: '方案对比',
              dataIndex: 'feature',
              key: 'feature',
              width: 150,
              render: (text) => <div style={{ fontWeight: 'bold' }}>{text}</div>,
            },
            {
              title: 'VPN',
              dataIndex: 'vpn',
              key: 'vpn',
              width: 150,
              align: 'center',
            },
            {
              title: '云服务器自建',
              dataIndex: 'cloud',
              key: 'cloud',
              width: 150,
              align: 'center',
            },
            {
              title: '运营商专线',
              dataIndex: 'carrier',
              key: 'carrier',
              width: 150,
              align: 'center',
            },
            {
              title: '视界云',
              dataIndex: 'vision',
              key: 'vision',
              width: 200,
              align: 'center',
            },
          ];
        
          const data = [
            { key: '1', feature: '月租价格', vpn: `${check} 几元到几十元`, cloud: `${check} 百元级`, carrier: `${check} 3000元起`, vision: '✔ 低至98元起，多套餐可选' },
            { key: '2', feature: 'IP质量', vpn: `${cross} 共享，IP纯净度低`, cloud: `${cross} 共享，IP纯净度低`, carrier: `${check} 共享，IP纯净度高`, vision: `${check} 独享，IP纯净度高` },
            { key: '3', feature: '带宽品质', vpn: `${cross} 卡顿，易掉线`, cloud: `${cross} 卡顿，易掉线`, carrier: `${check} 稳定流畅`, vision: `${check} 稳定流畅` },
            { key: '4', feature: '出海线路', vpn: `${cross} 公网单线路`, cloud: `${cross} 公网单线路`, carrier: `${check} 专线`, vision: `${check} 专线` },
            { key: '5', feature: '出口IP', vpn: `${cross} 云节点，IDC节点`, cloud: `${cross} 云节点，IDC节点`, carrier: `${check} 稳定流畅`, vision: `${check} 原生ISP资源` },
            { key: '6', feature: '支持国家', vpn: `${cross} 较少`, cloud: `${check} 丰富`, carrier: `${check} 丰富`, vision: `${check} 丰富` },
            { key: '7', feature: '易用性', vpn: `${check} 自助，简单`, cloud: `${cross} 自助，复杂`, carrier: `${check} 托管，简单`, vision: `${check} 托管，简单` },
            { key: '8', feature: '平台合规性', vpn: `${cross} 易封号`, cloud: `${cross} 易标志`, carrier: `${check} 安全合规`, vision: `${check} 安全合规` },
            { key: '9', feature: '数据安全', vpn: `${cross} 隐私泄露风险高`, cloud: `${cross} 隐私泄露风险高`, carrier: `${check} 遵循供应商规定`, vision: `${check} 遵循供应商规定` },
            { key: '10', feature: '技术支持', vpn: `${cross} 无`, cloud: `${cross} 遵循云商标准`, carrier: `${check} 7*24小时`, vision: `${check} 7*24小时` },
          ];


        return(
            <>
            <Title level={2} className="table-xzwm-title">为什么选择我们</Title>
            <div className='page-wraper-xzwm'  >
               <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      className="custom-table"
    />
          </div>
            </>
        )
    }

}

export default AppContent1;