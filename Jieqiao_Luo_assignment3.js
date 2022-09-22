const tableInfo = {
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      StudentName: 'John',
      Age: 19,
      Phone: '455 - 983 - 0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      StudentName: 'Alex',
      Age: 21,
      Phone: '455 - 983 - 0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      StudentName: 'Josh',
      Age: 22,
      Phone: '455 - 345 - 0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      StudentName: 'Matt',
      Age: 23,
      Phone: '321 - 345 - 0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
};

function generateTable() {
  let html = "<table border = '1|1'>";

  html += '<thead>';
  html += '<tr>';
  for (let i = 0; i < tableInfo.tableHeader.length; i++) {
    html += '<td>' + tableInfo.tableHeader[i] + '</td>';
  }
  html += '</tr>';
  html += '</thead>';

  for (let i = 0; i < tableInfo.tableContent.length; i++) {
    html += '<td>' + tableInfo.tableContent[i].StudentName + '</td>';
    html += '<td>' + tableInfo.tableContent[i].Age + '</td>';
    html += '<td>' + tableInfo.tableContent[i].Phone + '</td>';
    html += '<td>' + tableInfo.tableContent[i].Address + '</td>';
    html += '</tr>';
  }

  document.getElementById('table').innerHTML = html;
}

generateTable();

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

let ol = document.getElementById('first-ol');

let ul = document.getElementById('first-ul');

list.forEach(function (e) {
  let li = document.createElement('li');
  li.innerText = e;
  ul.append(li);
});

list.forEach(function (e) {
  let li = document.createElement('li');
  li.innerText = e;
  ol.append(li);
});

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
];

let option = '';

for (let i = 0; i < dropDownList.length; i++) {
  option +=
    '<option value="' +
    dropDownList[i].value +
    '">' +
    dropDownList[i].value +
    ' </option>';
}

document.getElementById('dropDownList').innerHTML = option;

let b = 12 + '{}' - '{}';
console.log(b);
