var form = document.createElement('form');
var fullbody = document.querySelector('.container');
form.id = 'checkForm';

function createElement(type:string, id:string, placeholder:string, label:string) {
  var input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  
  var inputLabel = document.createElement('label');
  inputLabel.htmlFor = id;
  inputLabel.textContent = label;
  
  // Thêm nhãn vào phần tử input
  form.appendChild(inputLabel);

  return input;
}

var input1 = createElement('text', 'Username', 'Nhập tên đăng nhập', 'Nhập UserName');
var input2 = createElement('password', 'Password', 'Nhập password', 'Nhập Password');
var input3 = createElement('email', 'Email', 'Nhập Email', 'Nhập Email');

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

if (fullbody) {
  fullbody.appendChild(form);
}