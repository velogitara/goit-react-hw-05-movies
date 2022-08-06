import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './Container';
import AppBar from './AppBar';
// import Home from '../Pages/Home';
// import Movies from '../Pages/Movies';
// import MovieDetails from 'Pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Review from './Reviews/Reviews';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Container>
  );
};
