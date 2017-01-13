import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import NewsContainer from './components/NewsContainer';


ReactDOM.render(
  <AppContainer>
    <NewsContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/NewsContainer'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextNewsContainer = require('./components/NewsContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextNewsContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}