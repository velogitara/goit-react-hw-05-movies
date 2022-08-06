import CastReviewContainer from 'components/Cast&ReviewContainer';
import { useEffect, useState } from 'react';
import { useLocation, Outlet, useParams } from 'react-router-dom';
import MovieAPI from 'services/API';
import { Suspense } from 'react';

import {
  Details,
  Img,
  Attributes,
  Title,
  AttributeName,
  VoteAverage,
  Genres,
  Overview,
  Link,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { pathname } = location;
  const { movieId } = useParams();
  // console.log(location);
  // ================================ как решить проблему ???
  // const [currentPathName, setCurrentPathName] = useState(`/movies/${movieId}`);
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('');

  useEffect(() => {
    // if (currentPathName !== pathname) {
    //   return;
    // }
    MovieAPI.api('/movies/', movieId)
      .then(res => res.data)
      .then(res => {
        // console.log(res);
        const allGenres = res.genres.map(i => i.name).join(', ');
        setGenres(allGenres);
        return setData(res);
      });
    // setCurrentPathName(pathname);
  }, [movieId, pathname]);

  return (
    <>
      <Link to={backLinkHref}>go back</Link>
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
      <CastReviewContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
