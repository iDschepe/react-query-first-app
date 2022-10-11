import React from "react";
import { useQuery } from "react-query";

interface User {
    id: string;
}

function fetchUser(username: string): Promise<User> {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch(() => {
      throw Error("Failed to request github user.");
    });
}

function GithubUser({ username }: { username: string }) {
  const userQuery = useQuery<User, Error>([username], () => fetchUser(username));

  if (userQuery.isLoading) {
    return <div>...</div>;
  }
  if (userQuery.isError) {
    return <div>{userQuery.error.message}</div>;
  }

  const data = userQuery.data;
  return (
    <div className="user-content">
      <b>Practice 1 - GitHub User</b>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </div>
  );
}

export { GithubUser };
