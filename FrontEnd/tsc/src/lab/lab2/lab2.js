fetch('http://localhost:8000/Products')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (productItem) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <tr>\n                <td>".concat(productItem.id, "</td>\n                <td><span>").concat(productItem.name, "</span></td>\n                <td><img src=\"").concat(productItem.image1, "\" alt=\"\"></td>\n                <td><span>").concat(productItem.price, "</span></td>\n                <td><span>").concat(productItem.title, "</span></td>\n                <td>\n                <a href=\"\">S\u1EEDa</a>\n                <a href=\"\">X\u00F3a</a>\n                </td>\n            </tr>\n        ");
        // console.log(productItem);
        var table = document.querySelector('#table_sampling');
        table.appendChild(tr);
    });
})
    .catch(function (error) { return console.log("Không kết nối được với fetch " + error); });
