import * as React from "react";
import { APIStatus } from "./APIStatus";
import { GithubUser } from "./GithubUser";

export default function App() {
  return (
    <div className="App">
      <GithubUser username="idschepe" />
      <APIStatus></APIStatus>
    </div>
  );
}
