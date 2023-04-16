import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../API/api';
import { useEffect, useState } from 'react';
import defaultImage from '../../images/defaultImage.jpg';
import { List, Item } from './cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  console.log('🚀 ~ Cast ~ movieId:', movieId);

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchMovieCredits(+movieId, controller).then(({ cast }) => setActors(cast));

    return () => {
      controller.abort();
    };
  }, [movieId]);

  console.log(actors);
  return (
    <div>
      <List>
        {actors.map(({ id, profile_path = defaultImage, name, character }) => (
          <Item key={id}>
            <img
              src={
                profile_path === null
                  ? defaultImage
                  : `https://image.tmdb.org/t/p/w500/${profile_path}`
              }
              alt={name}
              width="100"
            />
            <h5>{name}</h5>
            <p>Character: {character}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Cast;
