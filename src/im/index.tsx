import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App';
import { StoreContext, Store } from './store';
import '@/common/styles/fonts/roboto.scss';
import '@/common/styles/fonts/material-icons.scss';
import './index.scss';
import { install } from '@material-ui/styles';
install();
import { ApiContext, IApi } from '@/common/apis';
import { MockApi } from './apis/MockApi';

const api: IApi = new MockApi();

ReactDOM.render(
  (
    <ApiContext.Provider value={api}>
      <StoreContext.Provider value={new Store(api)}>
        <App />
      </StoreContext.Provider>
    </ApiContext.Provider>
  ) as any,
  document.getElementById('root')
);
