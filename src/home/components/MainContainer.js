import Header from '../../common/Header';
import ImgGallery from './ImgGallery';
import Footer from '../../common/Footer';
import data from './img/data.png';
import gene from './img/gene.png';
import cloud from './img/cloud.png';
import medical from './img/health.png';
import advLife from './img/bar-1.png';
import advMedical from './img/bar-2.png';
import advHealth from './img/bar-3.png';
import news from './img/news-pic.png';

const style = {
  boxOut: {
    width: '100%'
  },
  boxCenter: {
    width: 1200,
    margin: '0 auto'
  },
  doWhat: {
    padding: '40px 0 64px'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#666666'
  },
  horizontalLine: {
    height: 2,
    width: 64,
    borderTop: '2px solid #666666',
    margin: '0 25px'
  },
  intro: {
    width: 1018,
    margin: '0 auto',
    textAlign: 'center',
    fontSize: 16,
    color: '#808080',
    lineHeight: '26px',
    paddingBottom: 68,
    paddingTop: 40
  },
  circles: {
    width: 1122,
    height: 245,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  circle: {
    height: 245,
    width: 245
  },
  advantage: {
    padding: 0
  },
  advantageBox: {
    paddingTop: 50,
    width: 1200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  advLife: {
    background: `url(${advLife})`,
    backgroundRepeat: 'no-repeat',
    width: 360,
    height: 583
  },
  advMedical: {
    background: `url(${advMedical})`,
    backgroundRepeat: 'no-repeat',
    width: 360,
    height: 583
  },
  advHealth: {
    background: `url(${advHealth})`,
    backgroundRepeat: 'no-repeat',
    width: 360,
    height: 583
  },
  advTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
    marginTop: 285
  },
  advIntr: {
    textAlign: 'center',
    fontSize: 20,
    color: '#666666',
    marginTop: 65
  },
  advContent: {
    width: 290,
    fontSize: 16,
    color: '#666666',
    lineHeight: '26px',
    margin: '25px 35px 0 35px'
  },
  news: {
    padding: '80px 0 100px'
  },
  newsBox: {
    paddingTop: 40,
    paddingBottom: 30,
    width: 1200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  newsBoxShow: {
    display: 'block'
  },
  newsBoxHidden: {
    display: 'none'
  },
  newsDetail: {
    width: 521,
    display: 'flex',
    alignItems: 'flex-start'
  },
  newsImg: {
    width: 196,
    marginRight: 20
  },
  newsTitle: {
    color: '#666666',
    fontSize: 20
  },
  newsTime: {
    color: '#949494',
    fontSize: 15,
    margin: '14px 0'
  },
  newsContent: {
    color: '#949494',
    fontSize: 16
  },
  more: {
    color: '#b9b9b9',
    fontSize: 16,
    float: 'right',
    marginRight: 33,
    textDecoration: 'underline'
  }
};

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Header isChoosen={0} />
        <ImgGallery />
        <div style={style.boxOut}>
          <div style={style.boxCenter}>
            <div style={style.doWhat}>
              <div style={style.title}>
                <div style={style.horizontalLine}></div>
                <span>我们能做什么？</span>
                <div style={style.horizontalLine}></div>
              </div>
              <div style={style.intro}>
                天方创新是以基因检测与数据分析技术创新提供健康服务的公司，以协和医院与中科院计算技术研究所的专家团队
                为核心，利用大数据分析和机器学习技术，以此为基础开展基因检测、精准医疗、云健康管理等健康服务。
              </div>
              <div style={style.circles}>
                <img style={style.circle} src={data} alt="data" />
                <img style={style.circle} src={gene} alt="gene" />
                <img style={style.circle} src={cloud} alt="cloud" />
                <img style={style.circle} src={medical} alt="health" />
              </div>
            </div>
            <div style={style.advantage}>
              <div style={style.title}>
                <div style={style.horizontalLine}></div>
                <span>我们的核心优势</span>
                <div style={style.horizontalLine}></div>
              </div>
              <div style={style.advantageBox}>
                <div style={style.advLife}>
                  <div style={style.advTitle}>优化生命</div>
                  <div style={style.advIntr}>医学数据+基因数据+健康数据</div>
                  <div style={style.advContent}>
                    利用循环肿瘤DNA实时“液体活检”技术对多种常见肿瘤进行早期诊断、个性化治疗指导及疗效观察，
                    预后评估、转移风险分析及复发监测。
                  </div>
                </div>
                <div style={style.advMedical}>
                  <div style={style.advTitle}>精准医疗</div>
                  <div style={style.advIntr}>肿瘤筛查+安全用药+康复管理</div>
                  <div style={style.advContent}>
                    通过基因检测数据以及其他医学数据作为参考对用户进行个性化治疗以及智能化医疗建档，
                    实时分析并提供可视化的健康动态，让用户足不出户得到最专业的健康咨询服务。
                  </div>
                </div>
                <div style={style.advHealth}>
                  <div style={style.advTitle}>智能健康</div>
                  <div style={style.advIntr}>在线档案+定制方案+私人顾问</div>
                  <div style={style.advContent}>
                    利用循环肿瘤DNA实时“液体活检”技术对多种常见肿瘤进行早期诊断、个性化治疗指导及疗效观察，
                    预后评估、转移风险分析及复发监测。
                  </div>
                </div>
              </div>
            </div>
            <div style={style.news}>
              <div style={style.title}>
                <div style={style.horizontalLine}></div>
                <span>新闻动态</span>
                <div style={style.horizontalLine}></div>
              </div>
              <div style={style.newsBox}>
                <div style={style.newsDetail}>
                  <img style={style.newsImg} src={news} alt="news" />
                  <div>
                    <div style={style.newsTitle}>天方创新与莎莉医询进行商业合作</div>
                    <div style={style.newsTime}>2016-9-12 作者：天方创新</div>
                    <div style={style.newsContent}>莎莉健康管理（北京）有限公司与天方创新（北京）信息技术有限公司，
                    于2016年9月8日11:00在北京西黄寺签订TERMSHEET协议。
                    </div>
                  </div>
                </div>
                <div style={style.newsDetail}>
                  <img style={style.newsImg} src={news} alt="news" />
                  <div>
                    <div style={style.newsTitle}>天方创新与莎莉医询进行商业合作</div>
                    <div style={style.newsTime}>2016-9-12 作者：天方创新</div>
                    <div style={style.newsContent}>莎莉健康管理（北京）有限公司与天方创新（北京）信息技术有限公司，
                      于2016年9月8日11:00在北京西黄寺签订TERMSHEET协议。
                    </div>
                  </div>
                </div>
              </div>
              <a style={style.more} href="news.html" >查看更多</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;