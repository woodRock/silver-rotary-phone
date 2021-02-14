import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Histogram from "../components/Histogram";

const Runs = () => {
  return (
    <>
      <h1>Runs</h1>
      <hr />
      <Histogram {...state} />
      <div
        style={{ position: "absolute", top: 0, right: "5rem", width: "5rem" }}
      >
        <AmplifySignOut />
      </div>
    </>
  );
};

const state = {
  h: 300,
  w: 500,
  data: [12, 5, 6, 6, 9, 10],
};

export default withAuthenticator(Runs);
