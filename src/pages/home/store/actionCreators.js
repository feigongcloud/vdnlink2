import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
import GlobalConstant from '../../constant';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

const API_HOST = GlobalConstant.API_HOST;

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get(API_HOST+'/ccs/vdnlinkInfoArticle/home').then((res) => {
			//console.log(111)
			const result = res.data.data;
			
			dispatch(changHomeData(result));
			//console.log(222)
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get(API_HOST+'/ccs/vdnlinkInfoArticle/homeList?page=' + page).then((res) => {
			const result = res.data.data;
		       console.log(result,result.length)
			   if(result.length==5){
				dispatch(addHomeList(result, page + 1));
			   }else{
				dispatch(addHomeList(result, page));
			   }
			
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})