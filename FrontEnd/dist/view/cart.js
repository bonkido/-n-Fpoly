let cartItems = [];
let cartIcon = document.getElementById('cartIcon');
let cartCount = 0;
// Lấy tất cả các phần tử có lớp "add-to-cart"
export function addToCart() {
    let addToCartElements = document.querySelectorAll('.add-to-cart');
    addToCartElements.forEach(function (element) {
        let addToCartElement = element; // Chuyển đổi phần tử sang HTMLElement
        addToCartElement.onclick = function (event) {
            var _a, _b, _c, _d;
            event.preventDefault();
            let productItem = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('.product-item');
            if (!productItem)
                return; // Kiểm tra nếu productItem là null thì thoát khỏi hàm
            let productName = (_b = productItem.querySelector('.name h3')) === null || _b === void 0 ? void 0 : _b.innerText;
            let productImage1 = (_c = productItem.querySelector('.img img')) === null || _c === void 0 ? void 0 : _c.getAttribute('src');
            let productPrice = (_d = productItem.querySelector('.price p')) === null || _d === void 0 ? void 0 : _d.innerText;
            if (isProductInCart(productName)) {
                alert('Sản phẩm đã tồn tại trong giỏ hàng');
                return false;
            }
            addSp(productName, productImage1, productPrice);
            updateCartCount();
            // console.log('Thêm sản phẩm thành công');
        };
    });
}
function isProductInCart(productName) {
    return productName ? cartItems.includes(productName) : false;
}
function addSp(productName, productImage1, productPrice) {
    let table = document.querySelector('tbody');
    let addtr = document.createElement('tr');
    if (productName && productImage1 && productPrice) {
        addtr.innerHTML = `
            <td>
                <div class="popup-img">
                    <img src="${productImage1}" alt="">
                </div>
            </td>
            <td>
                <div class="popup-name">
                    <span>${productName}</span>
                </div>
            </td>
            <td>
                <div class="popup-price">
                    <span>${productPrice}</span>
                </div>
            </td>
            <td>
                <div class="popup-quality">
                    <span>
                        <input type="text" min="1" value="1" id="quantity-cart">
                    </span>
                </div>
            </td>
            <td>
                <div class="popup-delete">
                    <i class="fa-solid fa-xmark" style="color: red;"></i>
                </div>
            </td>
        `;
        cartItems.push(productName);
        if (table) {
            table.append(addtr);
            deleteSp();
            TongCart();
        }
        let quantityInput = addtr.querySelector('.popup-quality input');
        if (quantityInput) {
            quantityInput.addEventListener('input', function () {
                TongCart();
            });
        }
    }
}
function deleteSp() {
    let deleteButtons = document.querySelectorAll('.popup-delete');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            let buttonElement = event.target;
            let row = buttonElement.closest('tr');
            if (row) {
                row.remove();
                let productNameElement = row.querySelector('.popup-name span');
                let productName = (_a = productNameElement === null || productNameElement === void 0 ? void 0 : productNameElement.innerText) !== null && _a !== void 0 ? _a : '';
                if (productName) {
                    removeProductFromCart(productName);
                }
                updateCartCount();
                TongCart();
            }
        });
    });
}
function removeProductFromCart(productName) {
    if (productName) {
        let index = cartItems.indexOf(productName);
        if (index !== -1) {
            cartItems.splice(index, 1);
        }
    }
}
function updateCartCount() {
    cartCount = cartItems.length;
    if (cartIcon) {
        cartIcon.innerText = cartCount.toString();
    }
}
function TongCart() {
    let tableTongTien = document.querySelectorAll('#popup-table tbody tr');
    let total = 0;
    tableTongTien.forEach(function (row) {
        var _a, _b;
        let priceItem = (_a = row.querySelector('.popup-price span')) === null || _a === void 0 ? void 0 : _a.innerText;
        let quantity = (_b = row.querySelector('.popup-quality span input')) === null || _b === void 0 ? void 0 : _b.value;
        if (priceItem && quantity) {
            priceItem = priceItem.replace(/\s+/g, '');
            total += parseInt(priceItem) * parseInt(quantity);
        }
    });
    let formattedTotal = total.toLocaleString('vi-VN');
    let tongTienElement = document.querySelector('#tongTien');
    if (tongTienElement) {
        tongTienElement.innerText = formattedTotal + '.000';
    }
}
// Gọi hàm addToCart() để thêm sự kiện click cho các nút "add-to-cart"
addToCart();
