fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Orders)) {
      data.Orders.forEach(orders => {
        // Tạo ID ngẫu nhiên
        var randomId = generateRandomId();

        // Hiển thị thông tin comment trong trang admin
        var tr = document.createElement('tr');

        tr.innerHTML = `
          <tr>
            <td width="10"><input type="checkbox" name="check1" value="1"></td>
            <td>${orders.id}</td>
            <td>${orders.name}</td>
            <td>${orders.adress}</td>
            <td>${orders.birthday}</td>
            <td>${orders.gender}</td>
            <td>${orders.phone}</td>
            <td>${orders.position}</td>
            <td class="table-td-center">
              <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="myFunction(this)">
                <i class="fas fa-trash-alt"></i>
              </button>
              <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                data-toggle="modal" data-target="#ModalUP">
                <i class="fas fa-edit"></i>
              </button>
            </td>
          </tr>
        `;

        // Hiển thị thông tin khách hàng trong bảng
        var tableBody = document.querySelector('#sampleTable tbody');
        tableBody.appendChild(tr);

        // Lưu khách hàng vào db.json
        var neworders = {
          id: randomId,
          name: orders.name,
          adress: orders.adress,
          birthday: orders.birthday,
          gender: orders.gender,
          phone: orders.phone,
          position: orders.position
        };

        fetch('/db.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(neworders)
        })
          .then(response => response.json())
          .then(result => {
            console.log('Khách hàng đã được lưu vào db.json:', result);
          })
          .catch(error => {
            console.error('Lỗi khi lưu khách hàng:', error);
          });
      });
    } else {
      console.error('Dữ liệu orderss không phải là một mảng.');
    }
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Lỗi:', error);
  });
// Hàm tạo ID ngẫu nhiên
function generateRandomId() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var idLength = 8;
  var randomId = '';

  for (var i = 0; i < idLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    randomId += chars[randomIndex];
  }

  return randomId;
}