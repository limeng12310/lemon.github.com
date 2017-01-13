/**
 * Created by zc on 2016/10/26.
 */
import NewItemPic from '../image/news-pic.png';

const NewsItemStyle = {
  box: {
    display: 'flex',
    height: '180px',
    width: '950px',
    margin: '20px auto 0',
    borderBottom: '1px solid #e6e6e6'
  },
  content: {
    flex: 1,
    width: '180px',
    marginLeft: '30px'
  },
  title: {
    fontSize: '20px',
    color: '#666',
    height: '56px',
    lineHeight: '56px',
    margin: 0,
    fontWeight: 'bold'
  },
  time: {
    fontSize: '12px',
    color: '#949494',
    marginRight: '30px'
  },
  author: {
    fontSize: '12px',
    color: '#949494'
  },
  text: {
    marginTop: '20px',
    color: '#808080',
    fontSize: '16px',
    lineHeight: '24px'
  }
};

class NewsItem extends React.Component {
  render() {
    return (
      <dl style={NewsItemStyle.box}>
        <dt><img src={NewItemPic} alt="" /></dt>
        <dd style={NewsItemStyle.content}>
          <a href="details.html" style={NewsItemStyle.title}>天方创新与莎莉医询进行商业合作</a>
          <div>
            <span style={NewsItemStyle.time}>2016-9-12</span>
            <span style={NewsItemStyle.author}>作者：天方创新</span>
          </div>
          <p style={NewsItemStyle.text}>
            莎莉健康管理（北京）有限公司与天方创新（北京）信息技术有限公司，于2016年9月8日11:00在北京西黄寺签订TERMSHEET协议。
          </p>
        </dd>
      </dl>
    );
  }
}
export default NewsItem;