import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p>
      Извините, страница не найдена! Перейдите на{' '}
      <Link to="/">список материалов</Link>
    </p>
  );
};
export default NotFound;
