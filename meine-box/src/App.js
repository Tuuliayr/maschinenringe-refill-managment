import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import Main from "./components/pages/Main";
import "./Styles.scss";

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      <Main />
    </div>
  ) : (
    <Authentication />
  );
}

export default App;
