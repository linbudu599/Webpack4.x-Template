import React from "react";
import Header from "components/Header";
import Img from "../assets/imgs/thomas-tixtaaz-rdwkamJlpiU-unsplash.jpg";
import Loadable from "react-loadable";
import Loading from "components/Loading";
import _ from "lodash";
import "./app.less";

const LoadableComponent = Loadable({
  loader: () => import("components/Header"),
  loading: Loading
});

function App() {
  console.log(PRODUCTION);
  console.log(USERNAMEBUDU);
  console.log(FILENAME);
  const arr = [1, 2, 3];
  console.log(_.cloneDeep(arr));
  return (
    <>
      <Header />
      <LoadableComponent />
      <img src={Img} className="img" alt="img" />
      <p>Hi！</p>
    </>
  );
}

export default App;
