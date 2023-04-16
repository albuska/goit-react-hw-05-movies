import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../API/api';
import {
  StyledLink,
  List,
  Item,
  Title,
  TitleCard,
  RatingCard,
} from './ListMovies.styled';
import defaultImage from '../../images/defaultImage.jpg';
import { useLocation } from 'react-router-dom';

const ListMovies = () => {
  const location = useLocation();

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPopularMovies(controller).then(({ results }) => {
      setPopularMovies(results);
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {popularMovies.map(
          ({ id, poster_path, title = 'Anonymous', vote_average }) => (
            <Item key={id}>
              <StyledLink to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path === null
                      ? defaultImage
                      : `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={title}
                  width="200"
                />
                <TitleCard>{title}</TitleCard>
                <RatingCard>
                  <b>Rating:</b> {vote_average}
                </RatingCard>
              </StyledLink>
            </Item>
          )
        )}
      </List>
    </div>
  );
};

export default ListMovies;
