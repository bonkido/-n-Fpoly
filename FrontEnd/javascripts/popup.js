var cartLink = document.getElementById("cartLink");
var cartPopup = document.getElementById("cartPopup");
var closePopup = document.getElementById("closePopup");

cartLink.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.style.display = "flex";
});

closePopup.addEventListener("click", function() {
    cartPopup.style.display = "none";
});

// hiển thị popup chi tiết sản phẩm  
function openPopup() {
    var hienChiTiet = document.getElementById('popup2');
    hienChiTiet.style.display = 'block';
}

function dongPopup() {
    var hienChiTiet = document.getElementById('popup2');
    hienChiTiet.style.display = 'none';
}

// hiển thị popup chi tiết sản phẩm  END 


// hiển thị profile 
function openProfile(){
    var popupProfile = document.getElementById("popupProfile");
    popupProfile.style.display = "block";
}

function closeProfile() {
    var popupProfile = document.getElementById("popupProfile");
    popupProfile.style.display = "none";
}
// end hiển thị profile 

// hiển thị xác nhận thông tin thanh toán
function openConfirm(){
    var popupConfirm = document.querySelector(".confirm");
    popupConfirm.style.display = "block";
}

function closeConfirm() {
    var popupConfirm = document.querySelector(".confirm");
    popupConfirm.style.display = "none";
}
// end  hiển thị xác nhận thông tin thanh toán
