import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBBtn } from "mdbreact";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <MDBBtn color="elegant" 
            // type="submit"
            // onClick={() => logout({ returnTo: window.location.origin, })}>
            onClick={() => logout()}>Log Out
        </MDBBtn>;
};

export default LogoutButton;