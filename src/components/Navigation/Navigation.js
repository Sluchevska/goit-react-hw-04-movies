import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className="Navigation_link" activeClassName="Active_link">
        Home Page
      </NavLink>
      <NavLink
        to="/movies"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Movies
      </NavLink>
          <NavLink
              exact to="/movies/:movieId"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Movie Details
      </NavLink>
          <NavLink
              exact to="/movies/:movieId/cast"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Cast
      </NavLink>
      <NavLink
        to="/movies/:movieId/reviews"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default Navigation;
