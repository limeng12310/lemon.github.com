import { Component } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import imageOne from '../image/pic-1.png';
import imageTwo from '../image/pic-2.png';
import imageThree from '../image/pic-3.png';

const style = {
  head: {
    background: '#fafafa',
    borderBottom: '1px solid #cccccc'
  },
  centerBox: {
    width: 1000,
    margin: '0 auto'
  },
  news: {
    width: '100%',
    fontSize: '14px',
    color: '#808080',
    margin: '50px 0 36px 0'
  },
  circle: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#19917d',
    marginRight: '8px'
  },
  title: {
    fontSize: 18,
    marginBottom: 18
  },
  time: {
    borderBottom: '1px solid #cccccc',
    paddingBottom: 10,
    color: '#b3b3b3',
    fontSize: 13
  },
  image: {
    margin: '40px 0 30px 0',
    width: '100%'
  },
  introduction: {
    fontSize: 16,
    lineHeight: '30px'
  },
  foot: {
    marginTop: 84
  }
};

class MainContainer extends Component {
  render() {
    return (
      <div>
        <div style={style.head}>
          <Header isChoosen={0} />
        </div>
        <div style={style.centerBox}>
          <div style={style.news}><span style={style.circle}></span>新闻动态</div>
          <div style={style.title}>莎莉健康管理（北京）有限公司与天方创新（北京）信息技术有限公司签订TERMSHEET协议</div>
          <div style={style.time}>2016-09-12 作者：天方创新</div>
          <img style={style.image} src={imageOne} alt="news"></img>
          <div style={style.introduction}>
            莎莉健康管理（北京）有限公司与天方创新（北京）信息技术有限公司，于2016年9月8日
            11:00在北京西黄寺签订TERMSHEET协议。签约仪式在具有364年历史的西黄寺内和乾隆皇帝御笔《慧因最上》之下庄严举行，
            由“莎莉医询”的法人罗莎莉总经理与“天方创新”的创始人郝妙红总经理和陈燕妮、陈洪涛股东代表共同见证下完成。
          </div>
          <img style={style.image} src={imageTwo} alt="news"></img>
          <div style={style.introduction}>
            莎莉健康管理（北京）有限公司（简称：莎莉医询），由原解放军总医院肿瘤中心总护士长罗莎莉带领从301医院退役的
            护士长、高级保健人员和军队退役的优秀医疗、信息技术管理工作者创立，诚邀国内多家三甲医院知名专家、优秀护理
            工作者和志同道合的信息技术达人，组成今天这支强大的健康管理服务团队。并团结全国各地最优医疗资源，将专业、
            精准、便捷、贴心的服务理念发扬光大，惠及更多人们。
          </div>
          <img style={style.image} src={imageThree} alt="news"></img>
          <div style={style.introduction}>
            “天方创新”由协和医科院海归教授与中科院计算所云计算研究团队联合创建，兼具生物信息学与大规模数据分析
            技术实力。下设索真独立医学检验实验室，以国内顶级检验技术支持，将基因检测与大数据分析有机结合，致力于运用
            先进科学技术，为人们提供精准的、便捷的个体化健康与医疗服务。天地因爱而生衍，人类因慈而和合。古语云
            “儒有合志同方”，共同的志向让我们携手创造未来，也一定会让我们共享美好未来，衷心祝福“莎莉医询”在
            “天方创新”的助力下创造中国大数据健康平台，为人类健康造福，为社会和谐尽心尽力！



          </div>
        </div>
        <div style={style.foot}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainContainer;