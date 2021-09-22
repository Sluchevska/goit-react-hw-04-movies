import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader.jsx';
import { Container } from './App.styled';

const HomePage = lazy(() =>
  import(
    '../../views/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    '../../views/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Loader />}>
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
      <Toaster />
    </Container>
  );
}

export default App;
