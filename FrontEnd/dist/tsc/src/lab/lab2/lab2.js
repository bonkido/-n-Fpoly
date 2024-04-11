"use strict";
fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then((data) => {
    data.forEach(productItem => {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <tr>
                <td>${productItem.id}</td>
                <td><span>${productItem.name}</span></td>
                <td><img src="${productItem.image1}" alt=""></td>
                <td><span>${productItem.price}</span></td>
                <td><span>${productItem.title}</span></td>
                <td>
                <a href="">Sửa</a>
                <a href="">Xóa</a>
                </td>
            </tr>
        `;
        // console.log(productItem);
        var table = document.querySelector('#table_sampling');
        table.appendChild(tr);
    });
})
    .catch(error => console.log("Không kết nối được với fetch " + error));
