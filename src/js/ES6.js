const arrowFunc = argu => {
  argu = "Arrow Function Succeed!";
  console.log(argu);
};

const es6Test = () => {
  let originArr = [1, 2, 3, 1, 2];
  console.log(new Set(originArr));
};

const outsideTestFunc = () => {
  console.log("Other Scripts Here!");
  arrowFunc();
  es6Test();
};
export default outsideTestFunc;
