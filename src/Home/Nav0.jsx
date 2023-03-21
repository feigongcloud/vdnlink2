import React from 'react';
import TweenOne from 'rc-tween-one';
import { Button } from '@douyinfe/semi-ui';

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
          <a href='/'>  <img width="100%" src={dataSource.logo.children} alt="img" /></a>
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
         <div className='header0-butt'>
         <Button onClick={()=>{window.location.href='/guide'}} theme='solid' type='primary' style={{ marginRight: 18 }}>产品套餐</Button>
         <Button theme='solid' type='primary' style={{ marginRight: 8 }}>用户登录</Button>
         </div>
    
           
       
        </div>
      </TweenOne>
    );
  }
}

export default Header;
