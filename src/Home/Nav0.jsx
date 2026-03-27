import React from 'react';
import TweenOne from 'rc-tween-one';
import { Button } from '@douyinfe/semi-ui';
import { Menu } from 'antd';
import { getChildrenToRender } from './utils';
const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

 

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
 
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
   

    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
            
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem} >
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item  key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${(a.href==location.pathname||(a.href+'/')==location.pathname)?'top-menu-selected':''}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });

    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
          <a href='/'>  <img width="100%" src={dataSource.logo.children} alt="img" loading="lazy" /></a>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
           <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
         <div className='header0-butt'>
         {/* <Button onClick={()=>{window.location.href='/guide'}} theme='solid' type='primary' style={{ marginRight: 18 }}>产品套餐</Button> */}
         {/* <Button onClick={()=>{  window.open('https://g2.vdnlink.cn/buy_online.jpg', '_blank'); }}  theme='solid' type='primary' style={{ marginRight: 18,borderRadius:12 }}>在线购买</Button> */}
         <Button  onClick={()=>{ location.href='/app' }}  theme='solid' type='primary' style={{ marginRight: 18,borderRadius:18 }}>APP软件</Button>
         <Button onClick={()=>{  window.open('https://vdncloud.feishu.cn/wiki/QEtpwiHPbicwWNklEDQco1LynWc?fromScene=spaceOverview', '_blank'); }}  style={{border:"solid",borderRadius:18,color:"white"}}>APP用户手册</Button>
         {/* <Button onClick={()=>{  window.open('https://www.vdncloud.com/product/VDN-CloudMISP.html', '_blank'); }} theme='solid' type='primary' style={{ marginRight: 8 }}>全球边缘云算力网络</Button> */}
         </div>
    
           
       
        </div>
      </TweenOne>
    );
  }
}

export default Header;
