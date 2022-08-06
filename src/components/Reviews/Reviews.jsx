import MovieAPI from 'services/API';
import { ReviewLink } from './Reviews.styled';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Review() {
  const location = useLocation();
  const { pathname } = location;
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    MovieAPI.api(pathname, movieId).then(res => {
      console.log(res.data.results);
      setData([...res.data.results]);
    });
  }, [movieId, pathname]);

  return (
    <ReviewLink>
      {data.length !== 0 ? (
        data.map(i => (
          <li key={i.id}>
            <h3>{i.author}</h3>
            <p>{i.content}</p>
          </li>
        ))
      ) : (
        <li>
          <p> no reviews here</p>
        </li>
      )}
    </ReviewLink>
  );
}
