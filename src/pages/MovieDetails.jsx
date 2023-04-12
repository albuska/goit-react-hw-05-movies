import { Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useParams, useLocation } from 'react-router-dom';
import { fetchDetailsOfMovie } from '../components/API/api';
import ButtonGoBack from 'components/ButtonGoBack';

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id); 
  const movie = fetchDetailsOfMovie(id); 
  // fetchDetailsOfMovie(id).then(data => console.log(data)); 
//   useEffect(() => {
//  fetchDetailsOfMovie(id).then(result => console.log(result));
//   }, [id])
 
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies';
  return (
    <div>
      <ButtonGoBack to={backLinkHref} />

      <h1>Опис фільма</h1>
      <h2>Назва {movie.title} - {id }</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
