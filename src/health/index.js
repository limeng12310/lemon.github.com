import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import HealthContainer from './components/HealthContainer';

ReactDOM.render(
  <AppContainer>
    <HealthContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/HealthContainer'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextHealthContainer = require('./components/HealthContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextHealthContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}