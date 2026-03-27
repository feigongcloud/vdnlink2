import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button,Row,Col } from 'antd';
import { getChildrenToRender } from './utils';

class AppContent17 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;


    const childrenToRender = dataSource.blockWrapper.children.map((item, i) => (
      <Col {...item} key={i.toString()}>
        <div {...item.children}  class={'feature7-block-group'+i.toString()}>
          <div className="app-code-wrapper" >
          <img src='https://g2.vdnlink.cn/appQrcode03.jpg' loading="lazy" /> 
             <img src='https://g2.vdnlink.cn/appQrcode02.jpg' loading="lazy" /> 
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

export default AppContent17;
