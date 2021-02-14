import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const Runs = () => {
  return (
    <>
      <h1>Runs</h1>
      <hr />
      <AmplifySignOut />
    </>
  );
};

export default withAuthenticator(Runs);
