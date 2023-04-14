import { useLocation } from 'react-router-dom';
import ListMovies from '../components/ListMovies/ListMovies';
import image from '../images/poster.jpg';

const Home = () => {
  const location = useLocation();
  console.log("🚀 ~ Home ~ location:", location)
  
      return (
    <div>
      <img src={image} alt="Poster" width="100%" />
      <ListMovies />
    </div>
  );
};

export default Home;
