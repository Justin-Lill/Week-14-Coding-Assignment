import React, {useEffect, useState} from 'react';

import Movie from './components/Movie';
import { useEffect } from 'react';

const API = []

function App() {
  const movies = [] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  
  if(searchTerm) {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })

    setMovies(moviesR);
  }; []
};

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

const handleOnChange (e) => {
  setSearchTerm(e.target.value);
}

  return <div className='movie-container'>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input classname="search"type={text} placeholder="Search"></input> value = {searchTerm} onChange{handleOnChange}
      </form>
    </header>
    {movies.length > 0 && movies.map((movie) => (<Movie key={movie.id} data={...movie} />
    ))};
  </div>
};

export default App;
