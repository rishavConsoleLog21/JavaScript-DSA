// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  makeNest()

  //Solution
  (function () {
    console.log("A cozy nest is ready");
  })();