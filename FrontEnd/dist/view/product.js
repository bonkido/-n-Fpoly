// import { addToCart } from "./cart";
// Khởi tạo XMLHttpRequest
let http = new XMLHttpRequest();
// Thay đổi đường dẫn URL ở đây
let requestUrl = 'http://localhost:3000/product/id';
http.open('GET', requestUrl, true);
http.send();
http.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        // Khởi tạo các biến chứa sản phẩm
        let outputGach = "";
        let outputDa = "";
        let outputHienDai = "";
        let outputDonGian = "";
        let outputAmCung = "";
        let countGach = 0;
        let countDa = 0;
        let countHienDai = 0;
        let countDonGian = 0;
        let countAmCung = 0;
        // Lặp qua các sản phẩm để tạo HTML tương ứng
        for (let item of data) {
            // Kiểm tra và tạo HTML cho các sản phẩm theo điều kiện
            if (item.name.toLowerCase().includes("đá") || item.material.toLowerCase().includes('đá')) {
                // Tạo HTML cho sản phẩm là đá
                if (countDa < 8) {
                    outputDa += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/BackEnd/public/images/${item.image1}" alt="">
                            <img src="/BackEnd/public/images/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a> <i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="add-to-favorites">
                                <a href="#">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                            <div class="add-to-detail">
                                <a onclick="openPopup()" class="popup-chitiet">
                                    <i class="fa-solid fa-circle-info"></i>
                                </a>
                            </div>
                        </div>
                        <div class="price">
                            <p>${item.price}.000 VND</p>
                        </div>
                        <div class="text">
                            <details>
                                <summary>Chi tiết</summary>
                                <p>${item.title}</p>
                            </details>
                        </div>
                    </div>
                    `;
                    countDa++;
                }
            }
            if (item.name.toLowerCase().includes('gạch') || item.material.toLowerCase() === "gạch") {
                // Tạo HTML cho sản phẩm là gạch
                if (countGach < 8) {
                    outputGach += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/BackEnd/public/images/${item.image1}" alt="">
                            <img src="/BackEnd/public/images/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a class="add-to-cart-link" data-name="${item.name}" data-img1="${item.image1}" data-price="${item.price}.000"> <i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="add-to-favorites" id="gioHang">
                                <a href="#">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                            <div class="add-to-detail">
                                <a onclick="openPopup()" class="popup-chitiet">
                                    <i class="fa-solid fa-circle-info"></i>
                                </a>
                            </div>
                        </div>
                        <div class="price">
                            <p>${item.price}.000 VND</p>
                        </div>
                        <div class="text">
                            <details>
                                <summary>Chi tiết</summary>
                                <p>${item.title}</p>
                            </details>
                        </div>
                    </div>
                    `;
                    countGach++;
                }
            }
            if (item.material === "hiện đại") {
                // Tạo HTML cho sản phẩm là hiện đại
                if (countHienDai < 8) {
                    outputHienDai += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/BackEnd/public/images/${item.image1}" alt="">
                            <img src="/BackEnd/public/images/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a href="#"> <i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="add-to-favorites">
                                <a href="#">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                            <div class="add-to-detail">
                                <a onclick="openPopup()" class="popup-chitiet">
                                    <i class="fa-solid fa-circle-info"></i>
                                </a>
                            </div>
                        </div>
                        <div class="price">
                            <p>${item.price}.000 VND</p>
                        </div>
                        <div class="text">
                            <details>
                                <summary>Chi tiết</summary>
                                <p>${item.title}</p>
                            </details>
                        </div>
                    </div>
                    `;
                    countHienDai++;
                }
            }
            else if (item.material === "đơn giản") {
                // Tạo HTML cho sản phẩm là đơn giản
                if (countDonGian < 8) {
                    outputDonGian += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/BackEnd/public/images/${item.image1}" alt="">
                            <img src="/BackEnd/public/images/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a href="#"> <i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="add-to-favorites">
                                <a href="#">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                            <div class="add-to-detail">
                                <a onclick="openPopup()" class="popup-chitiet">
                                    <i class="fa-solid fa-circle-info"></i>
                                </a>
                            </div>
                        </div>
                        <div class="price">
                            <p>${item.price}.000 VND</p>
                        </div>
                        <div class="text">
                            <details>
                                <summary>Chi tiết</summary>
                                <p>${item.title}</p>
                            </details>
                        </div>
                    </div>
                    `;
                    countDonGian++;
                }
            }
            else if (item.material === "ấm cúng") {
                // Tạo HTML cho sản phẩm là ấm cúng
                if (countAmCung < 8) {
                    outputAmCung += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/BackEnd/public/images/${item.image1}" alt="">
                            <img src="/BackEnd/public/images/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a href="#"> <i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="add-to-favorites">
                                <a href="#">
                                    <i class="fa-solid fa-heart"></i>
                                </a>
                            </div>
                            <div class="add-to-detail">
                                <a onclick="openPopup()">
                                    <i class="fa-solid fa-circle-info"></i>
                                </a>
                            </div>
                        </div>
                        <div class="price">
                            <p>${item.price}.000 VND</p>
                        </div>
                        <div class="text">
                            <details>
                                <summary>Chi tiết</summary>
                                <p>${item.title}</p>
                            </details>
                        </div>
                    </div>
                    `;
                    countAmCung++;
                }
            }
        }
        // Gán HTML vào các phần tử tương ứng trong trang web
        const productsContainer = document.querySelector('.products');
        if (productsContainer) {
            productsContainer.innerHTML = outputGach;
        }
        else {
            console.error("Không tìm thấy phần tử có class là 'products'");
        }
        const prdItem1Container = document.querySelector('.prd-item1');
        if (prdItem1Container) {
            prdItem1Container.innerHTML = outputDa;
        }
        else {
            console.error("Không tìm thấy phần tử có class là 'prd-item1'");
        }
        const prdItem4Container = document.querySelector('.prd-item4');
        if (prdItem4Container) {
            prdItem4Container.innerHTML = outputHienDai;
        }
        else {
            console.error("Không tìm thấy phần tử có class là 'prd-item4'");
        }
        const prdItem2Container = document.querySelector('.prd-item2');
        if (prdItem2Container) {
            prdItem2Container.innerHTML = outputDonGian;
        }
        else {
            console.error("Không tìm thấy phần tử có class là 'prd-item2'");
        }
        const prdItem3Container = document.querySelector('.prd-item3');
        if (prdItem3Container) {
            prdItem3Container.innerHTML = outputAmCung;
        }
        else {
            console.error("Không tìm thấy phần tử có class là 'prd-item3'");
        }
    }
    // Gọi hàm addToCart để xử lý sự kiện thêm sản phẩm vào giỏ hàng
    addToCart();
};
