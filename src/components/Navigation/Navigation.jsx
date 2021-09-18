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
          {/* /* <NavLink
              exact to="/movies/:movieId"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Movie Details
      </NavLink> */}
          
    </nav>
  );
};

export default Navigation;