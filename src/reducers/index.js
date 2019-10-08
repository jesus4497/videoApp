import { combineReducers} from 'redux';
import movieReducer from './movieReducer';
import loginReducer from './loginReducer'

export const INITIAL_STATE = {
    "favorites": [],
    "playing": {},
    "user":{},
    "movies": []
}

export default combineReducers({
    movieReducer,
    loginReducer
})
