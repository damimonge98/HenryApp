import React from "react";
import { AppWrapper } from "./styles";
import routes from "../../routes";

function App() {

  return (
    <AppWrapper>
      {routes()}
    </AppWrapper>
  );
}

export default App;
