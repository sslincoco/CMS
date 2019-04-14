"use strict";

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import finalCreateStore from './store/configStore.js'
import reducers from './reducers/index.js'
import App from './app.js'
import ErrorCatch from 'components/public/errorCatch.js'

const store = finalCreateStore(reducers);
const render = (App) => {
  ReactDom.render(
    <ErrorCatch>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <App />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorCatch>,
    document.getElementById("app")
  )
}
render(App);