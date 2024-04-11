let cartItems: string[] = [];
let cartIcon = document.getElementById('cartIcon') as HTMLElement;
let cartCount: number = 0;

// Lấy tất cả các phần tử có lớp "add-to-cart"
export function addToCart() {
    let addToCartElements = document.querySelectorAll('.add-to-cart');

    addToCartElements.forEach(function(element) {
        let addToCartElement = element as HTMLElement; // Chuyển đổi phần tử sang HTMLElement
        addToCartElement.onclick = function(event) {
            event.preventDefault();
    
            let productItem = (event.target as HTMLElement)?.closest('.product-item');
            if (!productItem) return; // Kiểm tra nếu productItem là null thì thoát khỏi hàm
    
            let productName = (productItem.querySelector('.name h3') as HTMLElement)?.innerText;
            let productImage1 = (productItem.querySelector('.img img') as HTMLImageElement)?.getAttribute('src');
            let productPrice = (productItem.querySelector('.price p') as HTMLElement)?.innerText;
    
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


function isProductInCart(productName: string | null): boolean {
    return productName ? cartItems.includes(productName) : false;
}

function addSp(productName: string | null, productImage1: string | null, productPrice: string | null) {
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
            quantityInput.addEventListener('input', function() {
                TongCart();
            });
        }
    }
}

function deleteSp() {
    let deleteButtons = document.querySelectorAll('.popup-delete');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            let buttonElement = event.target as Element;
            let row = buttonElement.closest('tr');
            if (row) {
                row.remove();

                let productNameElement = row.querySelector('.popup-name span') as HTMLElement;
                let productName = productNameElement?.innerText ?? '';
                if (productName) {
                    removeProductFromCart(productName);
                }

                updateCartCount();
                TongCart();
            }
        });
    });
}







function removeProductFromCart(productName: string | null) {
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

    tableTongTien.forEach(function(row) {
        let priceItem = (row.querySelector('.popup-price span') as HTMLElement)?.innerText;
        let quantity = (row.querySelector('.popup-quality span input') as HTMLInputElement)?.value;
        if (priceItem && quantity) {
            priceItem = priceItem.replace(/\s+/g, '');
            total += parseInt(priceItem) * parseInt(quantity);
        }
    });

    let formattedTotal = total.toLocaleString('vi-VN');
    let tongTienElement = document.querySelector('#tongTien') as HTMLElement;
    if (tongTienElement) {
        tongTienElement.innerText = formattedTotal + '.000';
    }
}


// Gọi hàm addToCart() để thêm sự kiện click cho các nút "add-to-cart"
addToCart();
