import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Suspense, lazy } from 'react';
import SharedLayout from './SharedLayout';
import Loader from './Loader'; 

const Home = lazy(() => import('../pages/Home')); 
const Movies = lazy(() => import('../pages/Movies')); 
const MovieDetails = lazy(() => import('../pages/MovieDetails')); 
const NotFound = lazy(() => import('../pages/NotFound')); 
const Cast = lazy(() => import('../components/Cast')); 
const Reviews = lazy(() => import('../components/Reviews')); 

export const App = () => {
  return (
    <Suspense fallback={Loader}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
};
