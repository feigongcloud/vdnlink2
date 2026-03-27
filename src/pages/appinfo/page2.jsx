import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page2 } from '../../Home/data.source';

const pointPos = [
  { x: -90, y: -20 },
  { x: 35, y: -25 },
  { x: -120, y: 125 },
  { x: -100, y: 165 },
  { x: 95, y: -5 },
  { x: 90, y: 160, opacity: 0.2 },
  { x: 110, y: 50 },
];

export default class Page2 extends React.PureComponent {
  state = {
    hoverNum: null,
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }

  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }

  render() {
    const { hoverNum } = this.state;
    const { isMobile } = this.props;
    const children = page2.children.map((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-ring left', 'point-ring point-ring-0 right',
        'point-0', 'point-2', 'point-1', 'point-3', 'point-2',
      ].map((className, ii) => (
        <i
          className={className}
          key={ii.toString()}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      return (
        <Col md={12} xs={24} key={i.toString()} className="page6-item">
          <a
            className="page6-item-link"
            // href={item.link}
            href='javascript:void(0)'
            // target="_blank"
            onMouseEnter={() => { this.onMouseOver(i); }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
              }}
              resetStyleBool={false}
              className="point-wrapper"
            >
              {(isHover || isMobile) && pointChild}
            </TweenOneGroup>
            <div className="page6-item-img" style={{ boxShadow: `0 16px 32px ${item.shadowColor}` }}>
              <img src={item.src} alt="img" loading="lazy" />
            </div>
            <div className="page6-item-title">{item.title}</div>
            <p>{item.content}</p>
            <p>{item.content1}</p>
          </a>
        </Col>);
    });
    return (
      <div className="page-wrapper page6">
        <div className="page">
          <h1 style={{color:'#005AFF'}} >{page2.title}</h1>
          <i />
          <OverPack>
            <QueueAnim key="queue" type="bottom" leaveReverse component={Row}>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
