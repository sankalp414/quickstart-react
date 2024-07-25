import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const AuthForm = () => {
  const{user,loginWithRedirect} = useAuth0();
  return (
   <>
      <button onClick={((e)=> loginWithRedirect())}>Login with monday</button>
   </>
  );
};

export default AuthForm;
