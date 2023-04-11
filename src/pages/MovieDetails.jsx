import { Link, Outlet } from "react-router-dom";
import { Suspense } from 'react';

const MovieDetails = () => {
    return (
        <Suspense>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Suspense>
    );
}

export default MovieDetails; 