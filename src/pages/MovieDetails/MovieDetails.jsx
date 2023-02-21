import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import MovieInfo from '../../components/MovieInfo/MovieInfo';

import s from './MovieDetails.module.css';

import { getMovieDetails } from '../../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
    .then(setMovie)
    .catch(error => console.log(error))
  }, [movieId])

  const from = location.state?.from ?? '/';

  return (
    <div>
      {movie && (
        <div className={s.wrapper}>
          <Link className={s.backButton} to={from}>Go back</Link>
          <MovieInfo info={movie} />
          <div className={s.infoWrap}>
            <div>
              <p >Additional information</p>
              <ul>
                <li>
                  <Link className={s.link} to="cast" state={{ from }}>Cast</Link>
                </li>

                <li>
                  <Link className={s.link} to="reviews" state={{ from }}>Reviews</Link>
                </li>
              </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default MovieDetails;
