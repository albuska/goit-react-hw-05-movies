import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../API/api';
import { useParams } from 'react-router-dom';
import { Item, MessageReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    fetchMovieReviews(+movieId, controller).then(({ results }) =>
      setReviews(results)
    );
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <MessageReviews>We don't have any reviews for this movie</MessageReviews>
      ) : (
        <ul>
          {reviews.map(review => (
            <Item key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </Item>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
