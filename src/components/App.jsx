import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
