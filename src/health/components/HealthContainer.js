/**
 * Created by zc on 2016/10/25.
 */
import { Component } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import banner1 from '../image/banner-1.png';
import icon1 from '../image/icon-1.png';
import icon2 from '../image/icon-2.png';
import icon3 from '../image/icon-3.png';
import icon4 from '../image/icon-4.png';
import banner2 from '../image/banner-2.png';

const HealthContainerStyle = {
  container: {
    background: '#f2f2f2'
  },
  main: {
    width: '1200px',
    height: '620px',
    margin: '0 auto'
  },
  title: {
    fontSize: '28px',
    height: '128px',
    lineHeight: '128px',
    color: '#666',
    marginBottom: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalLine: {
    height: 2,
    width: 64,
    borderTop: '2px solid #666666',
    margin: '0 25px'
  },
  iconBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  img: {
    width: '100%'
  },
  describe: {
    width: '200px',
    color: '#666',
    fontSize: '16px',
    lineHeight: '26px'
  },
  item: {
    textAlign: 'center'
  },
  tag: {
    color: '#666',
    lineHeight: '56px',
    fontSize: '24px'
  }
};
class HealthContainer extends Component {
  render() {
    return (
      <div style={HealthContainerStyle.container}>
        <Header isChoosen={1} />
        <div>
          <img src={banner1} alt="" style={HealthContainerStyle.img} />
        </div>
        <div style={HealthContainerStyle.main}>
          <p style={HealthContainerStyle.title}>
            <div style={HealthContainerStyle.horizontalLine}></div>
            <span>索真基因一站式创新基因检测及解读</span>
            <div style={HealthContainerStyle.horizontalLine}></div>
          </p>
          <div style={HealthContainerStyle.iconBox}>
            <dl style={HealthContainerStyle.item}>
              <dt><img src={icon1} alt="" /></dt>
              <dd style={HealthContainerStyle.tag}>专业</dd>
              <dd style={HealthContainerStyle.describe}>依据权威数据库及最新临床研究结果进行解读，与临床医生共同进行指导</dd>
            </dl>
            <dl style={HealthContainerStyle.item}>
              <dt><img src={icon2} alt="" /></dt>
              <dd style={HealthContainerStyle.tag}>便捷</dd>
              <dd style={HealthContainerStyle.describe}>从取样到出具体报告仅一周</dd>
            </dl>
            <dl style={HealthContainerStyle.item}>
              <dt><img src={icon3} alt="" /></dt>
              <dd style={HealthContainerStyle.tag}>准确</dd>
              <dd style={HealthContainerStyle.describe}>闭管检测，含内外控，排除假阴性、假阳性反应</dd>
            </dl>
            <dl style={HealthContainerStyle.item}>
              <dt><img src={icon4} alt="" /></dt>
              <dd style={HealthContainerStyle.tag}>灵敏</dd>
              <dd style={HealthContainerStyle.describe}>可准确检测低至1%的突变</dd>
            </dl>
          </div>
        </div>
        <div>
          <img src={banner2} alt="" style={HealthContainerStyle.img} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HealthContainer;