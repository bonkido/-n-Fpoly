# -Đồ án - Fpoly - 

1. Cài đặt nodeJs và jsonServer

npm install -g json-server

=> để khởi chạy cd vào thư mục backend lấy ra dữ liệu vào terminal gõ npm run bon kiểm tra script tại package.json

2. Tải Angular 

npm install -g @angular/cli

=> Tạo dự án : ng new TenDuAn --defaults

=> Chạy dự án : ng serve --o


TẠO COMPONENT
=> ng generate component  tencomponent ( ng g c tencomponent)

3. Cài Nodejs

a. chạy npm init chấp nhập hết tất cả thông số 

b. Chạy lệnh cài module express: npm install express

c. tạo file mới tenduan.js

const exp = require("express"); const app = exp(); 
const port = 4000; app.get("/", (req, res) => { res.send("<h1>Đây là trang home</h1>"); 
}); 
app.listen(port, () =>{ 
console.log(`Ung dung dang chay voi port ${port}`); 
});

=> chạy dự án = node tenduan.js
