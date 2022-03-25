// let a = 3;
// let b = 5;

// let c = b;
// b = a;
// a = c;

//a에 담긴 값과 b에 담긴 값을 교환

// console.log(a, b);

//버블 정렬
// console.log([112, 1, 5, 3, 2].sort((a, b) => a - b));

const bubble = (arr) => {
  const result = [...arr];

  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length; i++) {
      let c = result[i + 1];
      if (result[i] > result[i + 1]) {
        result[i + 1] = result[i];
        result[i] = c;
      }
    }
  }
  return result;
};

const arr1 = [43, 23, 74, 8, 567, 35, 1];
console.log(bubble(arr1));

//선택 정렬
const select = (arr) => {
  const result = [...arr];

  for (let j = 0; j < result.length; j++) {
    for (let i = j + 1; i < result.length; i++) {
      let c = result[i];
      if (result[j] > result[i]) {
        result[i] = result[j];
        result[j] = c;
      }
    }
  }
  return result;
};

const arr2 = [43, 23, 74, 8, 567, 35, 1];
console.log(select(arr2));
