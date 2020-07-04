import React from 'react';
import { Provider } from 'react-redux'
import { history, store } from "./store"

import Routes from './routes';

import Message from './containers/Message';
import Confirm from './containers/Confirm';

function App() {
  return (
    <Provider store={store}>
        <Message/>
        <Confirm/>
        <Routes history={history} />
    </Provider>
  );
}

export default App;
