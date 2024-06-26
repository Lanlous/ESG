import styled from 'styled-components';

export const HomeWrapper = styled.div`
overflow: hidden;
width: 960px;
margin: 0 auto;
`;

export const HomeLeft = styled.div`
margin-left: 15px;
padding-top: 30px;
width: 600px;
float: left;
.banner-img {
  width: 600px;
  height: 330px;
}
`;

export const HomeRight = styled.div`
width: 280px;
float: right;
`;

export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow: hidden;
margin-left: -18px;
border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
float: left;
height: 32px;
line-height: 32px;
margin-left: 18px;
margin-bottom: 18px;
padding-right: 10px;
font-size: 14px;
color: #000;
background: #f7f7f7;
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

export const Listitem = styled.div`
padding: 20px 0; 
overflow: hidden;
border-bottom: 1px solid #dcdcdc;
.pic {
  width: 125px;
  height: 100px;
  display: block;
  float: right;
  border-radius: 10px;
}
`;

export const Listinfo = styled.div`
width: 450px;
float: left;
.title{
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  color: #333;
}
.desc{
  line-height: 24px;
  font-size: 13px;
  color: #999;
}
`;

export const RecommendWrapper = styled.div`
margin: 30px 0;
width: 280px;
`
export const Recommenditem = styled.div`
width: 280px;
height: 50px;
background: url(${(props) => props.imgurl});
background-size: contain;
`

export const WriterWrapper = styled.div`
width: 278px;
border: 1px solid #dcdcdc;
dorder-radius: 3px;
height: 300px;
line-height: 300px;
text-align: center;
`

export const Loadmore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
margin: 30px 0;
background: #a5a5a5;
text-align: center;
border-radius: 20px;
color: #fff;
cursor: pointer;
`

export const Backtop = styled.div`
position: fixed;
right: 0;
bottom: 100px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
cursor: pointer;
`