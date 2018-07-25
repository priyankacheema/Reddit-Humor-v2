import { combineReducers } from 'redux';
import { humorReducer } from './humor'

export default combineReducers({
  humor: humorReducer,
})