import testFunc from "./ES6";
import "../styles/style.css";
import "../styles/less.less";

import Vue from "vue";
import Router from "vue-router";
import router from "../router";
import App from "../App.vue";

import add from "../ts/app.ts";

import(/* webpackChunkName: 'subPageA'*/ "./chunkA").then(function(subPageA) {
    console.log(subPageA);
    console.log(subPageA.default);
});

import(/* webpackChunkName: 'subPageB'*/ "./chunkB").then(function(subPageB) {
    console.log(subPageB);
});

import(/* webpackPrefetch: true */ "./pre").then((pre)=>{
    console.log(pre);
})

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
