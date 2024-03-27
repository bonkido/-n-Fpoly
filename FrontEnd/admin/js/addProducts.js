// const { response } = require(".../BackEnd/app");

fetch('http://localhost:3000/product/id')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      document.querySelector('.btn-save').addEventListener('click', () => {
        var addName = document.querySelector('.addName').value;
        var addQuantity = document.querySelector('.addQuantity').value;
        var addMaterial = document.querySelector('.addMaterial').value;
        var addPrice = document.querySelector('.addPrice').value;
        var fileName1 = document.querySelector('#fileName1').files[0].name;
        var fileName2 = document.querySelector('#fileName2').files[0].name;
           
        var motaTextarea = CKEDITOR.instances.mota;
        var motaContent = motaTextarea.getData().replace(/<[^>]+>/g, '');               

        // Kiểm tra xem các trường cần thiết có được điền đầy đủ hay không
        if (!addName) {
          alert('Vui lòng điền tên sản phẩm.');
          return;
        }else  if (!addQuantity) {
          alert('Vui lòng điền số lượng sản phẩm');
          return;
        }else  if (!addMaterial) {
          alert('Vui lòng điền chất liệu sản phẩm');
          return;
        }else  if (!addPrice) {
          alert('Vui lòng điền giá sản phẩm');
          return;
        }else  if (!fileName1) {
          alert('Vui lòng điền 1 ảnh sản phẩm');
          return;
        }
        

        // Kiểm tra xem sản phẩm có id hoặc tên trùng với các sản phẩm khác không
        var isDuplicate = data.some(product => product.name === addName);
        if (isDuplicate) {
          alert('Tên sản phẩm đã tồn tại.');
          return;
        }
        
        // Tạo đối tượng mới chứa thông tin sản phẩm
        var newProduct = {
          name: addName,
          image1: fileName1,
          image2: fileName2,
          price: addPrice,
          material: addMaterial,
          quantity: addQuantity,
          title: motaContent
        };

        // Gửi yêu cầu POST để lưu mới sản phẩm 
        fetch('http://localhost:3000/product/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        })
        .then(response => {
          if (response.ok) {
            window.location.href = 'table-data-product.html'; // Thay đổi URL để chuyển về trang index
          } else {
            throw new Error('Lỗi khi gửi yêu cầu lưu dữ liệu.');
          }
        })
        .catch(error => {
          console.error('Lỗi khi gửi yêu cầu lưu dữ liệu:', error);
          // console.log(response);
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
