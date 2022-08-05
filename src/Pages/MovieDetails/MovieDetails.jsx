import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieAPI from 'services/API';

import {
  Details,
  Img,
  Attributes,
  Title,
  AttributeName,
  VoteAverage,
  Genres,
  Overview,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const { pathname, state } = location;
  //   console.log(location);
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('');
  useEffect(() => {
    MovieAPI.api(pathname, state.movie_id)
      .then(res => res.data)
      .then(res => {
        const allGenres = res.genres.map(i => i.name).join(', ');
        setGenres(allGenres);
        return setData(res);
      });
  }, [pathname, state]);

  return (
    <>
      <Details>
        {data.length !== 0 && (
          <Img
            src={
              data.poster_path
                ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                  data.poster_path
                : 'https://bimmridder.com/wp-content/uploads/2016/09/placeholder-300x400.png'
            }
            alt={data.title}
          />
        )}
        <Attributes>
          <Title>
            {data.title}
            {data.release_date && (
              <span>{' (' + data.release_date.slice(0, 4) + ')'}</span>
            )}
          </Title>
          <VoteAverage>
            User score: {Number.parseInt(data.vote_average * 10)}%
          </VoteAverage>
          <AttributeName>Overview</AttributeName>
          <Overview>{data.overview}</Overview>
          <AttributeName>Genres</AttributeName>
          <Genres>{genres}</Genres>
        </Attributes>
      </Details>
    </>
  );
}
