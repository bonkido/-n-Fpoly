
let http = new XMLHttpRequest();

http.open('GET', 'products.json', true);

http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
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

        for (let item of products) {
            // if (countGach + countGo === 8) {
            //     break;
            // }
           
            if (item.material === "da") {
                if (countDa < 8) {
                    outputDa += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/image/${item.image1}" alt="">
                            <img src="/image/${item.image2}" alt="" id="hover-image">
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
                            <p>${item.price} VND</p>
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
            if(item.material != " "){
                if (countGach < 8) {
                    outputGach += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/image/${item.image1}" alt="">
                            <img src="/image/${item.image2}" alt="" id="hover-image">
                        </div>
                        <div class="add-btn">
                            <div class="add-to-cart">
                                <a class="add-to-cart-link" data-name="${item.name}" data-img1="${item.image1}" data-price="${item.price}"> <i class="fa-solid fa-cart-plus"></i></a>
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
                            <p>${item.price} VND</p>
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
            if(item.material === "hiendai"){
                if (countHienDai < 8) {
                    outputHienDai += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/image/${item.image1}" alt="">
                            <img src="/image/${item.image2}" alt="" id="hover-image">
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
                            <p>${item.price} VND</p>
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
            }else if(item.material === "dongian"){
                if (countDonGian < 8) {
                    outputDonGian += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/image/${item.image1}" alt="">
                            <img src="/image/${item.image2}" alt="" id="hover-image">
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
                            <p>${item.price} VND</p>
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
            }else if(item.material === "amcung"){
                if (countAmCung < 8) {
                    outputAmCung += `
                    <div class="product-item">
                        <div class="name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="img">
                            <img src="/image/${item.image1}" alt="">
                            <img src="/image/${item.image2}" alt="" id="hover-image">
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
                            <p>${item.price} VND</p>
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

        document.querySelector('.products').innerHTML = outputGach;
        document.querySelector('.prd-item1').innerHTML = outputDa;
        document.querySelector('.prd-item4').innerHTML = outputHienDai;
        document.querySelector('.prd-item2').innerHTML = outputDonGian;
        document.querySelector('.prd-item3').innerHTML = outputAmCung;
    }
}