import { SearchString } from '../components/SearchString/SearchString';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieSearchByKey } from '../components/API/api';
import FilteredMoviesList from '../components/FilteredMoviesList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    if (movieName === '') {
      return;
    }
    fetchMovieSearchByKey(movieName.toLowerCase(), controller).then(({ results }) => {
      setVisibleMovies(results);
        if (results.length === 0) {
           toast.error(`Oops...No such title found ${movieName}`, {
             duration: 3000,
             position: 'top-right',
           });
        }
    })
    return () => {
      controller.abort(); 
    }
  }, [movieName]);

  const handleSearchFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchString onSubmit={handleSearchFormSubmit} />
      <FilteredMoviesList moviesList={visibleMovies} />
      <Outlet />
    </div>
  );
};

export default Movies;
