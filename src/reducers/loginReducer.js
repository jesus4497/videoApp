import {movieActions} from '../actions';
import {INITIAL_STATE} from './index'

const loginReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case movieActions.loginRequest:
            return{
                ...state,
                user: action.payload
            }
        case movieActions.logoutRequest:
            return{
                ...state,
                user:action.payload
            }
        case movieActions.registerRequest:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}

export default loginReducer