const driver = window.driver.js.driver;

const driverObj = driver({
nextBtnText: 'Tiếp theo',
prevBtnText: 'Lùi lại',
doneBtnText: 'Thoát',
showProgress: true,
steps: [
    { element: '.welcome', popover: { title: 'Chào mừng quý khách', description: 'cảm ơn quý khách đã giành chút thời gian cho website chúng tôi , để đem lại sự trải nghiệm tốt nhất và mới mẻ nhất , vui lòng bấm tiếp theo .' } },
    { element: '.cart', popover: { title: 'Giới thiệu sản phẩm', description: 'chúng tôi cung cấp các loại gạch và đá quý' } },
    { element: '.center', popover: { title: 'Giới thiệu admin', description: 'Đội ngủ hỗ trợ xây dựng website' } },
    { element: '.blogs', popover: { title: 'Bài viết ', description: 'Giới thiệu 1 số bài viết tham khảo hover vào đây' } },
    { element: '.section1', popover: { title: 'Trải nghiệm website ngay thôi nào', description: 'lướt chậm và từ từ cảm nhận' } },
]
});

driverObj.drive();