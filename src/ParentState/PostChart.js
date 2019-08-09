import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  posts: PropTypes.array.isRequired
};

const PostChart = props => {
  const { posts } = props;

  const postsByUser = posts.reduce((acc, cur) => {
      if (acc[cur.userId]) {
        acc[cur.userId]++;
      } else {
        acc[cur.userId] = 1;
      }
      return acc;
    }, {});

  return (
    <pre>
      {Object.keys(postsByUser).map(userId => {
        return (
          <div key={userId}>
            {userId}
            {userId.length === 1 ? " " : ""}: 
            {"#".repeat(postsByUser[userId])}
          </div>
        );
      })}
    </pre>
  );
};

PostChart.propTypes = propTypes;

export default PostChart;
