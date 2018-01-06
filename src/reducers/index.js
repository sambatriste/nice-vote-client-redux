import { combineReducers } from 'redux'
import voteReducer from './voteReducer'

const appReducer = combineReducers({
  themes: voteReducer
})

export default appReducer