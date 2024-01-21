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

