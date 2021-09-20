import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./views/HomePage/HomePage.jsx'/* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage.jsx'/* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.jsx'/* webpackChunkName: "movie-details-page" */),
);

function App() {
  return (
    <div>
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
      <Toaster/>
    </div>
  );
}

export default App;
