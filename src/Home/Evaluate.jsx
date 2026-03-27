import React from 'react';
import { Carousel, Typography } from '@douyinfe/semi-ui';

import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';



const Evaluate=() => {

    const { Title, Paragraph } = Typography;

    const style = {
        width: '100%',
        height: '660px',
    };

    const colProps = {
        md : 8, xs: 24,
      };



    return (
        <Carousel style={style} theme='dark'>

                   
                        
                        <div key={0}  className="page-wrapper page2">
                        <div className="page">

                        <h1>客户评价</h1>
                
                        <OverPack className="page2-content">
                            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
                
                            <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva01.svg' />
                
                 </div>
                
                </Col>
                
                <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva02.svg' />
                
                 </div>
                
                </Col>
                
                <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva03.svg' />
                
                 </div>
                
                </Col>
                
                                </QueueAnim>
                
                                </OverPack>
                        
                       
                
                        </div>
                        </div>

                        <div key={1}  className="page-wrapper page2">
                        <div className="page">
                        <h1>客户评价</h1>
                        <OverPack className="page2-content">
                            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
                
                            <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva04.svg' />
                
                 </div>
                
                </Col>
                
                <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva05.svg' />
                
                 </div>
                
                </Col>
                
                <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva06.svg' />
                
                 </div>
                
                </Col>
                
                                </QueueAnim>
                
                                </OverPack>
                        
                       
                
                        </div>
                        </div>


                        <div key={2}  className="page-wrapper page2">
                        <div className="page">
                        <h1>客户评价</h1>
                        <OverPack className="page2-content">
                            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
                
                            <Col {...colProps}  className="page2-item-wrapper">
                
                <div
                    className={`page2-item`}
                  >
                
                   <img src='https://g1.vdnlink.cn/eva07.svg' />
                
                 </div>
                
                </Col>
                
                
                                </QueueAnim>
                
                                </OverPack>
                        
                       
                
                        </div>
                        </div>


         

        </Carousel>
    )

}


export default Evaluate;