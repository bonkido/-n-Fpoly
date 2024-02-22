fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Products)) {
      document.querySelector('.btn-save').addEventListener('click', () => {
        var addMasp = document.getElementById('addMasp').value;
        var addName = document.querySelector('.addName').value;
        var addQuantity = document.querySelector('.addQuantity').value;
        var addActive = document.querySelector('.addActive').value;
        var addMaterial = document.querySelector('.addMaterial').value;
        var addPrice = document.querySelector('.addPrice').value;
       
        var motaTextarea = CKEDITOR.instances.mota;
        var motaContent = motaTextarea.getData();

         // Kiểm tra xem các trường cần thiết có được điền đầy đủ hay không
         if (!addMasp || !addName || !addQuantity || !addActive || !addMaterial || !addPrice || !motaContent) {
          alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
          return;
        }

        // Kiểm tra xem sản phẩm có id hoặc tên trùng với các sản phẩm khác không
        var isDuplicate = data.Products.some(product => product.id === addMasp || product.name === addName);
        if (isDuplicate) {
          alert('Id hoặc tên sản phẩm đã tồn tại.');
          return;
        }
        
        // Tạo đối tượng mới chứa thông tin sản phẩm
        var newProduct = {
          id: addMasp,
          name: addName,
          quantity: addQuantity,
          active: addActive,
          material: addMaterial,
          price: addPrice,
          mota: motaContent
        };

        // Gửi yêu cầu POST để lưu mới sản phẩm vào db.json
        fetch('http://localhost:3000/Products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(result => {
          console.log('Dữ liệu đã được lưu vào db.json:', result);
        })
        .catch(error => {
          console.error('Lỗi khi gửi yêu cầu lưu dữ liệu:', error);
        });
      });
    } else {
      console.error('Dữ liệu Products không phải là một mảng.');
    }
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Lỗi:', error);
  });