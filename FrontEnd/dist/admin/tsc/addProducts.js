"use strict";
fetch('http://localhost:3000/product/id')
    .then(response => response.json())
    .then((data) => {
    var _a;
    if (Array.isArray(data)) {
        (_a = document.querySelector('.btn-save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a, _b, _c, _d;
            const addNameInput = document.querySelector('.addName');
            const addQuantityInput = document.querySelector('.addQuantity');
            const addMaterialInput = document.querySelector('.addMaterial');
            const addPriceInput = document.querySelector('.addPrice');
            const fileName1Input = document.querySelector('#fileName1');
            const fileName2Input = document.querySelector('#fileName2');
            // Kiểm tra xem có giá trị null/undefined không trước khi sử dụng
            const addName = addNameInput ? addNameInput.value : '';
            const addQuantity = addQuantityInput ? addQuantityInput.value : '';
            const addMaterial = addMaterialInput ? addMaterialInput.value : '';
            const addPrice = addPriceInput ? addPriceInput.value : '';
            const fileName1 = fileName1Input && fileName1Input.files ? fileName1Input.files[0].name : '';
            const fileName2 = fileName2Input && fileName2Input.files ? fileName2Input.files[0].name : '';
            const motaTextarea = CKEDITOR.instances.mota;
            const motaContent = motaTextarea.getData().replace(/<[^>]+>/g, '');
            // Kiểm tra up ảnh qua multer
            const avatarInput = document.querySelector('input[name="avatar"]');
            const avatarInput1 = document.querySelector('input[name="avatar1"]');
            if (!avatarInput || !avatarInput1) {
                console.error('Không tìm thấy input avatar.');
                return;
            }
            // Gửi yêu cầu POST đến '/store' để đẩy ảnh lên máy chủ
            const formData = new FormData();
            if (avatarInput && avatarInput.files && avatarInput.files[0]) {
                formData.append('avatar', avatarInput.files[0]);
            }
            if (avatarInput1 && avatarInput1.files && avatarInput1.files[0]) {
                formData.append('avatar1', avatarInput1.files[0]);
            }
            formData.append('avatar', (_b = (_a = avatarInput.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ''); // hoặc null thay cho ''
            formData.append('avatar1', (_d = (_c = avatarInput.files) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : ''); // hoặc null thay cho ''
            // formData.append('avatar1', avatarInput1.files ? avatarInput1.files[0] : null);
            formData.append('name', addName); // Thêm các trường thông tin vào formData
            formData.append('image1', fileName1);
            formData.append('image2', fileName2);
            formData.append('price', addPrice);
            formData.append('material', addMaterial);
            formData.append('quantity', addQuantity);
            formData.append('title', motaContent);
            // Kiểm tra xem các trường cần thiết có được điền đầy đủ hay không
            if (!addName || !addQuantity || !addMaterial || !addPrice || !fileName1) {
                alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
                return;
            }
            // Kiểm tra xem sản phẩm có id hoặc tên trùng với các sản phẩm khác không
            const isDuplicate = data.some(product => product.name === addName);
            if (isDuplicate) {
                alert('Tên sản phẩm đã tồn tại.');
                return;
            }
            // Gửi yêu cầu POST để lưu mới sản phẩm 
            fetch('http://localhost:3000/product/store', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                if (response.ok) {
                    window.location.href = 'table-data-product.html'; // Thay đổi URL để chuyển về trang index
                }
                else {
                    throw new Error('Lỗi khi gửi yêu cầu lưu dữ liệu.');
                }
            })
                .catch(error => {
                console.error('Lỗi khi gửi yêu cầu lưu dữ liệu:', error);
            });
        });
    }
    else {
        console.error('Dữ liệu Products không phải là một mảng.');
    }
})
    .catch(error => {
    console.error('Lỗi:', error);
});
