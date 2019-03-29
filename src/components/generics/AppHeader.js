import React, { memo } from 'react';
import PropTypes from "prop-types";

function AppHeader(
  {
    title
  }
) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(AppHeader);
