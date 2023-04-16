import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../API/api';
import { useParams } from 'react-router-dom';

 
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
    }
}, [movieId]);   
    
    console.log(reviews)

    return (
      <div>
        {reviews === [] ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
         
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <h5>Author: {review.author}</h5>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
        )}
      </div>
    );
}

export default Reviews; 