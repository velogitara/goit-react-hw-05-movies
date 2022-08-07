import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { P, List, Items } from './MovieList.styled';

export default function MovieList({ data, name }) {
  const location = useLocation();
  return (
    <List>
      {data
        ? data.map(item => (
            <Items key={item.id}>
              <Link
                to={`/movies/${item.id}`}
                state={{
                  movie_id: item.id,
                  from: location,
                }}
              >
                <P>{item.title}</P>
              </Link>
            </Items>
          ))
        : name && (
            <li>
              <p>нет такого в поиске</p>
            </li>
          )}
    </List>
  );
}

MovieList.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
};
