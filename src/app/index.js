import React from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import store from './store'
import Orders from './containers/orders'
import base from './containers/HOC/base'
import Login from './containers/login'
import RecoveryPassword from './containers/recoveryPassword'
import ResetPassword from './containers/recoveryPassword/resetPassword'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route  path={'/'} exact component={base(Orders)} />

          <Route  path={'/login'}  component={Login} />
          <Route  path={'/recoveryPassword'}  component={RecoveryPassword} />
          <Route  path={'/resetPassword/:token'}  component={ResetPassword} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
