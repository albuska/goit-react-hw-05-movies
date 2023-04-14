import { SearchString } from '../components/SearchString/SearchString';
import { Outlet, useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { fetchMovieSearchByKey } from '../components/API/api';
import FilteredMoviesList  from '../components/FilteredMoviesList';

const Movies = () => {
  
  // const movies = fetchMovieSearchByKey();
  // console.log(movies);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const movieName = searchParams.get('query') ?? '';
  console.log( movieName);

  const visibleMovies = movies.filter(movie =>
    movie.query.toLowerCase().includes(movieName.toLowerCase())
  );

  // const visibleMovies = fetchMovieSearchByKey(movieName.toLowerCase());
  // console.log(visibleMovies)

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchString value={movieName} onChange={updateQueryString} />
      <FilteredMoviesList moviesList={visibleMovies} />
      <Outlet />
    </div>
  );
};

export default Movies;
