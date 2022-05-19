function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));

      res.push(randomNumber);
    }

    return res;
  }



  function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(i);
    }

    return arr;
  }


  function popTest(arr) {
    const n = arr.length;

    for (let i = 0 ; i < n ; i++) {
      arr.pop();
    }

    return arr;
  }


  function unshiftTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.unshift(i);
    }

    return arr;
  }

  function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0 ; i < n ; i++) {
      arr.shift();
    }

    return arr;
  }

  let n = 100000;

  console.time(`unshiftTest(${n}): `);
  unshiftTest(n);
  console.timeEnd(`unshiftTest(${n}): `);

  console.time(`shiftTest(${n}): `);
  shiftTest(n);
  console.timeEnd(`shiftTest(${n}): `);

  console.time(`pushTest(${n}): `);
  pushTest(n);
  console.timeEnd(`pushTest(${n}): `);


  console.time(`popTest(${n}): `);
  popTest(n);
  console.timeEnd(`popTest(${n}): `);

const ranNum = randomNumberArr(1000000)

console.time(`mapTest`);
ranNum.map((el) => {
    return el * 2
})
console.timeEnd(`mapTest`);


console.time(`filterTest`);
ranNum.filter((el) => {
    el % 2 === 0
})
console.timeEnd(`filterTest`);


console.time(`reduceTest`);
ranNum.reduce((acc, curr) => {
    acc + curr
})
console.timeEnd(`reduceTest`);

console.time(`everyTest`);
ranNum.every((el) => {
    el % 2 === 0
})
console.timeEnd(`everyTest`);
