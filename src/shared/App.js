import React from "react"; 

import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Footer, Header } from "../components";
import { ProductList,Wait,Login,Signup,Event,Cart } from "../pages";
import '../scss/main.scss';
import { Grid } from "../elements";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <ConnectedRouter history={history}>
        <Grid width="1050px" margin="0px auto">
          <Route path="/" exact component={ProductList} />
          <Route path="/new" exact component={Wait} />
          <Route path="/cheap" exact component={Wait} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/event" exact component={Event} />
          <Route path="/cart" exact component={Cart} />
        </Grid>
      </ConnectedRouter>
      <Footer />
   </React.Fragment>
  );
}

export default App;
