import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { FormContainer, Btn, Input, ErrorMsg } from './SearchBar.styled';
// import PropTypes from 'prop-types';

import * as yup from 'yup';

let schema = yup.object().shape({
  query: yup.string().lowercase().trim().required(),
});

const SearchQuery = ({ getSearchQueryBar }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getQ = searchParams.get('query');
  const initialValues = {
    query: getQ || '',
  };

  const handleSubmit = (values, actions) => {
    // actions.resetForm();
    // console.log(values);
    // getSearchQueryBar(values.query);

    setSearchParams({ query: values.query.toLowerCase().trim() });
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

// SearchQuery.propTypes = {
//   getSearchQueryBar: PropTypes.func.isRequired,
// };
