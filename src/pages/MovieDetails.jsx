import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useParams, useLocation } from 'react-router-dom';
import { fetchDetailsOfMovie } from '../components/API/api';
import ButtonGoBack from 'components/ButtonGoBack';
import defaultImage from '../images/defaultImage.jpg';
import {
  ContainerBox,
  Title,
  ContainerDescription,
  Overlay,
  Item,
  List,
  NavLinkStyled,
  GenresParagraph,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();

  const [movieItem, setMovieItem] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    const controller = new AbortController();

    fetchDetailsOfMovie(movieId, controller)
      .then(item => {
        setMovieItem(item);
      })
      .catch(error => console.log(error));

    return () => {
      controller.abort();
    };
  }, [movieId]);
 
  const userScore = Math.round(movieItem.vote_average * 10);
  const date = new Date(movieItem.release_date);
  return (
    <div>
      <ButtonGoBack location={location ?? '/'}></ButtonGoBack>

      <ContainerBox>
        <img
          src={
            movieItem.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`
              : defaultImage
          }
          alt={movieItem.title}
          width="200"
        />
        <ContainerDescription>
          <Title>
            {movieItem.title} <span>({date.getFullYear()})</span>
          </Title>
          <Overlay>
            <b>User score:</b> {userScore}%
          </Overlay>
          <Overlay>
            <b>Overview</b>
          </Overlay>
          <Overlay>{movieItem.overview}</Overlay>
          <Overlay>
            <b>Genres</b>
            <GenresParagraph>
              {movieItem.genres &&
                movieItem.genres.map(genre => genre.name).join(', ')}
            </GenresParagraph>
          </Overlay>
        </ContainerDescription>
      </ContainerBox>
      <h4>Additional information</h4>
      <List>
        <Item>
          <NavLinkStyled to="cast" state={location.state}>
            Cast
          </NavLinkStyled>
        </Item>
        <Item>
          <NavLinkStyled to="reviews" state={location.state}>
            Reviews
          </NavLinkStyled>
        </Item>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
