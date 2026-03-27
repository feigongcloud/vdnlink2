import React from 'react';
import { Carousel, Typography, Space } from '@douyinfe/semi-ui';

const Content13=() => {
    const { Title, Paragraph } = Typography;

    const style = {
        width: '100%',
        height: '400px',
    };

   

    const titleStyle = { 
       
        color: '#1C1F23'
    };

    const colorStyle = {
        color: '#FFFFFF'
    };

    const renderLogo = () => {
        return (
            <img src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg' loading="lazy" alt='semi_logo' style={{ width: 87, height: 31 }} />   
        );
    };

    const imgList = [
        'https://g1.vdnlink.cn/cusdemand01.png',
        'https://g1.vdnlink.cn/cusdemand02.png',
    ];

    const textList = [
        ['某直播基地运营负责人', '我们基地主要是做TikTok跨境电商直播的，', 'VIPSpeed产品比较合规、服务质量也很稳定，效果','很不错，能满足基地入驻企业及卖家跨境电商直播需求。'],
        ['某DTC快时尚品牌直播业务负责人', 'VIPSpeed团队接触半年来，第一感受就是团队服务确实比较好', '售后比较让人放心。其实我们也中间也比较和试用了很多家,','VIPSpeed是从质量、价格和综合服务来说目前我们认为是最好的一家。'],
    ];

    return (
        <Carousel style={style} theme='dark'>
            {
                imgList.map((src, index) => {
                    return (
                        <div key={index} style={{ backgroundSize: 'cover', backgroundColor:'#234FEC',paddingTop:'40px',textAlign:'center' }}>
                             <Title heading={1} style={{textAlign:'center',color:'#FFF'}}>客户评价</Title>

                            <Space align='center'   style={{ paddingTop:60 }} >
                            <div >
                                <img src={src}  style={{ width:285,height:180 }}  loading="lazy"/>
                            </div>

                            <Space vertical align='start' spacing='medium' style={titleStyle}>
                               
                               <Title heading={2} style={colorStyle}>{textList[index][0]}</Title>
                               <Space vertical align='start'>
                                   <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                                   <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                                   <Paragraph style={colorStyle}>{textList[index][3]}</Paragraph>
                               </Space>
                           </Space>
                            </Space>
                           
                        </div>
                    );
                })
            }
        </Carousel>
    );
};


export default Content13;