import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AboutContainer from './components/AboutContainer';
ReactDOM.render(
  <AppContainer>
    <AboutContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/AboutContainer'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextAboutContainer = require('./components/AboutContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextAboutContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}