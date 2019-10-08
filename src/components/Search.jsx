import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { movieRequest } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({movieRequest}) => {

    const [movie,setMovie] = useState({
        movie:''
    })

    const handleState = event => {
        const { value } = event.target;
      
         setMovie({
            ...movie,
            movie: value
         })


    }

    const handleInput = event =>{
    
        if(event.keyCode === 13){
            
            movieRequest(movie)

        }
    }

  

    return (

    <section className="main">
        <h2 className="main__title"> What are you looking for?  </h2>
        <input onChange={handleState} onKeyUp ={handleInput} className="input" id="input" type="text"  placeholder="Search..."/>
    </section>

    )
}


const mapDispatchToProps = {
    movieRequest
}

export default connect(null,mapDispatchToProps)(Search)