import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from '~/services/history';
import GlobalStyles from '~/styles/global';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}
export default App;
