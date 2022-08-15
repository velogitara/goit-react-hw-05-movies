import { CastContainer, NavLink } from './Cast&ReviewContainer.styled.';
import { useLocation } from 'react-router-dom';

const castReview = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

export default function CastReviewContainer() {
  const location = useLocation();

  return (
    <CastContainer>
      {castReview.map(({ href, text }) => (
        <NavLink key={href} to={href} state={location.state}>
          {text}
        </NavLink>
      ))}
    </CastContainer>
  );
}
