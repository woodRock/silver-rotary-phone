import React from "react";
import { Authenticator } from "aws-amplify-react";

const SignIn = () => {
  return (
    <>
      <Authenticator>
        <h1>Sign In Works!</h1>
      </Authenticator>
    </>
  );
};

export default SignIn;
