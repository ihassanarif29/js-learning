var c = 300;
let a = 100;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//console.log(a);
//console.log(b);
//console.log(c);

//====================== Nested Scope =========================

function one() {
  const username = "hassan";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);
  two();
}

//one();

//====================== Hoisting =========================

console.log(addOne(5));
function addOne(number) {
  return number + 1;
}

addTwo(5);
const addTwo = function (number) {
  return number + 2;
};
