import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

import Container from './Container';
import AppBar from './AppBar';
import { GlobalStyle } from './GlobalStyle';
// import NotFound from 'Pages/NotFound';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  const [sq, setSq] = useState('');

  const getSearchQueryBar = sq => {
    setSq(sq);
    console.log(sq);
  };
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/movies"
            element={<Movies getSearchQueryBar={getSearchQueryBar} />}
          ></Route>
          <Route path="/movies/:movieId" element={<MovieDetails sq={sq} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
