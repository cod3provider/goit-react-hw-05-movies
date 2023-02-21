import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, original_title }) =>
    <li className={s.item} key={id}>
      <Link className={s.link} to={`/movies/${id}`} state={{ from: location }}>{original_title}</Link>
    </li>
  )

  return (
    <ul className={s.list}>
      {elements}
    </ul>
  )
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired
};
