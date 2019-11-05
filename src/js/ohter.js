function testFunc() {
  console.log("Other Scripts Here!");
  let BabelTest = argu => {
    argu = "Arrow Function Succeed!";
    console.log(argu);
  };
  BabelTest();
  let originArr = [1, 2, 3, 1, 2];
  console.log(new Set(originArr));
}

export { testFunc };
