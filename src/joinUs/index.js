import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import JoinContainer from './components/JoinContainer';

ReactDOM.render(
  <AppContainer>
    <JoinContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/JoinContainer'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextJoinContainer = require('./components/JoinContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextJoinContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}