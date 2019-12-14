// banner JS start
setInterval(function() {
    var $inactiveLink = $("[data-link]:not(.active)");
    var $inactiveImage = $("[data-image]:not(.active)");
    var $activeLink = $("[data-link].active");
    var $activeImage = $("[data-image].active");

    $activeImage.removeClass("active").addClass("inactive");
    $activeLink.removeClass("active").addClass("inactive");
    $inactiveImage.addClass("active").removeClass("inactive");
    $inactiveLink.addClass("active").removeClass("inactive");
}, 4800);
// banner JS end

// Main RWD JS start
$(function() {
    var wdth = $(window).width();
    if (wdth < 751) {
        $('.mainTab').addClass('tab-content');
        $('.main').addClass('tab-pane');
    } else {
        $('.mainTab').removeClass('tab-content');
        $('.main').removeClass('tab-pane');
    }
    $(window).resize(function() {
        var wdth = $(window).width();
        if (wdth < 751) {
            $('.mainTab').addClass('tab-content');
            $('.main').addClass('tab-pane');
        } else {
            $('.mainTab').removeClass('tab-content');
            $('.main').removeClass('tab-pane');
        }
    });
});
// Main RWD JS end

// middleLink JS start
$('.middleLinkItem').matchHeight();
// middleLink JS end

