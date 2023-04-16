import { StyledNavLink } from './ButtonGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';

const ButtonGoBack = ({ location }) => {
  const backLinkHref = location.state;

  return (
    <div>
      <StyledNavLink to={backLinkHref}>
        <BiArrowBack />
        <span>Go back</span>
      </StyledNavLink>
    </div>
  );
};

export default ButtonGoBack;
