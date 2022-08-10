import MovieAPI from 'services/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchQuery from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList';
import { MovieContainer } from './Movies.styled';

export default function Movies({ getSearchQueryBar }) {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query') || '';
  const location = useLocation();
  const { pathname } = location;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!name) {
      setData([]);
      return;
    }
    MovieAPI.api(pathname, name).then(res => {
      if (!res.data.results.length) {
        setData([]);

        // console.log('пусто');
        return;
      }
      setData([...res.data.results]);

      // console.log('есть запрос');
    });
  }, [name, pathname]);

  return (
    <MovieContainer>
      <SearchQuery getSearchQueryBar={getSearchQueryBar} />
      {data.length ? (
        <MovieList data={data} />
      ) : (
        name && <p>нет такого в поиске</p>
      )}
    </MovieContainer>
  );
}
