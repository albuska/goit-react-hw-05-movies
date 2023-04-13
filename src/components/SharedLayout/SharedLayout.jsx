import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  StyledLink,
  OverlayHeader,
  Main,
  Footer,
  Paragraph,
} from './SharedLayout.styled';
import { GiFilmSpool } from 'react-icons/gi';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Container>
          <OverlayHeader>
            <Logo>
              <GiFilmSpool />
            </Logo>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </nav>
          </OverlayHeader>
        </Container>
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer>
        <Container>
          <Paragraph>Created by Albina Anistratenko</Paragraph>
        </Container>
      </Footer>
    </div>
  );
};

export default SharedLayout;
