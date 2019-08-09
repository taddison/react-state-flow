import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
};

const HeadlineMetrics = props => {
  const { users, posts } = props;

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <h2>Posts: {posts.length}</h2>
    </div>
  );
};

HeadlineMetrics.propTypes = propTypes;

export default HeadlineMetrics;
