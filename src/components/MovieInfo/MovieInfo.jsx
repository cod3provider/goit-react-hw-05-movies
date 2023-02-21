import PropTypes from 'prop-types';

import s from './MovieInfo.module.css';

import NoImage from '../NoImage/NoImage.jpg';

const MovieInfo = ({ info }) => {
  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = info;

  const baseURL = 'https://image.tmdb.org/t/p/w500';

  const getVotes = () => Math.round(`${vote_average}` * 10);

  return (
    <div className={s.wrapper}>
      <div className={s.pictureThumb}>
        <img src={poster_path ? `${baseURL}${poster_path}` : NoImage}
             alt={original_title}
             width="500"
             className={s.picture}
        />
      </div>

      <div className={s.container}>
        <h1 className={s.title}>{original_title}</h1>
        <p>User Score: {getVotes()}%</p>

        <p className={s.infoTitle}>Overview</p>
        <p>{overview}</p>

        <p className={s.infoTitle}>Genres</p>
        <p>
          {genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
    </div>
  );
};
export default MovieInfo;

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
