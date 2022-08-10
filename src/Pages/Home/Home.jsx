import MovieAPI from 'services/API';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';
import { Container, Title } from './Home.styled';

export default function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const movie_id = null;

  useEffect(() => {
    const something = async () => {
      const res = await MovieAPI.api(location.pathname, movie_id);
      setData([...res.data.results]);
    };

    something();
  }, [location.pathname]);

  return (
    <Container>
      <Title>Trending today</Title>
      {data.length ? <MovieList data={data} /> : <p>нет такого в поиске</p>}
    </Container>
  );
}
