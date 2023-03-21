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
        <a {...item.children}  class={'feature7-block-group'+i.toString()} >
          {item.children.children.map(getChildrenToRender)}
          <div className="code-wrapper">
           {/* <img src='http://p1.ycadmin.com/qrcode-vdn-sale.png' /> */}
            
           {i==0?<img src='https://g1.vdnlink.cn/vipspeedkf.png' />:<img src='https://g1.vdnlink.cn/vipspeedgzh.png' />}   
           
          </div>
        </a>
        
      </Col>
    ));

    delete props.dataSource;
    delete props.isMobile;
    return (
      <OverPack {...props} {...dataSource.OverPack}>
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
