var loadedUrl = '';
var index_url = "step_1";
// var judgmentUrl = location.href,
//     judgmentValue = judgmentUrl.indexOf('?judgmentUrl?'),
//     strGet = judgmentUrl.substring(judgmentValue).replace('?judgmentUrl?', ""),
//     templateValue = judgmentUrl.indexOf('template/'),
//     template_url = judgmentUrl.substring(templateValue).split('.html')[0].replace('template/', "");

$.ajaxSetup({
    cache: false
});
$(document).ready(function() {
    $(initPage());
});

function initPage() {
    $.history.init(function(url) {
        if (url == "" || undefined) {
            loadPage(url == index_url);
        } else {
            loadPage(url);
        }
    }, {
        unescape: true
    });
}

function loadPage(url) {
    if (loadedUrl != url) {
        $('#content').empty().load(url, function(response, status, xhr) {
            loadedUrl = url;

            $('html, body').scrollTop(0);

            if (!window.scriptHasRun) {
                window.scriptHasRun = true;

            }

        });
    } else {
        $.history.load('template/' + index_url + '.html');
    }
}


function changeForm(gotoPage, locationUrl) {
    $.history.load('template/' + gotoPage + '.html' + '?judgmentUrl?' + locationUrl);
}