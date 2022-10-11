/**
 * Set up React Query, including creating a query client
 * and providing it in the App component.
 *
 * Write your query in the APIStatus component and have it
 * query an API with the
 * url `https://ui.dev/api/courses/react-query/status`
 *
 * Make sure you handle the loading state. You'll know its
 * working when you see `{status: "ok"}` on the page.
 */

import React, { useState } from "react";
import { useQuery } from "react-query";

function fetchStatus() {
  return fetch("https://ui.dev/api/courses/react-query/status")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

function APIStatus() {
  const [count, setCount] = useState(1);
  const query = useQuery([count], fetchStatus);

  const increaseCount = () => setCount((count) => count + 1);

  let content = <></>;

  /** 
   * Those could also be used, instead of comparing status:
   * - query.isLoading
   * - query.isError
   * - query.isSuccess
  */ 

  switch (query.status) {
    case "loading":
      content = <div>Loading...</div>;
      break;
    case "error":
      content = <div>Error loading status!</div>;
      break;
    case "idle":
      content = <div>Idling...</div>;
      break;
    default:
      const data = query.data;
      content = <pre>{JSON.stringify(data, null, "\t")}</pre>;
      break;
  }

  return (
    <div className="user-content">
      <b>Practice - Status Request Nr. {count}</b>
      <div>
        <button onClick={increaseCount}>Check again</button>
      </div>
      {content}
    </div>
  );
}

export { APIStatus };
