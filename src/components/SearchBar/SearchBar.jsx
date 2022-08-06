import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { FormContainer, Btn, Input, ErrorMsg } from './SearchBar.styled';

import * as yup from 'yup';

let schema = yup.object().shape({
  query: yup.string().required(),
});

const initialValues = {
  query: '',
};

const SearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
    setSearchParams({ query: values.query });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <label htmlFor="query">
          <Input type="text" name="query" placeholder="Search movie" />
          <ErrorMsg name="query" component="span" />
        </label>

        <Btn type="submit">Search movie</Btn>
      </FormContainer>
    </Formik>
  );
};

export default SearchQuery;
