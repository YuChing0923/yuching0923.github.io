//************ajax load page.s************//
var judgmentUrl, //主要索引網址
    mainUrl = location.href, //網頁原網址
    index_url = "main.html", //template首頁
    templateValue = location.href.indexOf('#template/'), //-1 = 沒有template
    templateUrl, //template名稱
    tokenValue = mainUrl.indexOf('?room='), //-1 = 沒有token
    tokenUrl, //token名稱
    room_id,
    gotoPage;
// room_id = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";
// gotoPage = 'main';

if (templateValue == -1) {
    judgmentUrl = mainUrl;
} else {
    judgmentUrl = mainUrl.split('#template/')[0];
    if (tokenValue == -1) {
        templateUrl = mainUrl.split('#template/')[1].split('.html')[0];
        console.log(templateUrl);
    } else {
        templateUrl = mainUrl.split('#template/')[1].split('.html?room=')[0];
        console.log(templateUrl);
    }
}

$(document).ready(function() {
    initPage();
});

function initPage() {
    if (templateValue == -1) {
        $("#content").empty().load('template/' + index_url);
        window.location = judgmentUrl + '#template/' + index_url + '?room=' + room_id;
    } else {
        if (tokenValue == -1) {
            window.location = judgmentUrl + '#template/' + templateUrl + '.html' + '?room=' + room_id;
        } else {
            tokenUrl = location.href.split('?room=')[1];
        }
        $("#content").empty().load('template/' + templateUrl + '.html');
    }
}

function changeForm(gotoPage, locationUrl) {
    window.location = judgmentUrl + '#template/' + gotoPage + '.html?room=' + locationUrl;
    // $("#content").load('template/' + gotoPage + '?judgmentUrl?' + locationUrl);
}

function hashChange() {
    if (tokenValue == -1) {
        templateUrl = location.href.split('#template/')[1].split('?room=')[0];
    } else {
        templateUrl = location.href.split('#template/')[1].split('.html?room=')[0];
        tokenUrl = location.href.split('?room=')[1];
    }
    $("#content").empty().load('template/' + templateUrl + '.html');
}
window.addEventListener('hashchange', hashChange, true);
//************ajax load page.e************//

$(document).ajaxStop(function() {
    tokenUrl = location.href.split('?room=')[1];
    console.log(tokenUrl);
});