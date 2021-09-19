import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader.jsx'
// import HomePage from './views/HomePage/HomePage.jsx';
// import MoviesPage from './views/MoviesPage/MoviesPage.jsx';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage.jsx';

const HomePage = lazy(() => import('./views/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.jsx'),
);

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<Loader/>}>
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
      </Suspense>
    </div>
  );
}

export default App;
