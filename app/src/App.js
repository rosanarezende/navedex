import React from 'react';
import { Provider } from 'react-redux'
import { history, store } from "./store"

import Routes from './routes';

import Appbar from './components/Appbar';
import Message from './components/Message';

function App() {
  const url = window.location.pathname.substr(1, 10)

  return (
    <Provider store={store}>
        {url !== "login" && <Appbar/>}
        <Message/>
        <Routes history={history} />
    </Provider>
  );
}

export default App;
