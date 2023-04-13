import ListMovies from '../components/ListMovies/ListMovies';
import image from '../images/poster.jpg';

const Home = () => {
      return (
    <div>
      <img src={image} alt="Poster" width="100%" />
      <ListMovies />
    </div>
  );
};

export default Home;
