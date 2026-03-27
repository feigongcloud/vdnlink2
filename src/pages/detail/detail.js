import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './loadable'
import store from '../store';
import Nav0 from '../../Home/Nav0'

import {
	Nav00DataSource,
  } from '../../Home/data.source';


class DetailApp extends Component {

    componentDidMount() {
		console.log(this.props)
		
	}

  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
			  <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
      />
         	<Detail  id={this.props.match.params.id}  />
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default DetailApp;
