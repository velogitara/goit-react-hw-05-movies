import MovieAPI from 'services/API';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState();
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
    <div>
      <h2>Trending today</h2>
      <ul>
        {data &&
          data.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ movie_id: item.id }}>
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
