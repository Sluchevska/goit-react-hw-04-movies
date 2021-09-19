import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage.jsx';
import MoviesPage from './views/MoviesPage/MoviesPage.jsx';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage.jsx';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>

        <Route path="/" exact>
          <HomePage />
        </Route>

        

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
