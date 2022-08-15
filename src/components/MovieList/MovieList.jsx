import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { P, List, Items } from './MovieList.styled';

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <List>
      {data.map(item => (
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
      ))}
    </List>
  );
}

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
