import React from 'react';

const setVoteClass = (vote) => {
    if(vote>= 8) {
        return 'green'
    } elseif(vote=> 6) {
        return 'orange'
    } else {
        return 'red';
    } 
    }

const Movie = ({title, poster_path, overview, vote_average }) => (
    <div className='movie'> 
        <img src={IMG_API + poster_path} alt={title} />
        <div className='movie-info'></div>
        <h3>{title}</h3>
        <span className={setVoteClass(vote_average)}></span>
    </div>
);

export default Movie;

