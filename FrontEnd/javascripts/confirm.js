var tieptheo = document.getElementById("confirmPopup");

tieptheo.addEventListener("click", e => {
    var nameCart = document.getElementById('nameCart').value;
    var phoneCart = document.getElementById('phoneCart').value;
    var emailCart = document.getElementById('emailCart').value;
    var adressCart = document.getElementById('adressCart').value;

    var changeName = document.querySelector('.changeNameConfirm');
    var changePhone = document.querySelector('.changePhoneConfirm');
    var changeEmail = document.querySelector('.changeEmailConfirm');
    var changeAdr = document.querySelector('.changeAdrConfirm');

    changeName.innerHTML = nameCart;
    changePhone.innerHTML = phoneCart;
    changeEmail.innerHTML = emailCart;
    changeAdr.innerHTML = adressCart;

    var nameProductCartElements = document.querySelectorAll('.nameProductCart').textContent;
    var quantityCart = document.querySelectorAll('#quantity-cart').value;
    var totalCart = document.querySelectorAll('.tongTien').textContent;
    var activeCart = "Chờ duyệt";
    var noteCart = document.querySelector('#noteCart').textContent;
    var voucherCart = document.querySelector('#maGiamGia').textContent;

    console.log(quantityCart);
    
    var productNames = "";
    nameProductCartElements.forEach((element, index) => {
        productNames += element;
        if (index < nameProductCartElements.length - 1) {
            productNames += ", "; // Thêm dấu phẩy nếu không phải là phần tử cuối cùng
        }
    });

    var totalQuantity = 0;
    quantityCart.forEach(element => {
        var quantity = parseInt(element.textContent);
        if (!isNaN(quantity)) {
            totalQuantity += quantity;
        }
    });
    
    console.log('Tổng số lượng:', totalQuantity);

    console.log(productNames);
});


//thời gian giảm dần 
var thoigianbandau = 20;
var time = thoigianbandau * 60;
var coutnDown = document.getElementById('coutnDown');

setInterval(thoigian,1000)

function thoigian(){
    const p = Math.floor(time/60);
    const s = time % 60;
    coutnDown.innerHTML = p + ':' + s;
    time --;
}

// comment product
document.getElementById('sendButton').addEventListener('click', () => {
    var danhgia = document.getElementById('messageInput').value;
    var showComment = document.getElementById("showComment");
    
    var commentItem = document.createElement("div");
    commentItem.classList.add("left-item-showcomment");

    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleString();

    commentItem.innerHTML = `
        <div class="left-item-showcomment">
        <div class="showcomment">
            <div class="anhvaten3cham">
            <div class="anhvaten">
                <img src="./image/avatar.jpg" alt="avatr ảnh đại diện bình luận" width="50px" height="50px" style="border-radius: 50%;">
                <div class="text">
                <span style="font-weight: bold;font-size: 18px;">Nguyễn Thiên Phú</span>
                <p style="font-size: 10px; font-weight: 200;">${formattedDate}</p>
                </div>
            </div>
            <div class="bacham">
                <span>...</span>
                <div class="dropdown-menu">
                <!-- Nội dung của drop-down menu -->
                <a href="#">Sửa</a>
                <a href="#">Xóa</a>
                <a href="#">Ghim</a>
                </div>
            </div>
            </div>
        </div>
        <div class="comment">
            <span id="danhgiaComment">${danhgia}</span>
        </div>
        </div>
    `;

    showComment.appendChild(commentItem);
    });