const arrowFunc = (argu = "Arrow Function Succeed!") => {
    console.log(argu);
};

const es6Test = () => {
    let originArr = [1, 2, 3, 1, 2];
    console.log(new Set(originArr));
};

const outsideTestFunc = argu => {
    console.log("Other Scripts Here!");
    arrowFunc(argu);
    es6Test();
};
export default outsideTestFunc;
