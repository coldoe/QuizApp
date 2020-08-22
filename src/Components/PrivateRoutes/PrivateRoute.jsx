import React from "react";
import { Route, Redirect } from "react-router-dom";

import { decode } from "./decodeRoleJWT";

export const PrivateRoute = ({ component: Component, user, ...rest }) => {
  let checkJWT = decode(user);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          checkJWT ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </div>
  );
};
