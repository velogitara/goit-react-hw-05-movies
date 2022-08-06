import styled from 'styled-components';

export const CastLink = styled.ul`
  display: grid;
  max-width: calc(100vw - 96px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  list-style: none;
  padding: 0;
`;

export const Thumb = styled.div`
  height: 450px;
  padding: 10px;
  box-shadow: 1px 15px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 15px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 15px 11px 0px rgba(0, 0, 0, 0.75);
`;

export const Btn = styled.button`
  margin: auto;
`;
