import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';
import Background from '../Background/Background.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* <Background /> */}

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details/:id">
          <MovieDetails />
        </Route>

        <Route path="/add">
          <AddMovie />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
