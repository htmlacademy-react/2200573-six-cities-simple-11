import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { setCitys } from './store/offer-search-process/offer-search-process';
import { checkAuthAction, fetchHotelsAction } from './store/api-actions';
import { citys } from './const';


store.dispatch(setCitys(citys));
store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
