import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled(Field)`
  min-width: 300px;
  padding: 5px;
  margin-right: 20px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-style: italic;
`;
export const Btn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
`;
