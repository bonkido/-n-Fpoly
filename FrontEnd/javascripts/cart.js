var cartItems = [];
var cartIcon = document.getElementById('cartIcon');
var cartCount = 0;

// Lấy tất cả các phần tử có lớp "add-to-cart"
function addToCart() {
    var addToCartElements = document.querySelectorAll('.add-to-cart');

    addToCartElements.forEach(function(element, index) {
        element.onclick = function(event) {
            event.preventDefault();

            var productItem = event.target.closest('.product-item');
            var productName = productItem.querySelector('.name h3').innerText;
            var productImage1 = productItem.querySelector('.img img').getAttribute('src');
            var productPrice = productItem.querySelector('.price p').innerText;

            if (isProductInCart(productName)) {
                alert('Sản phẩm đã tồn tại trong giỏ hàng');
                return false;
            }

            addSp(productName, productImage1, productPrice);
            updateCartCount();
            // console.log('Thêm sản phẩm thành công');
        }
    });
}

function isProductInCart(productName) {
    return cartItems.includes(productName);
}

function addSp(productName, productImage1, productPrice) {
    var table = document.querySelector('tbody');
    var addtr = document.createElement('tr');

    addtr.innerHTML = `
        <td>
            <div class="popup-img">
                <img src="${productImage1}" alt="">
            </div>
        </td>
        <td>
            <div class="popup-name">
                <span class="nameProductCart">${productName}</span>
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

    table.append(addtr);
    deleteSp();
    TongCart();

    var quantityInput = addtr.querySelector('.popup-quality input');
    quantityInput.addEventListener('input', function() {
        TongCart();
    });
}

function deleteSp() {
    var deleteButtons = document.querySelectorAll('.popup-delete');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            var row = event.target.closest('tr');
            row.remove();

            var productName = row.querySelector('.popup-name span').innerText;
            removeProductFromCart(productName);

            updateCartCount();
            TongCart();
        });
    });
}

function removeProductFromCart(productName) {
    var index = cartItems.indexOf(productName);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
}

function updateCartCount() {
    cartCount = cartItems.length;
    cartIcon.innerText = cartCount;
}

function TongCart() {
    var tableTongTien = document.querySelectorAll('#popup-table tbody tr');
    var total = 0;

    tableTongTien.forEach(function(row) {
        var priceItem = row.querySelector('.popup-price span').innerText;
        var quantity = row.querySelector('.popup-quality span input').value;
        priceItem = priceItem.replace(/\s+/g, '');
        total += parseInt(priceItem) * parseInt(quantity);
    });

    var formattedTotal = total.toLocaleString('vi-VN');
    document.querySelector('#tongTien').innerText = formattedTotal + '.000';
}

// Gọi hàm addToCart() để thêm sự kiện click cho các nút "add-to-cart"
addToCart();