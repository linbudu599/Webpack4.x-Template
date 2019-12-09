import { testFunc } from "./ohter";
import "../styles/style.css";
import "../styles/less.less";
import Vue from "vue";
import App from "../App.vue";
import { foo } from "../ts/app.ts";

function demo() {
  console.log("First Bundle Success!");
  let babelTest = "Babel Succeed!";
  console.log(babelTest);
}
demo();
testFunc();
foo();
new Vue({
  el: "#root",
  render: h => h(App)
});
