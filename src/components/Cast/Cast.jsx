import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../API/api';
import { useEffect, useState } from 'react';
import defaultImage from '../../images/defaultImage.jpg';

const Cast = () => {
  const { movieId } = useParams();
  console.log('🚀 ~ Cast ~ movieId:', movieId);

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieCredits(+movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  console.log(actors);
  return (
    <div>
      <ul>
        {actors.map(({ id, profile_path = defaultImage, name, character }) => (
          <li key={id}>
            <img
              src={profile_path === null ? defaultImage : `https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width="100"
            />
            <h5>{name}</h5>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
