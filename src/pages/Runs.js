import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Histogram from "../components/Histogram";

const Runs = () => {
  return (
    <>
      <h1>Runs</h1>
      <hr />
      <Histogram {...state} />
      <AmplifySignOut
        style={{ position: "absolute", top: 0, right: "5rem", width: "5rem" }}
      />
    </>
  );
};

const state = {
  height: 200,
  width: 500,
  data: [12, 5, 6, 6, 9, 10],
  id: "root",
};

export default withAuthenticator(Runs);
