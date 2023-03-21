import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    {/* <div {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div> */}
                    <div class="content0-block-item">
                      <div name="image" class="content0-block-icon">
                        <img src={item.children[0].children} alt="img"/>
                        </div>
                        <div class={'content'+i.toString()+'-block-bottom'}>
                        <h1 name="title" class={'content'+i.toString()+'-block-title'}>{item.children[1].children}</h1>
                        <div class={'content'+i.toString()+'-block-content'} name="content">{item.children[2].children}</div>
                        </div>
                        </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
