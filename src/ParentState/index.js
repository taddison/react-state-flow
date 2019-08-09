import React, { useState, useEffect } from "react";
import HeadlineMetrics from "./HeadlineMetrics";
import PostChart from "./PostChart";
import MinUserFilter from "./MinUserFilter";

const ParentState = () => {
  const [data, setData] = useState({ users: [], posts: [] });
  const [userFilter, setUserFilter] = useState({ minUserId: 1 });

  const loadData = async () => {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const users = await userResponse.json();
    const posts = await postResponse.json();

    /* Add a bit of randomness */
    const randomPosts = posts.filter(p => Math.random() < 0.8);

    setData({
      users: users,
      posts: randomPosts
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const users = data.users.filter(u => u.id >= userFilter.minUserId);
  const posts = data.posts.filter(p => p.userId >= userFilter.minUserId);

  const setMinUserId = (minUserId) => {
    setUserFilter({
      ...userFilter,
      minUserId
    });
  }

  return (
    <React.Fragment>
      <main>
        <div>
          Parent Component, total users: {data.users.length}, total posts:{" "}
          {data.posts.length}.
        </div>
      </main>
      <section>
        <div>Filters</div>
        <MinUserFilter setMinUserId={setMinUserId} minUserId={userFilter.minUserId} />
      </section>
      <section>
        <HeadlineMetrics users={users} posts={posts} />
      </section>
      <section>
        <PostChart posts={posts} />
      </section>
    </React.Fragment>
  );
};

export default ParentState;
