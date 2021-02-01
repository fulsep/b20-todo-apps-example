import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import persistedStore from './redux/store'

import Home from './pages/Home'
import Edit from './pages/Edit'
import Add from './pages/Add'
import Detail from './pages/Detail'

export default function App() {
  const {store, persistor} = persistedStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route path ='/' exact component={Home} />
            <Route path ='/edit/:id' component={Edit} />
            <Route path ='/add' component={Add} />
            <Route path ='/detail/:id' component={Detail} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}
