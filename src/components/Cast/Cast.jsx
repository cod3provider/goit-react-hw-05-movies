import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NoImage from '../NoImage/NoImage.jpg';

import { getMovieCast } from '../../services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const baseURL = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    getMovieCast(movieId)
    .then(setCast)
    .catch(error => console.log(error))
  }, [movieId]);

  if (!cast) {
    return "We don't have any cast information on this movie.";
  }

  const castItem = cast.map(({ id, profile_path, name, character }) => (
    <li key={id}>
      <img
        src={profile_path ? `${baseURL}${profile_path}` : NoImage}
        alt=''
        width="200"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ))

  return (
    <div>
      <ul>
        {castItem}
      </ul>
    </div>
  )
}

export default Cast;
