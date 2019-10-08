import {movieActions} from '../actions';
import {INITIAL_STATE} from './index'



const movieReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case movieActions.getMovies:

            return{
                ...state,
                movies: action.payload
            }

        case movieActions.setFavorite:

            let exist;
            state.favorites.map(movie => {
                if(movie.id === action.payload.id){
                    exist = true;
                }
            
            })
            if(!exist){
                return {
                   ...state,
                   favorites: [...state.favorites, action.payload]
               }
             }

            
        case movieActions.deleteFavorite:
            
            return {
                ...state,
                favorites: state.favorites.filter( movie => movie.id !== action.payload )
            }
        
        case movieActions.getVideo:
            return{
                ...state,
                playing: state.movies.find( movie => movie.id === Number(action.payload) || {} )
            }

        case movieActions.movieRequest:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}
export default movieReducer;