import { Link } from "react-router-dom";
import ImageNotFoundPage from '../images/notFound.jpg'; 

const NotFound = () => {
    return (
      <div>
        <Link to="/">Back to the home page</Link>
        <img src={ImageNotFoundPage} alt="NotFoundPage" />
      </div>
    );
}

export default NotFound; 