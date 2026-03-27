import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore,NoLoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class List extends PureComponent {

	 

	  
	render() {
		const { list, getMoreList, page ,more} = this.props;

		 // 剔除HTML标签的函数
		 const stripHtmlTags = (text) => {
			return text.replace(/<[^>]+>/g, '');
		  };

		    // 定义裁剪文本的函数
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

		console.log(more)
		
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} target='_blank' to={'/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('img')} loading="lazy" />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p  className='desc'>
										{truncateText(  stripHtmlTags(item.get('content')),120)}
											</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				{ 
				   more? <LoadMore onClick={() =>   getMoreList(page)}>更多文章</LoadMore>:
				   <NoLoadMore>没有更多了</NoLoadMore>
				 }
				  
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']),
	more:state.getIn(['home', 'showLoadMore'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispatch)(List);