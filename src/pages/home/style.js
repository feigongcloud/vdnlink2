import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 8px auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	width: 825px;
	.banner-img {
		width: 825px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
		
		text-overflow: ellipsis; /* 显示省略号 */
		
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #2962F1;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const NoLoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	vertical-align: middle;
  display: block;
  margin: 20px auto;
  background-color: #f5f5f5;
  color: #333;

  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s ease;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor:pointer
`