import { Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useParams, useLocation } from 'react-router-dom';
import { fetchDetailsOfMovie } from '../components/API/api';
import ButtonGoBack from 'components/ButtonGoBack';
import { useRef } from 'react';
import defaultImage from '../images/defaultImage.jpg';

const MovieDetails = () => {
  const location = useLocation();

  const [movieItem, setMovieItem] = useState([]);
  // const [listGenres, setListGenres] = useState([]);
  const { movieId } = useParams();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const controller = new AbortController();

    fetchDetailsOfMovie(+movieId, controller)
      .then(item => {
        setMovieItem(item);
      })
      .catch(error => console.log(error));

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <ButtonGoBack location={location}></ButtonGoBack>

        <img
          src={
            movieItem.poster_path === null
              ? defaultImage
              : `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`
          }
          alt={movieItem.title}
          width="200"
        />
        <h4>
          {movieItem.title} <span>({movieItem.release_date})</span>
        </h4>
        <p>User score: </p>
        <p>Overview</p>
        <p>{movieItem.overview}</p>
        <p>Genres</p>

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
