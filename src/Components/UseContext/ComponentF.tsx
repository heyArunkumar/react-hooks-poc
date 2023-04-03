import React from "react";
import { EmailContext, UserContext } from "../../App";

function ComponentF() {
  console.log("UserContext", UserContext);
  return (
    <div>
      <h2 style={{marginTop:'16px'}}>UseContext Example :</h2>
      <UserContext.Consumer>
        {(user) => {
          return (
            <EmailContext.Consumer>
              {(email) => {
                return (
                  <div>
                    <p>User Name : {user}</p>
                    <p>User Email : {email}</p>
                  </div>
                );
              }}
            </EmailContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
