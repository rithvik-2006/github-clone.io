// RepositoryCard.js

import React from 'react';
import PropTypes from 'prop-types';

const RepositoryCard = ({ name, description }) => {
  return (
    <div className="repository-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

RepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RepositoryCard;
