import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
