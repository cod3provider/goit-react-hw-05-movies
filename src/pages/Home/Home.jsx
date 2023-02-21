import { useState, useEffect } from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';

import s from './Home.module.css';

import { getTrendingMovies } from '../../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const renderTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        console.log(trendingMovies);
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }

    renderTrendingMovies();
  }, []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  )
}

export default Home;
