import env from './constants/env'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import localforage from 'localforage'
import initialState from './constants/initstate'

import modules from './modules'

const logger = env.USE_LOGGER ? createLogger({}) : null

const reducers = combineReducers(modules)

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(logger, thunk),
  )
)

export default store
