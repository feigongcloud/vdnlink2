import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button,Row,Col } from 'antd';
import { getChildrenToRender } from './utils';

class Content21 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;


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
           
          </QueueAnim>
          
      </OverPack>
    );
  }
}

export default Content21;
