fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Orders)) {
      data.Orders.forEach(orders => {
        // Hiển thị thông tin comment trong trang admin
        var tr = document.createElement('tr');

        tr.innerHTML = `
        <tr>
                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                    <td>${orders.id}</td>
                    <td>${orders.name}</td>
                    <td>${orders.order}</td>
                    <td>${orders.quantity}</td>
                    <td>${orders.total} đ</td>
                    <td><span class="${orders.active === 'Đang giao hàng' ? 'badge bg-warning' : (orders.active === 'Chờ duyệt' ? 'badge bg-info' : (orders.active === 'Đã hoàn thành' ? 'badge bg-success' :  (orders.active === 'Đã hủy' ? 'badge bg-danger':'')))}">${orders.active}</span></td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i> </button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button>
                    </td>
                  </tr>
        `;
         // Hiển thị thông tin sản phẩm trong bảng
         var tableBody = document.querySelector('#sampleTable tbody');
         tableBody.appendChild(tr);

      });
  } else {
    console.error('Dữ liệu Comments không phải là một mảng.');
  }
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Lỗi:', error);
  });

//   console.log('tui bon kido')