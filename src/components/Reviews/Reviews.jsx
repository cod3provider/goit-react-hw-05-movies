import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReviews(movieId)
    .then(setReviews)
    .catch(error => console.log(error))
  }, [movieId]);

  if (reviews.length === 0) {
     return "We don't have any reviews for this movie.";
  }

  return (
    <ul>
      {reviews.map(({ id, author, content}) => (
           <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
         ))}
    </ul>
  )
}

export default Reviews;
