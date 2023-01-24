let container = document.querySelector('.container');

let row = document.createElement('div');
row.setAttribute('class', 'row');

container.appendChild(row);

let column = document.createElement('div');
column.setAttribute('class', 'col-12 col-md-6');

let img = document.createElement('img');
img.setAttribute('src', './potrait.jpg');

column.appendChild(img);

row.appendChild(column);
row.appendChild(column);
