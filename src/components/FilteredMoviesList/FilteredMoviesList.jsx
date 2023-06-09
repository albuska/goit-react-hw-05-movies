import defaultImage from '../../images/defaultImage.jpg';
import PropTypes from 'prop-types';
import {
  StyledLink,
  List,
  Item,
  ParagraphBox,
  Paragraph,
} from './FilteredMoviesList.styled';
import { useLocation } from 'react-router-dom';

const FilteredMoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <div>
      <List>
        {moviesList.map(result => (
          <Item key={result.id}>
            <StyledLink to={`${result.id}`} state={location}>
              <img
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                    : defaultImage
                }
                alt={result.title}
                width="200"
              />
              <ParagraphBox>
                <Paragraph>{result.title}</Paragraph>
              </ParagraphBox>
            </StyledLink>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default FilteredMoviesList;

FilteredMoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};
