import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MainContainer from './components/MainContainer';

ReactDOM.render(
  <AppContainer>
    <MainContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/MainContainer'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextMainContainer = require('./components/MainContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextMainContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}