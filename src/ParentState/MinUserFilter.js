import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
  setMinUserId: PropTypes.func.isRequired,
  minUserId: PropTypes.number.isRequired
};

const MinUserFilter = props => {
  const { setMinUserId, minUserId } = props;
  const [minId, setMinId] = useState(minUserId);

  const handleChange = e => {
    const newMin = parseInt(e.target.value);
    setMinId(newMin);
    setMinUserId(newMin);
  };

  return <input type="number" value={minId} onChange={handleChange} />;
};

MinUserFilter.propTypes = propTypes;

export default MinUserFilter;
