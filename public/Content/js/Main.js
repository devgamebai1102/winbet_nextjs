$(document).ready(function() {
    document.activeElement.blur();
    loadSodu();
    var name = getCookie('_username');
    if (name != "") {
        var namee = document.getElementById('name');
        if (namee)
            namee.innerText = name;
        var namee1 = document.getElementById('name1');
        if (namee1)
            namee1.innerText = name;
    }
});

function getRandomNumber(len) {
    var number = "";
    for (var i = 0; i < len; i++) {
        var num = Math.floor(Math.random() * 10);
        number += num;
    }
    return number;
}

function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function RandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//Bấm để copy
function Click2Copy(id) {
    /* Get the text field */
    var copyText = document.getElementById(id).innerText;

    ///* Select the text field */
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    Thongbao("Đã copy: " + copyText);
}

function Thongbao(text, timeout) {
    var noidung = document.getElementById('noidungthongbao');
    if (noidung) {
        noidung.innerHTML = text;
    }
    Alshow('thongbao');
    if (timeout == null)
        timeout = 3;
    setTimeout(function() {
        Alhidden('thongbao');
    }, timeout * 1000);
}

function Thongbao2(text) {
    var noidung = document.getElementById('noidungthongbao2');
    if (noidung) {
        noidung.innerHTML = text;
    }
    Alshow('thongbao2');
    setTimeout(function() {
        Alhidden('thongbao2');
    }, 2000);
}

function Thongbao3(text, timeout) {
    var noidung = document.getElementById('noidungthongbao3');
    if (noidung) {
        noidung.innerHTML = text;
    }
    Alshow('thongbao3');
    if (timeout == null)
        timeout = 2;
    setTimeout(function() {
        Alhidden('thongbao3');
    }, timeout * 1000);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

function show(element_id) {
    if (element_id == null) {
        element_id = this.id;
    }
    var element = document.getElementById(element_id);
    if (element) {
        if (element.classList.contains("hidden"))
            element.classList.remove("hidden");
        else
            element.classList.add("hidden");
    }

}

function Alshow(element_id) {
    if (element_id == null) {
        element_id = this.id;
    }
    var element = document.getElementById(element_id);
    if (element)
        element.classList.remove("hidden");
}

function Alhidden(element_id) {
    if (element_id == null) {
        element_id = this.id;
    }
    var element = document.getElementById(element_id);
    if (element)
        element.classList.add("hidden");
}

function Cuoc_Thanhcong() {
    Alshow('Cuoc_thanhcong');
    setTimeout(function() {
        Alhidden('Cuoc_thanhcong');
    }, 4000);
}

function loadSodu() {
    var sodu = document.getElementById('sodu');
    if (sodu) {
        $.ajax({
            url: "../Home/LoadSoDu",
            type: "GET",
            dataType: "json",
            success: function(ketqua) {
                let Numformat = Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                });
                if (sodu.innerText != Numformat.format(ketqua))
                    sodu.innerText = Numformat.format(ketqua);
            },
            error: function(err) {}
        });
    }
}

function formatCurrency(number) {
    const str = String(number);
    const parts = [];
    let currentPart = "";

    for (let i = str.length - 1; i >= 0; i--) {
        currentPart = str[i] + currentPart;
        if (currentPart.length === 3 || i === 0) {
            parts.unshift(currentPart);
            currentPart = "";
        }
    }

    return parts.join(".");
}