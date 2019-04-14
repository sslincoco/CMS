import Redux, { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'

let middlewareArray = [applyMiddleware(ReduxThunk, ReduxLogger)]

let finalCreateStore = compose.apply(Redux, middlewareArray)(createStore)

export default finalCreateStore