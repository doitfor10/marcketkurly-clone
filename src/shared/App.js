import React from "react"; 

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { Header } from "../components";
import '../scss/main.scss';
function App() {
  return (
    <React.Fragment>
      <Header/>
     
   </React.Fragment>
  );
}

export default App;
