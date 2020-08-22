import React from "react";
import { Route, Redirect } from "react-router-dom";

import { decodeRole } from "./decodeRoleJWT";

export const OnlyAdminRoute = ({ component: Component, user, ...rest }) => {
  let checkJWT = decodeRole(user);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          checkJWT ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    </div>
  );
};
