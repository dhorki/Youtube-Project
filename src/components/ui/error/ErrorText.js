import React from 'react';
import PropTypes from 'prop-types';
import { lazyRemoveHtmlTags } from '../../../helpers/decodeHtml';

export const ErrorText = ({ error }) => {
  const errorMessage = lazyRemoveHtmlTags(error?.message);

  return <p className="animate__animated animate__fadeIn">Error: {errorMessage}</p>;
};

ErrorText.propTypes = {
  error: PropTypes.object.isRequired,
};
