export const movieActions = {
    getMovies:"GET_MOVIES",
    setFavorite:"SET_FAVORITE",
    deleteFavorite:"DELETE_FAVORITE",
    loginRequest:"LOGIN_REQUEST",
    logoutRequest:"LOGOUT_REQUEST",
    registerRequest:"REGISTER_REQUEST",
    getVideo:"GET_VIDEO",
    movieRequest:"MOVIE_REQUEST"
}

const API = 'b89fc45c2067cbd33560270639722eae';

export const setFavorite = payload =>({
    type: movieActions.setFavorite,
    payload
})

export const loginRequest = payload =>({
    type: movieActions.loginRequest,
    payload
})

export const registerRequest = payload => ({
    type: movieActions.registerRequest,
    payload
})

export const deleteFavorite = payload =>({
    type: movieActions.deleteFavorite,
    payload
})

export const logoutRequest = payload =>({
    type: movieActions.logoutRequest,
    payload
})

export const movieRequest = value => async (dispatch) =>{

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results
    const getMovie = movies.map(async movie =>{
        const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API}`
        const response = await fetch(movieUrl);
        const data = await response.json();
        data.myList = [];
        data.playing = null;
        data.user = {};
        data.video = 'https://www.youtube.com/watch?v=1Vnghdsjmd0'
        return data
    })
    const moviesInformation= await Promise.all(getMovie)
    let movie = moviesInformation.filter( movie => movie.title.trim().toLowerCase() === value.movie.trim().toLowerCase() );
    if(movie.length === 0){
        alert(`couldn't find the movie, just the 20 most trending movies are displayed.`);
        movie = [...moviesInformation.slice(0,7)]
        dispatch({
            type: movieActions.getMovies,
            payload:[...movie]
        })
    }else{
        dispatch({
            type: movieActions.getMovies,
            payload:[...movie]
            
        })
    }
    

    
}

export const getVideo = payload =>({
    type: movieActions.getVideo,
    payload
})

export const getMovies = () => async (dispatch) =>{

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=${API}`;
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results.slice(0,7)
    const getMovie = movies.map(async movie =>{
        const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API}`
        const response = await fetch(movieUrl);
        const data = await response.json();
        data.myList = [];
        data.playing = null;
        data.user = {};
        const videoUrl = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API}&language=en-US`);
        const dataVideo = await videoUrl.json();
        data.video = `https://www.youtube.com/watch?v=${dataVideo.results[0].key}`
        return data
    })
    const moviesInformation= await Promise.all(getMovie);


    
    

    dispatch({
        type: movieActions.getMovies,
        payload:[...moviesInformation]
        
    })
    
}

