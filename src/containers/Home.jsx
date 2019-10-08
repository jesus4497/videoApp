import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import ItemCarousel from '../components/ItemCarousel';
import {getMovies} from '../actions';




const Home = ({ favorites, movies, getMovies }) =>{
    // const apiKey = 'b89fc45c2067cbd33560270639722eae'
    
    // const movies = useInitialState(apiKey)
    
    useEffect(()=>{
        getMovies()
    },[])
    
    return(
        <>
            <Search></Search>
            
            
            {favorites.length === 0 ? null : 
            <Categories title="favorites">
                <Carousel>
                    {
                    
                        favorites.map((movie,index) =>{
                            return <ItemCarousel key={index} {...movie} isFavorite />
                        })
                        
                    }

                </Carousel>
            </Categories>}

           { movies.length > 0 && //if there's movies then
           <Categories title="Horror">

                <Carousel>
                    {
                       
                        movies.map((movie,index) =>{
                            
                            return <ItemCarousel  key={index} {...movie} />
                        })
                        
                    }
                </Carousel>

            </Categories>}
            
        </>
    )
}

const mapStateToProps = state =>{
    return{
        favorites: state.movieReducer.favorites,
        movies: state.movieReducer.movies
    }
}


const mapDispatchToProps = {
    getMovies
}

// export default Home
export default connect(mapStateToProps,mapDispatchToProps)(Home);