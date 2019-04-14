import { combineReducers } from 'redux'
import ActionTypes from 'actions/types.js'


const initState = {
  result: []
}
function musicList(state=initState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_MUSIC_LIST:
      return Object.assign({}, state, action.payload)
  }
  return {...state}
}

const reduces = combineReducers({
  musicList
})

export default reduces

