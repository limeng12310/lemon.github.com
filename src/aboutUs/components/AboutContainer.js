import { Component } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import banner from '../image/banner.png';
import bg from '../image/bg.png';
import icon1 from '../image/icon-1.png';
import icon2 from '../image/icon-2.png';
import icon3 from '../image/icon-3.png';
import icon4 from '../image/icon-4.png';
import icon5 from '../image/icon-5.png';
import icon6 from '../image/icon-6.png';

const AboutContainerStyle = {
  container: {
    background: '#f2f2f2'
  },
  main: {
    width: '1200px',
    margin: '0 auto'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#666666',
    marginTop: '50px',
    fontWeight: 'bold'
  },
  horizontalLine: {
    height: 2,
    width: 64,
    borderTop: '2px solid #666666',
    margin: '0 25px'
  },
  img: {
    width: '100%'
  },
  box: {
    background: `url(${bg})`
  },
  iconBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  describe: {
    width: '276px',
    color: '#666',
    fontSize: '16px',
    lineHeight: '26px',
    textAlign: 'left'
  },
  item: {
    textAlign: 'center'
  },
  tag: {
    color: '#666',
    lineHeight: '56px',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  introduce: {
    fontSize: '16px',
    lineHeight: '30px',
    color: '#666',
    marginTop: '30px'
  },
  icon: {
    marginTop: '60px',
    marginBottom: '50px'
  }
};
class AboutContainer extends Component {
  render() {
    return (
      <div style={AboutContainerStyle.container}>
        <Header isChoosen={3} />
        <div>
          <img src={banner} alt="" style={AboutContainerStyle.img} />
        </div>
        <div style={AboutContainerStyle.main}>
          <div style={AboutContainerStyle.title}>
            <div style={AboutContainerStyle.horizontalLine}></div>
            <span>关于我们</span>
            <div style={AboutContainerStyle.horizontalLine}></div>
          </div>
          <p style={AboutContainerStyle.introduce}>
            天方创新(北京)信息技术有限公司,是一家 以基因检测与数据分析技术创新提供健康服务的公司。公司以协和医科院与中科院计算技术研究所的
            专家团队为核心,利用大数据分析和机器学习技术,深入发掘个人基因数据与健康数据的内在价值,以此为基础开展基因检测、精准医疗、云健康管
            理等健康服务。强大的数据分析技术和基因检测技术构建双重技术壁垒,从而形成企业独有价值。公司将致力于使用户得到最为精准、有效、便利
            、安全的健康管理服务和优质生命体验。
          </p>
          <div style={AboutContainerStyle.box}>
            <div style={AboutContainerStyle.title}>
              <div style={AboutContainerStyle.horizontalLine}></div>
              <span>项目构架</span>
              <div style={AboutContainerStyle.horizontalLine}></div>
            </div>
            <div style={AboutContainerStyle.iconBox}>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon1} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>基因实验室</dd>
                <dd style={AboutContainerStyle.describe}>
                  利用循环肿瘤DNA实时“液体 活检”技术与历史数据库以及基 因变异指标综合分析,对多种常见肿瘤进行早期诊断、个性化治 疗指导及疗
                  效观察,预后评估、 转移风险分析及复发监测。
                </dd>
              </dl>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon2} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>数据分析平台</dd>
                <dd style={AboutContainerStyle.describe}>
                  汇聚来自医学、基因、个人蛋白结构等 等不同方向的数据,通过专业计算机算 法沉淀出深层数据,挖掘具有相关性的 指标型数据。前期
                  用于基因检测、报告 解读以及个性化诊疗。
                </dd>
              </dl>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon3} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>健康管理中心</dd>
                <dd style={AboutContainerStyle.describe}>
                  通过基因检测数据以及其他医学数 据作为参考对用户进行个性化治疗 以及智能化医疗建档,针对肿瘤病 人及其他慢性病人通过数据分
                  析开 展精准治疗。
                </dd>
              </dl>
            </div>
            <div style={AboutContainerStyle.title}>
              <div style={AboutContainerStyle.horizontalLine}></div>
              <span>我们的优势</span>
              <div style={AboutContainerStyle.horizontalLine}></div>
            </div>
            <div style={AboutContainerStyle.iconBox}>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon4} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>综合人才</dd>
                <dd style={AboutContainerStyle.describe}>
                  跨领域结合了生物科学生物信息学、数据分析计算机软件、临床医学以及相关行业服务人才
                </dd>
              </dl>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon5} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>技术优势</dd>
                <dd style={AboutContainerStyle.describe}>融合数据分析技术、基因检测技术,发掘深层数据价值,提供精准数据解读。</dd>
              </dl>
              <dl style={AboutContainerStyle.item}>
                <dt style={AboutContainerStyle.icon}><img src={icon6} alt="" /></dt>
                <dd style={AboutContainerStyle.tag}>成本控制</dd>
                <dd style={AboutContainerStyle.describe}>以智能分析替代人工分析、以互联网渠道替代线下渠道。降低服务成本。</dd>
              </dl>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutContainer;