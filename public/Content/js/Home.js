function AlHidden(idd) {
    document.getElementById(idd).classList.add('hidden');
}

function AlShow(idd) {
    document.getElementById(idd).classList.remove('hidden');
}

function Show(idd) {
    var element = document.getElementById(idd);
    if (element.classList.contains('hidden'))
        element.classList.remove('hidden');
    else
        element.classList.add('hidden');
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
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

function Thongbao(text) {
    var noidung = document.getElementById('noidungthongbao');
    if (noidung)
        noidung.innerText = text.trim();
    AlShow('thongbao');
    setTimeout(function() {
        AlHidden('thongbao');
    }, 2000);
}

function Game(game) {
    if (CheckLogin()) {
        if (game != "") {
            var UID = getCookie('UID');
            var Token = getCookie('Token');
            var url = location.protocol + '//' + location.host;
            if (game == "lo27tta")
                window.location = url + "/XS3P";
            if (game == "lo27ttb")
                window.location = url + "/XS3PB";
            if (game == "xsmb")
                window.location = url + "/XSMB";
            if (game == "naprut")
                AlShow('footer1');
            if (game == "canhan")
                window.location = url + "/Home/Canhan";
            if (game == "taixiu")
                window.location = "https://game3d.winbet12.net/index.html?TH=" + UID + "&HT=" + Token;
            if (game == "0")
                Thongbao("Game đang bảo trì");
        }

    } else {
        AlShow('FormLogin');
    }
}

function CheckLogin() {
    var name = getCookie('_username');
    var Token = getCookie('Token');
    if (name != null && Token != null) {
        AlHidden('header_R');
        AlShow('Loged');
        return true;
    } else {
        AlHidden('Loged');
        AlShow('header_R');
        return false;
    }
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

function ShowPass(idd) {
    var x = document.getElementById(idd);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}