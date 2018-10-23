var student1 = {
    rollNumber: 'A0001',
    avatar: 'img/1.jpg',
    name: 'Lê Tuấn Anh',
    birthday: 20 / 10 / 2000,
    address: 'số 8 tôn Thất Thuyết',
    phone: '0981273127'
};
var student2 = {
    rollNumber: 'A0002',
    avatar: 'img/1.jpg',
    name: 'Lã Thanh Phong',
    birthday: 19 / 10 / 2000,
    address: 'số 12 tôn Thất Thuyết',
    phone: '098127153127'
};
var student3 = {
    rollNumber: 'A0003',
    avatar: 'img/1.jpg',
    name: 'Trần Hồng Sơn',
    birthday: 20 / 9 / 2000,
    address: 'số 18 tôn Thất Thuyết',
    phone: '0981297827'
};
var student4 = {
    rollNumber: 'A0004',
    avatar: 'img/1.jpg',
    name: 'Đào Hồng Luyễn',
    birthday: 27 / 5 / 2000,
    address: 'số 90 tôn Thất Thuyết',
    phone: '0989793127'
};
var student5 = {
    rollNumber: 'A0005',
    avatar: 'img/1.jpg',
    name: 'phan Văn Nam',
    birthday: 27 / 5 / 2000,
    address: 'số 99 tôn Thất Thuyết',
    phone: '0989793127'
};
var student6 = {
    rollNumber: 'A0006',
    avatar: 'img/1.jpg',
    name: 'Lê Văn Em',
    birthday: 22 / 5 / 2000,
    address: 'số 92 tôn Thất Thuyết',
    phone: '0989883127'
};

var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
listStudent.push(student5);
listStudent.push(student6);


// for(var i = 0; i<listStudent.length;i++){
//     alert(listStudent[i].name);
// }
var classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length > 0) {
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length; i++) {
        var itemContent = '<div class="personal-infor">';
        itemContent += '<div class="avatar" style="background-image: url(\'' + listStudent[i].avatar + '\'); background-size: cover">';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Rollnumber</label>';
        itemContent += '<div>' + listStudent[i].rollNumber + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Name</label>';
        itemContent += '<div>' + listStudent[i].name + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Phone</label>';
        itemContent += '<div>' + listStudent[i].phone + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Adress</label>';
        itemContent += '<div>' + listStudent[i].address + '</div>';
        itemContent += '</div>';
        itemContent += '</div>';
        mainContent.innerHTML += itemContent;
    }
}