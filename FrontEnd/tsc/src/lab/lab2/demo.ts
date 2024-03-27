var form:HTMLFormElement = document.createElement('form');

var input1:HTMLInputElement = document.createElement('input');
var input2:HTMLInputElement = document.createElement('input');
var input3:HTMLInputElement = document.createElement('input');
var input4:HTMLInputElement = document.createElement('input');

var label1:HTMLLabelElement = document.createElement('label');
var label2:HTMLLabelElement = document.createElement('label');
var label3:HTMLLabelElement = document.createElement('label');

input1.type = 'text';
input1.className = 'userName';
input1.id = 'userName'; // gắn id cho input
input1.placeholder = 'Vui lòng nhập tên đăng nhập';
label1.textContent = 'Nhập tên đăng nhập';
label1.htmlFor = 'userName'; // Liên kết với input bằng id

input2.type = 'password';
input2.className = 'password';
input2.id = 'password';
label2.textContent = 'Nhập Password';
label2.htmlFor = 'password'; // Liên kết với input bằng id

input3.type = 'email';
input3.className = 'email';
input3.id = 'email';
label3.textContent = 'Nhập Email';
label3.htmlFor = 'email'; // Liên kết với input bằng id

input4.type = 'submit';
input4.value = 'Gửi Ngay';
input4.checked = true;

form.id = 'checkForm';

form.appendChild(label1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(label3);
form.appendChild(input3);
form.appendChild(input4);

// Thêm form vào DOM
const container: HTMLElement | null = document.getElementById('container');
if (container) {
  container.appendChild(form);
}

form.addEventListener('submit', e => {
    e.preventDefault();
   
    var inputs = [input1,input2,input3]

   inputs.forEach(input => {
    if (input.value == '') {
        alert('Vui lòng nhập ' + input.id);
    }
   })
   if(input1.value.length < 6){
    alert('Tên đăng nhập phải có ít nhất 6 ký tự');
   }else if(input2.value.length < 12){
    alert('Mật khẩu phải có ít nhất 12 ký tự');
   }else{
    alert('Đăng nhập thành công');
    location.reload();
   }
})


