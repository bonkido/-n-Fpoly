fetch('/db.json')
.then(response => response.json())
.then(data => {
  if (Array.isArray(data.Orders)) {

  // tính tổng khách hàng
  const totalOrders = data.Orders.length;
  document.getElementById('totalCustomers').innerHTML = totalOrders + ' khách hàng';

  // khách hàng mới
  for (let i = 0; i < data.Orders.length; i++) {
    var tr = document.createElement('tr');

    tr.innerHTML = `
    <tr>
       <td>${data.Orders[i].id}</td>
       <td>${data.Orders[i].name}</td>
       <td>${data.Orders[i].birthday}</td>
       <td>${data.Orders[i].phone}</span></td>
   </tr>
    `;
     // Hiển thị thông tin sản phẩm trong bảng
     var tableBody = document.querySelector('#sampleTable2 tbody');
     tableBody.appendChild(tr);
  }
  // End tính tổng khách hàng

  // tính tổng sản phẩm
   if(Array.isArray(data.Products)) {
     const totalProducts = data.Products.length;
     document.getElementById('totalProduct').innerHTML = totalProducts + ' sản phẩm';

    // Tính hết hàng sản phẩm
    const stockProducts = data.Products.filter(product => product.quantity === 0);
    document.getElementById('totalStocks').innerHTML = stockProducts.length + ' Sản phẩm';
    }
    // End tính tổng sản phẩm

    // tính tổng đơn hàng
   if(Array.isArray(data.Orders)){
    for (let i = 0; i < data.Orders.length; i++) {
    const totalOrders = data.Orders.length;
    document.getElementById('totalOrder').innerHTML = totalOrders + ' đơn hàng';

     // Hiển thị thông tin comment trong trang admin
     var tr = document.createElement('tr');

     tr.innerHTML = `
     <tr>
        <td>${data.Orders[i].id}</td>
        <td>${data.Orders[i].name}</td>
        <td>${data.Orders[i].total} đ</td>
        <td><span class="badge ${data.Orders[i].active === 'Đang giao hàng' ? 'bg-warning' : (data.Orders[i].active === 'Chờ duyệt' ? 'bg-info' : (data.Orders[i].active === 'Đã hoàn thành' ? 'bg-success' :  (data.Orders[i].active === 'Đã hủy' ? 'bg-danger' : '')))}">${data.Orders[i].active}</span></td>
    </tr>
     `;
      // Hiển thị thông tin sản phẩm trong bảng
      var tableBody = document.querySelector('#sampleTable tbody');
      tableBody.appendChild(tr);
    }
   }
    // End tính tổng đơn hàng

  } else {
    console.error('Dữ liệu Products không phải là một mảng.');
  }
   // END Tính tổng số đơn hàng

})
.catch(error => {
  // Xử lý lỗi nếu có
  console.error('Lỗi:', error);
});