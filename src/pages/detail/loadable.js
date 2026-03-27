import React, { Component } from 'react';
import Loadable from 'react-loadable';



const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});


class LoadApp extends Component{
  componentDidMount() {
		console.log(this.props)
		
	}

  render(){
    return (
      <>
       <LoadableComponent id={this.props.id} />
      </>
    )
  }
}


export default LoadApp;
