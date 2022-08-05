import { Nav, LinkHref } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <LinkHref to={'/'}>Home</LinkHref>
      <LinkHref to={'/movies'}>Movies</LinkHref>
    </Nav>
  );
}
