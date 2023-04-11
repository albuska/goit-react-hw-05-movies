import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movies</NavLink>
            <NavLink to="movies/:movieId">MovieDetails</NavLink>
          </nav>
        </header>
        <Outlet />
        <main></main>
        <footer></footer>
      </div>
    );
}

export default SharedLayout; 