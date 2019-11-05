import { testFunc } from "./ohter";
import "../styles/style.css";
import "../styles/less.less";
import Vue from "vue";
import App from "../App.vue";

function demo() {
  console.log("First Bundle Success!");
  let babelTest = "Babel Succeed!";
  console.log(babelTest);
}
demo();
testFunc();
new Vue({
  el: "#root",
  render: h => h(App)
});
