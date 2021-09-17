import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Navigation />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/movies" exact>
        <MoviesPage />
      </Route>
      <Route>
        <HomePage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
