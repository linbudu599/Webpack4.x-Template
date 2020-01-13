import testFunc from "./ES6";
import "../styles/style.css";
import "../styles/less.less";

import Vue from "vue";
import Router from "vue-router";
import router from "../router";
import App from "../App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import add from "../ts/app.ts";

import _ from "lodash";
import shimm_func from "./shimming";

shimm_func();

const subPageA = import(/* webpackChunkName: 'subPageA'*/ "./chunkA").then(
    function(subPageA) {
        console.log(subPageA);
    }
);

const subPageB = import(/* webpackChunkName: 'subPageB'*/ "./chunkB").then(
    function(subPageB) {
        console.log(subPageB);
    }
);

console.log(process.env.NODE_ENV);

console.log(PRODUCTION, process.env.NODE_ENV);

console.log("dotenv挂载进入的变量: " + process.env.USERNAMEBUDU);
console.log(process.env.FILENAME);

function demo() {
    console.log("First Bundle Success!");
}
demo();

testFunc();

add({ base: 5, increment: 15, results: "test" });

Vue.use(Router);

new Vue({
    el: "#root",
    router,
    render: h => h(App)
});
