import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from '../../components/MoviesList/MoviesList';

import s from './Movies.module.css';

import { searchMovies } from '../../services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) {
      return;
    }

    async function renderMovie() {
      try{
        const result = await searchMovies(movieSearch);
        setMovies(result);
      } catch (error) {
        console.log(error);
      }
    }

    renderMovie();
  }, [movieSearch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={s.input} type='text' value={query} onChange={handleChange} />
        <button className={s.button} type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </div>
  )
}

export default Movies;
