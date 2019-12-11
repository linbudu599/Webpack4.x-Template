import { testFunc } from "./ohter";
import "../styles/style.css";
import "../styles/less.less";
import Vue from "vue";
import App from "../App.vue";
import { foo } from "../ts/app.ts";

console.log(process.env.NODE_ENV);

console.log(PRODUCTION, process.env.NODE_ENV);

console.log("dotenv挂载进入的变量: " + process.env.USERNAMEBUDU);
console.log(process.env.FILENAME);
function demo() {
  console.log("First Bundle Success!");
  let babelTest = "Babel Succeed!";
  console.log(babelTest);
}
demo();
testFunc();
foo({ foo: "来自typescript的友好问候" });

new Vue({
  el: "#root",
  render: h => h(App)
});
