import { SearchString } from '../components/SearchString/SearchString';
import { Outlet, useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('title') ?? '';
  console.log('🚀 ~ Movies ~ productName:', productName);

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchString value={productName} onChange={updateQueryString} />
      <Outlet />
    </div>
  );
};

export default Movies;
