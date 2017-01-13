import { Component } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Banner from '../image/banner.jpg';
import Advertisement from '../image/wechat.png';
import Bar1 from '../image/bar-1.png';
import Bar2 from '../image/bar-2.png';

const JoinContainerStyle = {
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
  Box: {
    display: 'flex'
  },
  listBox: {
    width: '692px',
    marginLeft: '30px'
  },
  post1: {
    width: '100%',
    height: '30px',
    background: `url(${Bar1}) no-repeat`,
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '62px'
  },
  post2: {
    width: '100%',
    height: '30px',
    background: `url(${Bar2}) no-repeat right top`,
    fontSize: '18px',
    lineHeight: '30px',
    paddingLeft: '94px'
  },
  addr: {
    color: '#FFF',
    margin: '0 45px 0 18px'
  },
  introduce: {
    paddingLeft: '94px'
  },
  postDescribe: {
    marginBottom: '35px',
    color: '#666'
  },
  title1: {
    fontSize: '14px',
    color: '#666'
  },
  content: {
    fontSize: '14px',
    lineHeight: '30px',
    color: '#666',
    marginBottom: '34px'
  },
  advertisement: {
    flex: 1,
    textAlign: 'center',
    paddingTop: '62px'
  }
};

class JoinContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img src={Banner} alt="" style={JoinContainerStyle.img} />
        </div>
        <div style={JoinContainerStyle.main}>
          <h2 style={JoinContainerStyle.title}><span style={JoinContainerStyle.circle}></span>在招职位</h2>
          <div style={JoinContainerStyle.Box}>
            <div style={JoinContainerStyle.listBox}>
              <h2 style={JoinContainerStyle.post1}><span style={JoinContainerStyle.addr}>北京</span>前端工程师（高级）</h2>
              <div style={JoinContainerStyle.introduce}>
                <h3 style={JoinContainerStyle.title1}>职位描述</h3>
                <p style={JoinContainerStyle.postDescribe}>前端工程师（高级）</p>

                <h3 style={JoinContainerStyle.title1}>岗位职责</h3>
                <p style={JoinContainerStyle.content}>
                  1. 主导公司移动浏览器端产品、PC浏览器端产品的前端研发<br />
                  2. 负责优化前端开发流程，搭建高效的前端集成开发环境<br />
                  3. 负责前端方案设计和技术选型<br />
                  4. 指导前端研发人员的开发工作
                </p>

                <h3 style={JoinContainerStyle.title1}>任职要求</h3>
                <p style={JoinContainerStyle.content}>
                  1. 本科及以上学历，计算机相关专业<br />
                  2. 5年以上互联网公司前端开发经验<br />
                  3. 精通JavaScript、HTML5、CSS3、Ajax等前端技术<br />
                  4. 精通响应式布局、移动设备兼容性<br />
                  5. 注重前端代码可维护性及性能<br />
                  6. 具备良好的产品意识，优秀的团队协作精神<br />
                  7. 有较好的英语阅读能力，能够阅读英文技术文档
                </p>

                <h3 style={JoinContainerStyle.title1}>福利待遇</h3>
                <p style={JoinContainerStyle.content}>
                  1. 可观的薪资和期权激励<br />
                  2. 免费午餐，水果零食供应<br />
                  3. 五险一金<br />
                  4. 弹性工作时间<br />
                  请将简历发送至hr@thorgene.com,并在标题标注应聘职位。
                </p>
              </div>

              <h2 style={JoinContainerStyle.post2}>生物信息分析工程师</h2>
              <div style={JoinContainerStyle.introduce}>
                <h3 style={JoinContainerStyle.title1}>职位描述</h3>
                <p style={JoinContainerStyle.postDescribe}>生物信息分析工程师</p>

                <h3 style={JoinContainerStyle.title1}>任职要求</h3>
                <p style={JoinContainerStyle.content}>
                  1. 从事过基因相关数据分析，有一年以上分析经验<br />
                  2. 基础知识扎实，新技术敏感，原理清楚，理解力强<br />
                  3. 熟悉Shell脚本语言或Python开发语言<br />
                  4. 熟悉BWA,SOAP,Gatk等工具优先。
                </p>

                <h3 style={JoinContainerStyle.title1}>福利待遇</h3>
                <p style={JoinContainerStyle.content}>
                  1. 可观的薪资和期权激励<br />
                  2. 免费午餐，水果零食供应<br />
                  3. 五险一金<br />
                  4. 弹性工作时间<br />
                  请将简历发送至hr@thorgene.com,并在标题标注应聘职位。
                </p>
              </div>

              <h2 style={JoinContainerStyle.post2}>ios工程师</h2>
              <div style={JoinContainerStyle.introduce}>
                <h3 style={JoinContainerStyle.title1}>职位描述</h3>
                <p style={JoinContainerStyle.postDescribe}>ios开发工程师</p>

                <h3 style={JoinContainerStyle.title1}>岗位职责</h3>
                <p style={JoinContainerStyle.content}>
                  1. 本科及以上学历<br />
                  2. 拥有1～3年ios开发经验<br />
                  3. 精通Swift与IOS开发技术，有一年以上开发和实施经验<br />
                  4. 基础知识扎实、新技术敏感，原理清楚，理解力强<br />
                  5. 熟悉有关数据库编程优先<br />
                  6. 熟悉Ajax与 Web技术优先。
                </p>
                <h3 style={JoinContainerStyle.title1}>任职要求</h3>
                <p style={JoinContainerStyle.content}>
                  1. 本科及以上学历，计算机相关专业<br />
                  2. 5年以上互联网公司前端开发经验<br />
                  3. 精通JavaScript、HTML5、CSS3、Ajax等前端技术<br />
                  4. 精通响应式布局、移动设备兼容性<br />
                  5. 注重前端代码可维护性及性能<br />
                  6. 具备良好的产品意识，优秀的团队协作精神<br />
                  7. 有较好的英语阅读能力，能够阅读英文技术文档
                </p>

                <h3 style={JoinContainerStyle.title1}>福利待遇</h3>
                <p style={JoinContainerStyle.content}>
                  1. 可观的薪资和期权激励<br />
                  2. 免费午餐，水果零食供应<br />
                  3. 五险一金<br />
                  4. 弹性工作时间<br />
                  请将简历发送至hr@thorgene.com,并在标题标注应聘职位。
                </p>
              </div>
            </div>
            <div style={JoinContainerStyle.advertisement}>
              <img src={Advertisement} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JoinContainer;