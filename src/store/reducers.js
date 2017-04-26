import { combineReducers } from 'redux'
import locationReducer from './location'
import { Reducers as gridReducers } from 'react-redux-grid'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...gridReducers,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
