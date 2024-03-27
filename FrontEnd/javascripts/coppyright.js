document.addEventListener("copy", function(event) {
    event.preventDefault();

    const copyTxt = window.getSelection().toString();
    let text = '';

    for (let i = 0; i < copyTxt.length ; i+=10){
        text += copyTxt.substring(i, i+10) + " Nguồn : Bon Kido ";
    }

    const copyRight = ' Liên hệ admin website để được hỗ trợ ';

    event.clipboardData.setData('text/plain', text + '\n\n' + copyRight)
})

// chọn các tab ở section 2 

function showTab(tabIndex) {
    // Ẩn tất cả các tab
    var tabContents = document.getElementsByClassName("products");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Hiển thị tab được chọn
    var selectedTab = document.getElementById("tab" + tabIndex);
    selectedTab.style.display = "flex";
}