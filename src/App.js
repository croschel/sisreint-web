import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'dotenv/config';

import '~/configs/ReactotronConfig';

import Routes from './routes';
import history from '~/services/history';
import { store, persistor } from './store';
import GlobalStyles from '~/styles/global';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default App;
