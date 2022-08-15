import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchQuery from 'components/SearchBar/SearchBar';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieAPI from 'services/API';
import { MovieContainer } from './Movies.styled';

export default function Movies({ getSearchQueryBar }) {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query') || '';
  const location = useLocation();
  const { pathname } = location;
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    setData(null);

    if (!name) {
      setData(null);
      setStatus('idle');

      return;
    }
    setTimeout(() => {
      MovieAPI.api(pathname, name).then(res => {
        if (!res.data.results.length) {
          setData(null);
          setStatus('rejected');

          console.log('пусто');
          return;
        }
        setData([...res.data.results]);
        setStatus('resolved');

        console.log('есть запрос');
      });
    }, 500);
  }, [name, pathname]);

  return (
    <MovieContainer>
      <SearchQuery getSearchQueryBar={getSearchQueryBar} />
      {status === 'pending' && <Loader />}
      {data && <MovieList data={data} />}
      {status === 'idle' && (
        <div>
          здесь скоро появятся фильмы, <IoIosArrowDropupCircle /> введите слово
          поиска
        </div>
      )}

      {status === 'rejected' && <div>нет такого в поиске</div>}
    </MovieContainer>
  );
}
