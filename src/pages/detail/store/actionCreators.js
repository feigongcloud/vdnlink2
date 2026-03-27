import axios from 'axios';
import * as constants from './constants';
import GlobalConstant from '../../constant';

const API_HOST = GlobalConstant.API_HOST;


const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get(API_HOST+'/ccs/vdnlinkInfoArticle/detail?id='+id).then((res) => {
			console.log(res.data.data)
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
			console.log(333)

		}).catch(() => {
			
		})
	}
};