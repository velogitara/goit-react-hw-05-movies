import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const P = styled.p`
  color: #000;
  font-size: larger;

  :hover {
    color: green;
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  margin-left: 20px;
`;

export const Items = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
