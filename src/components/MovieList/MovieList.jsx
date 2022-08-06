import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function MovieList({ data }) {
  const location = useLocation();
  return (
    <ul>
      {data &&
        data.map(item => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              state={{
                movie_id: item.id,
                from: location,
              }}
            >
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MovieList.propTypes = {
  data: PropTypes.array,
};
