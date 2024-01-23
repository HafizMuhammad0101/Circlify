import React, { Fragment } from "react";
import "./assets/css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const App = () => {
  return (
    <Fragment>
      {/* <Signup /> */}
      <Login/>
    </Fragment >
  )
}

export default App;