// footerNav JS start
$(function () {
    $('.footer_click').click(function () {
        $(this).toggleClass("Footer-Open");
        $(".FatFooter-Data").slideToggle();
        $(".footer_link").toggleClass("footer_nav_none");
        $(".footer_click").toggleClass("footer_click_up");
    });
});
// footerNav JS end

// menu fix JS start
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar-nav').addClass('fixed_header');
        // $(".recommend_link").css("position", "relative");
    } else {
        $('.navbar-nav').removeClass('fixed_header');
        // $(".recommend_link").css("position", "absolute");
    }
});
// menu fix JS end

// window 
$(window).on("load resize scroll", function() {
    
    

});

// f_index start
$(function () {
    // datepicker
    $('#date_start, #date_end').datepicker({
        language: 'zh-TW',
        format: 'yyyy-mm-dd',
        todayHighlight: true,
        autoclose: true,
    });
});

// // pathCtrl parameter
var menu_path_1 = "",
    menu_path_2 = "",
    menu_path_3 = "",
    nav_target = "";
var localPathArr = {
    "nav_target": nav_target,
    "menu_path_1": menu_path_1,
    "menu_path_2": menu_path_2,
    "menu_path_3": menu_path_3
}

// leftmenu 控制 active and 存麵包屑
function leftMenuCtrl(localPathArr) {
    var path1 = localPathArr.menu_path_1,
        path2 = localPathArr.menu_path_2,
        path3 = localPathArr.menu_path_3;
    // path2 add active
    if (path2) {
        $("#left_menu_list").find("li.mainmenu_item").each(function (i, e) {
            if ($(e).attr("title") == path2) {
                $(e).siblings('li').removeClass('active');
                $(e).addClass("active");
            }
        });
    }
    // path3 add active
    if (path3) {
        $("#left_menu_list").find("li.mainmenu_item").find("li.submenu_item").each(function (i, e) {
            if ($(e).attr("title") == path3) {
                $(e).siblings('li').removeClass('active');
                $(e).addClass("active");
            }
        });
    }

    $("#left_menu_list").find("li").on("click", function (e) {
        localPathArr.menu_path_1 = $(".left_menu_title").find("h2").html();
        var is_submenu = $(this).hasClass("submenu_item");
        var has_submenu = $(this).children("ul.submenu").length;
        if (!has_submenu) {
            // no submenu
            if (!is_submenu) {
                // not submenu item
                localPathArr.menu_path_2 = $(this).attr("title");
                localPathArr.menu_path_3 = null;
                $(this).addClass("active")
                $(this).siblings('li').removeClass('active');
                // pathCtrl();
            } else {
                // submenu item
                localPathArr.menu_path_2 = $(this).parents("li.mainmenu_item").attr("title");
                localPathArr.menu_path_3 = $(this).attr("title");
                $(this).addClass('active');
                $(this).siblings('li.submenu_item').removeClass('active');
                $(this).parents("li.mainmenu_item").addClass("active");
                $(this).parents("li.mainmenu_item").siblings("li.mainmenu_item").removeClass("active");
                // pathCtrl();
                return false;
            }
        } else {
            // has submenu
            if ($(this).hasClass("open")) {
                $(this).removeClass("open").addClass("closed");
                $(this).removeClass("active");
            } else if ($(this).hasClass("closed")) {
                $(this).removeClass("closed").addClass("open");
                $(this).siblings('li').removeClass('active');
                $(this).toggleClass('active');
            }
            // pathCtrl();
        }

    });
}

// 取麵包屑
// function // pathCtrl() {
//     var path_1 = localPathArr.menu_path_1,
//         path_2 = localPathArr.menu_path_2,
//         path_3 = localPathArr.menu_path_3;

//     $(".path_1.JQ").html(path_1);
//     $(".main_content_title.JQ").html(path_1);

//     if (path_1 == path_2) {
//         $(".path_2_angle.JQ").hide();
//         $(".path_2.JQ").hide();
//         $(".path_3_angle.JQ").hide();
//         $(".path_3.JQ").hide();
//     }

//     if (path_3) {
//         $(".main_content_title.JQ").html(path_3);
//         $(".path_3.JQ").html(path_3);
//         $(".path_3_angle.JQ").show();
//         $(".path_2.JQ").html(path_2);
//     } else if (!path_3 && path_2) {
//         $(".main_content_title.JQ").html(path_2);
//         $(".path_2.JQ").html(path_2);
//         $(".path_3_angle.JQ").hide();
//         $(".path_3.JQ").hide();
//     }
// }

function goBack() {
    window.history.back();
}

function goTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}
// f_index end
// s_index start

// s_index end