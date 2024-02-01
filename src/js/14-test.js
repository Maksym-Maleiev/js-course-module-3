function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object).hasOwnProperty(object);

  if (object.hasOwnProperty(keys)) {
    propCount += 1;
  }

  return propCount;
  // Change code above this line
}

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