// govLinkSelect JS start
// govLinkSelect JS data start
$(function() {
    var taiwanZipData1 = {
        "選擇機關": { "選擇單位": "" },
        "府內各單位": {
            "<option value='' isNewWindow='False'>民政處</option>": "",
            "<option value='' isNewWindow='False'>財政處</option>": "",
            "<option value='' isNewWindow='False'>國際產業發展處</option>": "",
            "<option value='' isNewWindow='False'>工務處</option>": "",
            "<option value='' isNewWindow='False'>教育處</option>": "",
            "<option value='' isNewWindow='False'>農業處</option>": "",
            "<option value='' isNewWindow='False'>社會處</option>": "",
            "<option value='' isNewWindow='False'>勞工處</option>": "",
            "<option value='' isNewWindow='False'>原住民族行政處</option>": "",
            "<option value='' isNewWindow='False'>地政處</option>": "",
            "<option value='' isNewWindow='False'>交通旅遊處</option>": "",
            "<option value='' isNewWindow='False'>綜合發展處</option>": "",
            "<option value='' isNewWindow='False'>人事處</option>": "",
            "<option value='' isNewWindow='False'>政風處</option>": "",
            "<option value='' isNewWindow='False'>主計處</option>": ""
        },
        "各所屬機關": {
            "<option value='' isNewWindow='False'>警察局</option>": "",
            "<option value='' isNewWindow='False'>稅捐稽徵局</option>": "",
            "<option value='' isNewWindow='False'>衛生局</option>": "",
            "<option value='' isNewWindow='False'>消防局</option>": "",
            "<option value='' isNewWindow='False'>環境保護局</option>": "",
            "<option value='' isNewWindow='False'>文化局</option>": "",
            "<option value='' isNewWindow='False'>家畜疾病防治所</option>": "",
            "<option value='' isNewWindow='False'>體育場</option>": "",
            "<option value='' isNewWindow='False'>教育研究發展暨網路中心</option>": "",
            "<option value='' isNewWindow='False'>家庭教育中心</option>": "",
            "<option value='' isNewWindow='False'>新竹縣各級學校</option>": ""
        },
        "鄉鎮市公所": {
            "<option value='' isNewWindow='False'>竹北市公所</option>": "",
            "<option value='' isNewWindow='False'>竹東鎮公所</option>": "",
            "<option value='' isNewWindow='False'>新埔鎮公所</option>": "",
            "<option value='' isNewWindow='False'>關西鎮公所</option>": "",
            "<option value='' isNewWindow='False'>湖口鄉公所</option>": "",
            "<option value='' isNewWindow='False'>新豐鄉公所</option>": "",
            "<option value='' isNewWindow='False'>寶山鄉公所</option>": "",
            "<option value='' isNewWindow='False'>芎林鄉公所</option>": "",
            "<option value='' isNewWindow='False'>橫山鄉公所</option>": "",
            "<option value='' isNewWindow='False'>北埔鄉公所</option>": "",
            "<option value='' isNewWindow='False'>峨眉鄉公所</option>": "",
            "<option value='' isNewWindow='False'>尖石鄉公所</option>": "",
            "<option value='' isNewWindow='False'>五峰鄉公所</option>": ""
        },
        "戶政事務所": {
            "<option value='' isNewWindow='False'>竹北市戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>竹東鎮戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>新埔鎮戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>關西鎮戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>湖口鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>新豐鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>寶山鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>芎林鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>橫山鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>北埔鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>峨眉鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>尖石鄉戶政事務所</option>": "",
            "<option value='' isNewWindow='False'>五峰鄉戶政事務所</option>": ""
        },
        "地政事務所": {
            "<option value='' isNewWindow='False'>竹北地政事務所</option>": "",
            "<option value='' isNewWindow='False'>竹東地政事務所</option>": "",
            "<option value='' isNewWindow='False'>新湖地政事務所</option>": ""
        },
        "竹縣衛生所": {
            "<option value='' isNewWindow='False'>竹北市衛生所</option>": "",
            "<option value='' isNewWindow='False'>竹東鎮衛生所</option>": "",
            "<option value='' isNewWindow='False'>新埔鎮衛生所</option>": "",
            "<option value='' isNewWindow='False'>關西鎮衛生所</option>": "",
            "<option value='' isNewWindow='False'>湖口鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>新豐鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>寶山鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>芎林鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>橫山鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>北埔鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>峨眉鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>尖石鄉衛生所</option>": "",
            "<option value='' isNewWindow='False'>五峰鄉衛生所</option>": ""
        },
        "各縣市政府": {
            "<option value='' isNewWindow='False'>臺北市政府</option>": "",
            "<option value='' isNewWindow='False'>高雄市政府</option>": "",
            "<option value='' isNewWindow='False'>新北市政府</option>": "",
            "<option value='' isNewWindow='False'>桃園市政府</option>": "",
            "<option value='' isNewWindow='False'>苗栗縣政府</option>": "",
            "<option value='' isNewWindow='False'>彰化縣政府</option>": "",
            "<option value='' isNewWindow='False'>南投縣政府</option>": "",
            "<option value='' isNewWindow='False'>雲林縣政府</option>": "",
            "<option value='' isNewWindow='False'>嘉義縣政府</option>": "",
            "<option value='' isNewWindow='False'>屏東縣政府</option>": "",
            "<option value='' isNewWindow='False'>宜蘭縣政府</option>": "",
            "<option value='' isNewWindow='False'>花蓮縣政府</option>": "",
            "<option value='' isNewWindow='False'>臺東縣政府</option>": "",
            "<option value='' isNewWindow='False'>金門縣政府</option>": "",
            "<option value='' isNewWindow='False'>澎湖縣政府</option>": "",
            "<option value='' isNewWindow='False'>基隆市政府</option>": "",
            "<option value='' isNewWindow='False'>新竹市政府</option>": "",
            "<option value='' isNewWindow='False'>臺中市政府</option>": "",
            "<option value='' isNewWindow='False'>嘉義市政府</option>": "",
            "<option value='' isNewWindow='False'>臺南市政府</option>": "",
            "<option value='' isNewWindow='False'>連江縣政府</option>": ""
        }
    };
    // govLinkSelect JS data end
    gov = $("#gov");
    depart = $("#depart");
    test = $("#test");
    for (i in taiwanZipData1) {
        gov.append("<option>" + i + "</option>");
    }
    depart.append("<option> -- </option>");
    gov.on("change", function() {
        var govIndex = gov.val();
        depart.empty();
        depart.append("<option>選擇單位</option>");
        for (i in taiwanZipData1[govIndex]) {
            depart.append(i);
        }
        if (!$("#depart :selected").text() != '選擇單位')
            $("#test").val($("#depart :selected").text());
    });
    depart.on("change", function() {
        if ($("#depart :selected").text() != '選擇單位')
            $("#test").val($("#depart :selected").text());
    });
});

$(".quicklink_btn").click(function() {
    var link = $('.subddl').find('select').find(':selected').val();
    if (link != '' && link != '選擇機關') {
        window.open(link, "", '');
    }
})
// govLinkSelect JS end

// footerNav JS start
$(function() {　　
    $('.footerClick').click(function() {
        $(this).toggleClass("Footer-Open");
        $(".FatFooter-Data").slideToggle();
        $(".footerLink").toggleClass("footerNavNone");
        $(".footerClick").toggleClass("footerClickUp");
    });
});
// footerNav JS end