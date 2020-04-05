import React from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import store from './store'
import Orders from './containers/orders'
import base from './containers/HOC/base'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route  path='/' exact component={base(Orders)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
