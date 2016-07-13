import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import App from './components/app';
//import SearchResult from './components/search/search_result';
//import Receipt from './components/receipt/receipt_main';
//import POStatus from './components/po_status/po_status';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
