import { CastContainer, NavLink } from './Cast&ReviewContainer.styler';

const castReview = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

export default function CastReviewContainer() {
  return (
    <CastContainer>
      {castReview.map(({ href, text }) => (
        <NavLink key={href} to={href}>
          {text}
        </NavLink>
      ))}
    </CastContainer>
  );
}
