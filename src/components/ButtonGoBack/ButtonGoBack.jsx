import { StyledNavLink } from './ButtonGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';

const ButtonGoBack = () => {
  return (
    <div>
      <StyledNavLink>
        <BiArrowBack />
        <span>Go back</span>
      </StyledNavLink>
    </div>
  );
};

export default ButtonGoBack;
