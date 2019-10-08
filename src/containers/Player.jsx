import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideo } from '../actions';
import '../assets/styles/components/Player.scss';
const Player = props =>{
    
    const { history, playing, getVideo } = props;
    const { id } = props.match.params;
    const isPlaying = Object.keys(playing).length > 0;

    useEffect(()=>{
        getVideo(id)
    },[])

    return isPlaying ? (
        <div className="Player">

            <video controls autoPlay src={`https://www.youtube.com/watch?v=${playing.video}`}/>
        
        

            <div className="Player-back">
                <button onClick={history.goBack}>
                    Back
                </button>
            </div>

        </div>
 
    ): 'Loading...'
}

const mapStateToProps = state =>({
    playing: state.movieReducer.playing
})

const mapDispatchToProps = {
    getVideo
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);