import { Component } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Banner from '../image/news-banner.png';
import NewsItem from './NewsItem';

const NewsContainerStyle = {
  main: {
    width: '1200px',
    margin: '0 auto'
  },
  img: {
    width: '100%'
  },
  title: {
    width: '100%',
    height: '70px',
    lineHeight: '70px',
    borderBottom: '1px solid #ccc',
    fontSize: '16px',
    color: '#808080',
    fontWeight: 'bold',
    margin: 0
  },
  circle: {
    display: 'inline-block',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#19917d',
    marginRight: '8px'
  },
  listBox: {
    paddingTop: '40px'
  }
};

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <Header isChoosen={0} />
        <div>
          <img src={Banner} alt="" style={NewsContainerStyle.img} />
        </div>
        <div style={NewsContainerStyle.main}>
          <h2 style={NewsContainerStyle.title}><span style={NewsContainerStyle.circle}></span>新闻动态</h2>
          <div style={NewsContainerStyle.listBox}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewsContainer;