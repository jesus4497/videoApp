import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions'
import PropTypes from 'prop-types'
import '../assets/styles/components/ItemCarousel.scss';


const ItemCarousel = ({title, genres, poster_path, runtime, setFavorite, id, deleteFavorite, isFavorite, release_date}) => {

    const handleFavorites = ()=>{
        setFavorite({title, genres, poster_path, runtime, release_date, id})
    }
    

    const handleDeleteFavorites = ()=>{
        deleteFavorite(id)
    }

    
    
    let genreMovies = [...genres]

    if(genres.length >=2){
        genreMovies = `${genres[0].name} - ${genres[1].name}`
    }else{
        genreMovies = genres[0].name
    }
    
  return(  
   
   
        <div className="carousel-item">
            
            <img className="carousel-item__img" src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>
            <div className="carousel-item__details">
                {isFavorite ? 
                <img 
                    onClick={handleDeleteFavorites} 
                    className="favoriteButton" 
                    src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                />
                :
                <img 
                    onClick={handleFavorites} 
                    className="favoriteButton" 
                    src="https://img.icons8.com/plasticine/100/000000/plus-2-math.png"
                />
                }
                <p className="carousel-item__details--title">
                    {title}
                </p>
                <p className="carousel-item__details--subtitle">
                    <span >Duration: {runtime}  min</span>
                    <span>Genre: {`${genreMovies}`}  </span>
                    <span>Date: {release_date}  </span>
                    <Link to={`/player/${id}`}>
                        <img src="https://img.icons8.com/plasticine/100/000000/play-button-circled.png" className="playButton" alt="play-button"/>
                    </Link>
                </p>
            </div>
            
        </div>

    
  )}


//validation of the props using proptypes
ItemCarousel.propTypes = {
    title: PropTypes.string.isRequired, //obligatory
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    runtime: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}


export default connect(null, mapDispatchToProps)(ItemCarousel)