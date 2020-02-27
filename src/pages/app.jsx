import React from "react";
import Header from "components/Header";
import Img from "../assets/imgs/thomas-tixtaaz-rdwkamJlpiU-unsplash.jpg";
import _ from "lodash";
import "./app.less";

function App() {
  console.log(PRODUCTION);
  console.log(USERNAMEBUDU);
  console.log(FILENAME);
  const arr = [1, 2, 3];
  console.log(_.cloneDeep(arr));
  return (
    <>
      <Header />
      <img src={Img} className="img" alt="img" />
      <p>1111</p>
    </>
  );
}

export default App;
