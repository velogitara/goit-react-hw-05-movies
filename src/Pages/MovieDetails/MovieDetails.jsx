import CastReviewContainer from 'components/Cast&ReviewContainer';
import { useEffect, useState } from 'react';
import { useLocation, Outlet, useParams, Link } from 'react-router-dom';
import MovieAPI from 'services/API';
import { Suspense } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

import {
  Details,
  Img,
  Attributes,
  Title,
  AttributeName,
  VoteAverage,
  Genres,
  Overview,
  LinkContainer,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();

  const [data, setData] = useState({});
  const [genres, setGenres] = useState('');

  useEffect(() => {
    MovieAPI.api('/movies/', movieId)
      .then(res => res.data)
      .then(res => {
        const allGenres = res.genres.map(i => i.name).join(', ');
        setGenres(allGenres);
        setData(res);
        return;
      })
      .catch(err => {
        console.log(err);
      });
  }, [data.id, movieId]);

  return (
    <div>
      <LinkContainer>
        <Link to={backLinkHref}>
          <IoIosArrowRoundBack
            style={{
              height: '28px',
              width: '32px',
              verticalAlign: 'middle',
              color: 'darkorange',
            }}
          />
          go back
        </Link>
      </LinkContainer>
      {movieId === String(data.id) ? (
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
          <CastReviewContainer />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>{' '}
        </>
      ) : (
        data.id && <p>В базе нет такого фильма</p>
      )}
    </div>
  );
}
