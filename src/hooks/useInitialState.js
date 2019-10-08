import {useState, useEffect} from 'react';

const useInitialState = (API) =>{

    const [ movies, setMovies ] = useState([]); 
    useEffect( ()=>{
        
        const fetchMovies = async ()=>{
            const url = `https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=${API}`;
            const response = await fetch(url);
            const data = await response.json();
            const movies = data.results.slice(0,7)
            const getMovie = movies.map(async movie =>{
                const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API}`
                const response = await fetch(movieUrl);
                const data = await response.json();
                data.myList = [];
                data.playing ={};
                data.user = {};
                return data
            })
            const moviesInformation= await Promise.all(getMovie)
            console.log(moviesInformation)
            setMovies(moviesInformation)
        }
        
        fetchMovies()
    },[]);

    return movies;
    
}

export default useInitialState;