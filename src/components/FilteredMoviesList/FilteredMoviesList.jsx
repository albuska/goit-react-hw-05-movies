import defaultImage from '../../images/defaultImage.jpg';
import PropTypes from 'prop-types';
import { StyledLink } from './FilteredMoviesList.styled'; 

const FilteredMoviesList = ({ moviesList }) => {

  return (
    <div>
      <ul>
        {moviesList.map(result => (
          <li key={result.id}>
            <StyledLink to={`${result.id}`}>
              <img
                src={
                  result.poster_path === null
                    ? defaultImage
                    : `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                }
                alt={result.title}
                width="200"
              />
              <p>{result.title}</p>
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredMoviesList;

// FilteredMoviesList.propTypes = {
//   moviesList: PropTypes.object({
//     item: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

