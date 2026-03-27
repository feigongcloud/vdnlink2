import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button,Row,Col } from 'antd';
import { getChildrenToRender } from './utils';

class Content17 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;


    const childrenToRender = dataSource.blockWrapper.children.map((item, i) => (
      <Col {...item} key={i.toString()}>
        <div {...item.children}  class={'feature7-block-group'+i.toString()}>
          {/* {item.children.children.map(getChildrenToRender)} */}
          <div className="code-wrapper" >
             {/* <img src='https://g2.vdnlink.cn/wechat3001.jpg' loading="lazy" />  */}
             <img src='https://g2.vdnlink.cn/vdnlink-lxwmqr.jpg' loading="lazy" /> 
             
            
           {/* {i==0?<img src='https://g1.vdnlink.cn/vipspeedkf01.svg'  width={360} />:<img src='https://g1.vdnlink.cn/vipspeedkf02.svg' width={360} />}    */}
           
          </div>
        </div>
        
      </Col>
    ));

    delete props.dataSource;
    delete props.isMobile;
    return (
      <OverPack {...props} {...dataSource.OverPack} >
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          delay={[0, 100]}
          {...dataSource.titleWrapper}
        >
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </QueueAnim>
       
        <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            interval={50}
            component={Row}
            {...dataSource.blockWrapper}
          >
            {childrenToRender}
          </QueueAnim>
      </OverPack>
    );
  }
}

export default Content17;
