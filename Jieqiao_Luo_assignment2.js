//question 1
//part 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const doubleArray = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});
console.log(doubleArray);

//part 2
let newarray = itemsObject.filter((itm) => itm.quantity > 2 && itm.price > 300);
console.log(newarray);

//part 3
let total = itemsObject.reduce((totalValue, currentValue) => {
  return totalValue + currentValue.price * currentValue.quantity;
}, 0);
console.log(total);

//question 2

const string =
  ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

console.log(string.trim().split(/[ -]+/).join(' ').toLocaleLowerCase());

//question 3
const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
];

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
];

var results = [];
for (var i = 0; i < first.length; i++) {
  var found = false;
  for (var j = 0; j < second.length; j++) {
    if (first[i].uuid === second[j].uuid) {
      results.push({
        uuid: first[i].uuid,
        name: first[i].name,
        role: second[j].role,
      });
      found = true;
      break;
    }
  }
  if (found === false) {
    results.push({
      uuid: first[i].uuid,
      name: first[i].name,
      role: null,
    });
  }
}

for (var i = 0; i < second.length; i++) {
  var found = false;
  for (var j = 0; j < first.length; j++) {
    if (second[i].uuid === first[j].uuid) {
      results.push({
        uuid: second[i].uuid,
        name: second[i].name,
        role: first[j].role,
      });
      found = true;
      break;
    }
  }
  if (found === false) {
    results.push({
      uuid: second[i].uuid,
      name: null,
      role: second[i].role,
    });
  }
}

duplicates = [];
for (var i = 0; i < results.length; i++) {
  duplicates[JSON.stringify(results[i])] = results[i];
}

results = [];
for (var key in duplicates) {
  results.push(duplicates[key]);
}

results.sort((a, b) => {
  return a.uuid - b.uuid;
});
results.forEach((e) => {
  console.log(`${e.uuid} ${e.name} ${e.role}`);
});
console.log(results);
