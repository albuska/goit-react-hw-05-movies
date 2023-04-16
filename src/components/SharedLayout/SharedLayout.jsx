import { Outlet } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import {
  Container,
  Header,
  Logo,
  StyledLink,
  OverlayHeader,
  Main,
  Footer,
  Paragraph,
  LinkNetworks,
  NetworkList,
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
          <Paragraph>
            Created by <b>Albina Anistratenko</b>
          </Paragraph>
          <Paragraph>GoIt school</Paragraph>
          <NetworkList>
            <LinkNetworks
              target="_blank"
              to="https://www.instagram.com/albusichka/"
            >
              <BsInstagram />
            </LinkNetworks>
            <LinkNetworks target="_blank" to="https://t.me/albina_anistratenko">
              <FaTelegramPlane />
            </LinkNetworks>
            <LinkNetworks
              target="_blank"
              to="https://www.linkedin.com/in/albina-anistratenko/"
            >
              <RiLinkedinFill />
            </LinkNetworks>
          </NetworkList>
        </Container>
      </Footer>
    </div>
  );
};

export default SharedLayout;
