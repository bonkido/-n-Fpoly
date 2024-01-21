
// Lấy tất cả các phần tử có lớp "add-to-cart"
var addToCartElements = document.querySelectorAll('.add-to-cart');

console.log(addToCartElements);
// Lặp qua từng phần tử "add-to-cart" và gắn sự kiện click
addToCartElements.forEach(function(element,index) {
    console.log(element,index)

  element.addEventListener('click', function(event) {
    event.preventDefault(); 
    var productItem = event.target.closest('.product-item');

    var productName = productItem.querySelector('.name h3').innerText;
    var productImage1 = productItem.querySelector('.img img').getAttribute('src');
    var productPrice = productItem.querySelector('.price p').innerText;

  addSp(productName,productImage1,productPrice);

  console.log('thêm sản phẩm thành công');
  });
});

function addSp(productName,productImage1,productPrice){
    var table = document.querySelector('tbody');
  
    var addtr = document.createElement('tr');

    addtr.innerHTML =`
            <td>
                <div class="popup-img">
                    <img src="./${productImage1}" alt="">
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
                    <span>1</span>
                </div>
            </td>
            <td>
                <div class="popup-delete">
                    <i class="fa-solid fa-xmark" style="color: red;"></i>
                </div>
            </td>
    `;

    table.append(addtr);
}

document.querySelector('#popup-table').addEventListener('click', (e)=>{
    if(e.target.className == 'popup-delete'){
        e.target.parentElement.remove();
    }
})