import { StyledNavLink } from './ButtonGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';
// import PropTypes from 'prop-types';

const ButtonGoBack = ({ location }) => {
  return (
    <div>
      <StyledNavLink to={location.state}>
        <BiArrowBack />
        <span>Go back</span>
      </StyledNavLink>
    </div>
  );
};

export default ButtonGoBack;

// ButtonGoBack.propTypes = {
//   location: PropTypes.object.isRequired,
// };
