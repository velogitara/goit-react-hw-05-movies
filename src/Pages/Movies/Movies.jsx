import MovieAPI from 'services/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchQuery from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList';
import { MovieContainer } from './Movies.styled';

export default function Movies() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');
  const location = useLocation();
  const { pathname } = location;
  const [data, setData] = useState();
  // console.log(pathname);

  useEffect(() => {
    if (!name) {
      return;
    }
    MovieAPI.api(pathname, name).then(res => {
      setData([...res.data.results]);

      console.log(res);
    });
  }, [name, pathname]);

  return (
    <MovieContainer>
      <SearchQuery />
      <MovieList data={data} />
    </MovieContainer>
  );
}
