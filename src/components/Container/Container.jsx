import { Contain } from './Container.styled';
// import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Contain>{children}</Contain>;
}

// Container.propTypes = {
//   children: PropTypes.object.isRequired,
// };
