CheckRuttien();

function CheckRuttien() {
    $.ajax({
        url: "../Home/CheckRuttien",
        type: "GET",
        dataType: "json",
        success: function(ketqua) {
            if (ketqua === 0) {
                var link = document.getElementById('ruttien');
                link.setAttribute("href", "#");
                document.getElementById('baotriruttien').classList.remove('hidden');
                document.getElementById('blackback').classList.remove('hidden');
            }
        },
        error: function(err) {}
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa lớp active khỏi tất cả các nút
            navBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            // Thêm lớp active cho nút hiện tại
            btn.classList.add('active');
        });
    });
});

function Hidden(id) {
    document.getElementById(id).classList.add('hidden');
}

document.getElementById('showOptionsButton').addEventListener('click', function() {
    var optionsDiv = document.getElementById('optionsDiv');
    optionsDiv.classList.toggle('show');
    var element = document.getElementById('thongbao-baotri');
    var element1 = document.getElementById('baotriruttien');
    if (!element1.classList.contains('hidden')) {
        if (optionsDiv.classList.contains('show'))
            element.classList.remove('hidden');
        else
            element.classList.add('hidden');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các nút và nội dung
    const navBtns = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.content1');

    // Ẩn tất cả nội dung trừ nội dung đầu tiên
    function hideAllContent() {
        contents.forEach(content => {
            content.style.display = 'none';
        });
    }

    // Hiển thị nội dung tương ứng với nút được nhấp
    function showContent(contentId) {
        hideAllContent();
        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    }

    // Gán sự kiện click cho mỗi nút
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const contentId = btn.id.replace('btn', 'Content');
            showContent(contentId);
        });
    });

    // Hiển thị nội dung của nút đầu tiên mặc định khi trang được tải lên
    showContent('hotContent');
});

document.addEventListener("DOMContentLoaded", function() {
    var moneyBtn = document.querySelector(".sodu");
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector(".close-btn");
    moneyBtn.addEventListener("click", function() {
        popup.classList.toggle("active");
    });
    closeBtn.addEventListener("click", function() {
        popup.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var moneyBtn = document.querySelector(".sodu1");
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector(".close-btn");
    //moneyBtn.addEventListener("click", function () {
    //    popup.classList.toggle("active");
    //});
    closeBtn.addEventListener("click", function() {
        popup.classList.remove("active");
    });
});
//document.getElementById('money').addEventListener('input', function () {
//    // Lấy giá trị nhập vào
//    var inputValue = this.value.trim();

//    // Kiểm tra xem giá trị nhập vào có phải là số không
//    if (!isNaN(inputValue) && inputValue >= 10 && inputValue <= 1000) {
//        // Cập nhật nội dung của phần tử có class 'datathucte' với định dạng dữ liệu yêu cầu
//        document.getElementById('datathucte').innerText = (inputValue * 1000) + ' VND';
//    } else {
//        // Nếu giá trị không hợp lệ, hiển thị thông báo hoặc thực hiện hành động phù hợp
//        document.getElementById('message').innerText = 'Vui lòng nhập số từ 200 đến 1000.';
//    }
//});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelectorAll(".openModalBtn1").forEach(function(button) {
    button.addEventListener("click", function() {
        showModal();
    });
});

document.querySelectorAll(".close").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
        hideModal();
    });
});

function showModal() {
    var overlay = document.querySelector(".overlay");
    var modal = document.querySelector(".modal1");
    overlay.style.display = "block";
    modal.style.display = "block";
}

function hideModal() {
    var overlay = document.querySelector(".overlay");
    var modal = document.querySelector(".modal1");
    overlay.style.display = "none";
    modal.style.display = "none";
}
//document.addEventListener("DOMContentLoaded", function () {
//    const inputField = document.getElementById('money');
//    const numberButtons = document.querySelectorAll('.number-btn');
//    const clearButton = document.getElementById('clear-btn');

//    // Xử lý khi người dùng ấn vào các nút số
//    numberButtons.forEach(button => {
//        button.addEventListener('click', function () {
//            inputField.value += button.textContent; // Thêm số vào input
//        });
//    });

//    // Xử lý khi người dùng ấn vào nút Clear
//    clearButton.addEventListener('click', function () {
//        inputField.value = inputField.value.slice(0, -1); // Xóa ký tự cuối cùng của input
//    });
//});
/*Custom*/
function ToUppercase(id) {
    var textarea = document.getElementById(id);
    textarea.value = textarea.value.toUpperCase();
}
document.addEventListener("DOMContentLoaded", function() {
    var moneyBtn = document.querySelector(".sodu1");
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector(".close-btn");

    //moneyBtn.addEventListener("click", function () {
    //    popup.classList.toggle("active");
    //});

    closeBtn.addEventListener("click", function() {
        popup.classList.remove("active");
    });
});
//Chống zoom
window.addEventListener('wheel', function(event) {
    if (event.ctrlKey === true) {

    }
});