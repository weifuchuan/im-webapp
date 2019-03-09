import * as React from 'react';
import { HashRouter, Route, Control } from 'react-keeper';
import Home from './pages/Home/index';
import Explore from './pages/Home/pages/Explore';
import Book from './pages/Home/pages/Book';
import Message from './pages/Home/pages/Message';
import { ActivityIndicator } from 'antd-mobile';
import repeat from '@/common/kit/functions/repeat';
import { StoreContext } from './store';
import { useEffect, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

const Router = HashRouter;

const App = observer(() => {
  const store = useContext(StoreContext);

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const path = Control.path;
    repeat(() => {
      if (store.me) {
        setLoading(false);
        if (path === '' || path === '/') Control.go('/home');
        else Control.go(path);
        return true;
      }
      return false;
    });
  }, []);

  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        {store.me ? (
          <Route cache path={'/home'} component={Home}>
            <Route cache path={'/message'} component={Message} />
            <Route cache path={'/book'} component={Book} />
            <Route cache path={'/explore'} component={Explore} />
          </Route>
        ) : null}
        {loading ? (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              backgroundColor: '#fff'
            }}
          >
            <ActivityIndicator size="large" />
          </div>
        ) : null}
      </div>
    </Router>
  );
});

export default App;
