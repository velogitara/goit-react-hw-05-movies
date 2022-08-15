import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CastContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 80px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 15px;
  border-top: 1px solid #2a363b;

  border-bottom: 1px solid #2a363b;
`;

export const NavLink = styled(Link)`
  margin-left: 5px;
`;
