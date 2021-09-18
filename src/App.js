import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

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
