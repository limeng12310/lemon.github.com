import adress from './img/adress.png';
import message from './img/message.png';
import telFooter from './img/telFooter.png';
import join from './img/join.png';
import wechat from './img/wechat.png';

const style = {
  boxOut: {
    width: '100%',
    height: 230
  },
  boxUp: {
    width: '100%',
    height: 200,
    backgroundColor: '#525c5e'
  },
  boxUpCenter: {
    width: 1200,
    height: 112,
    margin: '0 auto',
    padding: '46px 0 42px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 20,
    color: '#b2b6b7',
    marginBottom: 20
  },
  imgMessage: {
    fontSize: 14,
    color: '#84898a',
    marginTop: 12
  },
  img: {
    marginRight: 10
  },
  messages: {
    fontSize: 14,
    color: '#84898a',
    paddingTop: 7
  },
  message: {
    marginRight: 23,
    color: '#84898a'
  },
  wechat: {
    marginLeft: 36
  },
  boxWechat: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  verticalLine: {
    height: 112,
    width: 2,
    borderRight: '1px solid #82898b'
  },
  boxBottom: {
    width: '100%',
    height: 30,
    backgroundColor: '#40484a'
  },
  boxBottomCenter: {
    width: 1200,
    height: 30,
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: '30px',
    fontSize: 12,
    color: '#828789'
  }
};

class Footer extends React.Component {
  render() {
    return (
      <div style={style.boxOut}>
        <div style={style.boxUp}>
          <div style={style.boxUpCenter}>
            <div>
              <div style={style.title}>天方创新（北京）信息技术有限公司</div>
              <div style={style.imgMessage}>
                <img src={adress} style={style.img} alt="adress" />
                北京市海淀区大柳树路17号福海大厦1207
              </div>
              <div style={style.imgMessage}>
                <img src={message} style={style.img} alt="message" />
                xxxxx@lifebankonline.com
              </div>
              <div style={style.imgMessage}>
                <img src={telFooter} style={style.img} alt="tel" />
                15-1001-1803 工作日9:00-18:00
              </div>
            </div>
            <div style={style.verticalLine}></div>
            <div>
              <div style={style.title}>数据服务健康 用爱发现生命之美</div>
              <div>
                <a href="joinUs.html" style={style.imgMessage}>
                  <img src={join} style={style.img} alt="join" />加入天方
                </a>
              </div>
            </div>
            <div style={style.verticalLine}></div>
            <div>
              <div style={style.title}>友情链接</div>
              <div style={style.messages}>
                <a href="http://www.sl-yx.com/" style={style.message}>莎莉医询</a>
                <a href="http://thorgene.com/" style={style.message}>索真医学</a>
                <a href="http://thorgene.com/" style={style.message}>索真医学</a>
              </div>
            </div>
            <div style={style.verticalLine}></div>
            <div style={style.boxWechat}>
              <div style={style.title}>关注我们</div>
              <div style={style.wechat}><img src={wechat} alt="wechat" /></div>
            </div>
          </div>
        </div>
        <div style={style.boxBottom}>
          <div style={style.boxBottomCenter}>
            天方创新（北京）信息技术有限公司
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;