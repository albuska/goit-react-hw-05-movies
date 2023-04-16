import { StyledNavLink } from './ButtonGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';

const ButtonGoBack = ({location}) => {
console.log(location)
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
