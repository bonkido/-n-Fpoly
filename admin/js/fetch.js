fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Products)) {
      data.Products.forEach(products => {
        // Hiển thị thông tin comment trong trang admin
        var tr = document.createElement('tr');

        tr.innerHTML = `
        <tr>
            <td width="10"><input type="checkbox" name="check1" value="1"></td>
            <td class="productId">${products.id}</td>
            <td>${products.name}</td>
            <td><img src="/image/${products.image1}" alt="" width="100px"; height="100px";></td>
            <td>${products.quantity}</td>
            <td><span class="${products.quantity == 0 ? 'badge bg-danger' : 'badge bg-success'}">${products.quantity > 0 ? "Còn hàng" : "Hết hàng"}</span></td>
            <td>${products.price} đ</td>
            <td>${products.material}</td>
            <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
            onclick="deleteRow(this.parentNode.parentNode)"><i class="fas fa-trash-alt"></i> 
                </button>
                <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
    data-target="#ModalUP"><i class="fas fa-edit"></i></button>
            </td>
        </tr>
        `;
         // Hiển thị thông tin sản phẩm trong bảng
         var tableBody = document.querySelector('#sampleTable tbody');
         tableBody.appendChild(tr);

      });
    
  // Lấy tất cả các phần tử có class là 'edit'
  var editButtons = document.getElementsByClassName('edit');

  function getProductById(products, id) {
    return products.find(function(product) {
      return product.id === id;
    });
  }

  // Gán sự kiện click cho tất cả các phần tử
  Array.from(editButtons).forEach(function (editButton) {
    editButton.addEventListener('click', function (event) {
      event.preventDefault();

      // In ra giá trị ID của sản phẩm
      var tr = this.closest('tr');
      var tidElement = tr.querySelector('.productId');
      var idfix = tidElement.innerText;
      
      // Tìm sản phẩm dựa trên ID
      var product = getProductById(data.Products, idfix);
     
      if (product) {
        // Cập nhật các trường trong form với thông tin sản phẩm đã tìm thấy
        var productIdInput = document.getElementById('productsId');
        var productNameInput = document.getElementById('productsName');
        var productQuantityInput = document.getElementById('productQuantity');
        var productPriceInput = document.getElementById('productPrice');
        var productMaterialInput = document.getElementById('productMaterial');

        // Cập nhật giá trị của các trường
        productIdInput.value = product.id;
        productNameInput.value = product.name;
        productQuantityInput.value = product.quantity;
        productPriceInput.value = product.price;
        productMaterialInput.value = product.material;
      } else {
        alert('Không tìm thấy sản phẩm với ID:', idfix);
      }

    });
  });

  // Sự kiện khi lưu lại sau khi cập nhật
var saveButton = document.getElementById('saveFixProducts');
saveButton.addEventListener('click', function() {

  // Lấy giá trị từ các trường nhập liệu trong biểu mẫu
  var productIdInput = document.getElementById('productsId');
  var productNameInput = document.getElementById('productsName');
  var productQuantityInput = document.getElementById('productQuantity');
  var productPriceInput = document.getElementById('productPrice');
  var productMaterialInput = document.getElementById('productMaterial');

  // Lấy giá trị ID sản phẩm
  var productId = productIdInput.value;

  // Tìm sản phẩm trong mảng dữ liệu
  var productToUpdate = getProductById(data.Products, productId);

  if (productToUpdate) {
    // Cập nhật thông tin sản phẩm
    productToUpdate.id = productId;
    productToUpdate.name = productNameInput.value;
    productToUpdate.quantity = productQuantityInput.value;
    productToUpdate.price = productPriceInput.value;
    productToUpdate.material = productMaterialInput.value;

    // Gửi yêu cầu PUT để cập nhật dữ liệu trong db.json
    fetch(`http://localhost:3000/Products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productToUpdate)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Dữ liệu đã được cập nhật trong db.json:', result);
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật dữ liệu:', error);
      });
  } else {
    alert('Không tìm thấy sản phẩm với ID: ' + productId);
  }
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