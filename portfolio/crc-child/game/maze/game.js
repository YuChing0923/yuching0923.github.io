//default
var game_container = $('.game_container');
var character = $('.character');
var uniKeyTrue = true;
var jsonX = 0;
var jsonY = 0;
var valn = 0;
var age = "child";

var map0 =
[
    [1,1,1,0,0,1,1,1,1,1],
    [1,0,1,0,1,1,0,0,1,0],
    [1,0,1,1,2,0,0,4,1,1],
    [4,0,0,0,0,1,4,4,4,1],
    [4,4,1,0,0,1,0,0,1,1],
    [1,1,1,1,1,2,1,1,0,1],
    [0,1,0,0,0,1,0,1,1,1],
    [4,1,1,1,1,0,4,4,4,1],
    [4,1,0,0,1,1,1,2,1,0],
    [4,1,1,0,1,0,0,0,1,3],
];
var map1 =
[
    [1,1,4,4,4,0,1,1,1,0],
    [1,1,1,0,0,0,1,1,0,0],
    [0,0,2,1,1,1,1,4,4,4],
    [0,0,0,0,0,0,1,4,0,1],
    [0,1,1,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,0,0,0,1],
    [0,1,1,1,2,1,4,0,4,4],
    [0,4,4,4,1,0,0,4,4,4],
    [4,4,4,0,1,0,0,0,4,0],
    [0,0,0,0,1,2,1,1,1,3],
];
var map2 =
[
    [1,1,1,1,0,0,0,0,0,4],
    [0,0,0,1,0,0,1,4,4,4],
    [0,1,1,1,0,0,1,1,4,0],
    [0,1,0,0,0,0,0,1,0,0],
    [0,1,1,1,1,2,1,1,1,0],
    [4,4,4,1,0,0,0,0,1,0],
    [1,1,1,0,1,1,1,1,1,0],
    [1,0,1,2,1,4,4,0,0,0],
    [1,1,0,0,0,0,4,0,0,0],
    [0,1,1,1,1,2,1,1,1,3],
]
var map3 =
[
    [1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,4,4,0,1,0],
    [4,2,1,1,1,1,4,1,1,0],
    [4,4,0,0,0,1,0,0,0,0],
    [0,4,4,4,0,1,1,1,0,0],
    [1,1,1,1,1,0,0,1,0,0],
    [0,1,0,0,1,2,1,1,0,0],
    [0,1,1,1,0,0,4,4,4,0],
    [0,0,0,1,1,2,1,0,0,0],
    [0,0,0,0,0,0,1,1,1,3],
]
var map4 =
[
    [1,1,1,0,0,1,1,1,1,1],
    [0,0,1,1,1,1,4,4,4,0],
    [0,1,1,0,0,4,0,0,0,0],
    [4,1,0,0,0,0,0,1,1,1],
    [4,1,2,1,1,1,1,1,0,1],
    [4,4,4,0,0,2,0,0,0,1],
    [0,4,4,0,0,1,1,4,4,4],
    [0,0,1,2,1,1,0,0,0,0],
    [0,0,1,4,4,0,0,0,0,0],
    [4,4,1,1,1,1,1,1,1,3],
]


    function map (data){
        this.mapdata = data;
        var maxNum = 6,
            minNum = 1;
        var printgrass;
        for (var i = 0; i < data.length; i++) {
            this.mapdata [i].forEach(function(element) {
                if(element == 0){
                    var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                    printgrass = '<div class="material grass" style="background-image:url(\'images/grass/grass'+n+'.png\')"></div>'
                    game_container.append(printgrass);
                }
                else if(element == 1){
                    game_container.append('<div class="material way"></div>');
                }
                else if(element == 2){
                    game_container.append('<div class="material treasure"></div>');
                }
                else if(element == 3){
                    game_container.append('<div class="material destination"></div>');
                }
                else if(element == 4){
                    var n = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                    pool1 = '<div class="material pool" style="background-image:url(\'images/pool/pool'+n+'.png\')"></div>'
                    game_container.append(pool1);
                    // game_container.append('<div class="pool"></div>');
                }
            });
        }
    }
    
    function getRandom(x){
        return Math.floor(Math.random()*x);
    };
    function setmapdata(){
        return 'map'+getRandom(5);
    }


    var  mapitem = window[setmapdata()]
    map(mapitem);
    

    //in mobile
    var windowWidth = $(window).width();
    if (windowWidth<780) {
        var inWidht = $('.way').width();
        $('.way').css('height',inWidht);
        $('.grass').css('height',inWidht);
        $('.pool').css('height',inWidht);
        $('.treasure').css('height',inWidht);
        $('.character').css('height',inWidht);
        $('.destination').css('height',inWidht);
    }
    
    
    
    
    //過不去
    function wall(x,y){
        var maxNum = 3,
            minNum = 1;
    
        this.walldata = mapitem;
    
        // console.log(this.walldata [y][x]);
    
        if(this.walldata[y][x] == 0){
            return false;
        }
        else if(this.walldata[y][x] == 1){
            return true;
        }
        else if(this.walldata[y][x] == 2){
    
            if ($('.material').eq(''+y+''+x+'').hasClass('treasure')) {
                var mySound = soundManager.createSound({url: 'audio/question1.mp3'});
                mySound.play()
    
                uniKeyTrue = false;
    
                valn= valn+1;
                $('#stage').load(""+age+"/topic_"+valn+".html",function() {
                    $.getScript('js/soundmanager2/soundmanager2.js').done(function( script, textStatus ) {
                        $.getScript('js/soundmanager2/mp3-player-button.js').done(function( script, textStatus ) {
                            soundManager.reboot();
                         });
                    });
    
                    $(this).find('.topic_list').find('li').removeClass('active');
                    $(this).fadeIn(500);
    
                    $('.material').eq(''+y+''+x+'').removeClass('treasure').addClass('way');
                });
                return true;
            }
            else{
                return true;
            }
    
        }
        else if(this.walldata[y][x] == 3){
            uniKeyTrue = false;
            ClearTime();
            $('.gamepass_bg').fadeIn(100);
            return true;
        }
        else if(this.walldata[y][x] == 4){
    
            var mySound = soundManager.createSound({url: 'audio/stupid3.mp3'});
            mySound.play()
    
            uniKeyTrue = false;
            ClearTime();
            $('.game_container').css({
                'margin-top': 15,
            });
            setTimeout(function(){
                $('.game_container').css({
                    'margin-top':-15,
                });
                setTimeout(function(){
                    $('.game_container').css({
                        'margin-top':0,
                    });
    
                },50);
            },50);
    
            var bgpic = character.find('img').attr('src');
            var bgurl = bgpic.replace('images/jie','').replace('.png','');
            // console.log(bgurl);
            $('.gameover_bg').css('background-image','url(images/game_over_'+bgurl+'.png)');
            $('.gameover_bg').fadeIn(100);
        }
    
    
    
    }
    
    
    //
    $('.characterpic').click(function(){
        var characterpic = $(this).find('img').attr('src').replace('_bpic','');
        character.find('img').attr('src',characterpic);
        if($(this).parents('ul').hasClass('youth')){
            age = "youth"
        }
        countSecond();
        uniKeyCode();
        $(this).parents('.character_box').fadeOut(500);
    
    })
    
    
    
    
    
    //移動
    function ChBoxMove(direction){
        var _defaultX = parseInt(character.css("left")),
            _defaultY = parseInt(character.css("top")),
            _maxwidht = game_container.width(),
            _width = Math.round(_maxwidht/10),
            _maxheight = game_container.height();

        var doumentWidth = $(window).width();
        if(doumentWidth > 700){
            _width = 75
        }
                
        if(direction == "right"){
            var _leftval = _defaultX+_width;
            console.log(_leftval)
            console.log(_maxwidht)
            if(_leftval < _maxwidht){
                if(wall(jsonX+1,jsonY)){
                   jsonX = jsonX+1;
                   character.css('left',_leftval);
                }
            }
            else{
                jsonX = 9;
            }
        }
        else if(direction == "left"){
            var _leftval = _defaultX-_width;
            if(_leftval >= 0 ){
                if(wall(jsonX-1,jsonY)){
                    jsonX = jsonX-1;
                    character.css('left',_leftval);
                }
            }
            else{
                jsonX = 0;
            }
        }
        else if(direction == "up"){
            var _top = _defaultY-_width;
            if(_top < 0){ _top == 0};
            if(_top >= 0){
                if(wall(jsonX,jsonY-1)){
                    jsonY = jsonY-1;
                    character.css('top',_top);
                }
    
            }
            else{
                jsonY = 0;
            }
        }
        else if(direction == "down"){
            var _top = _defaultY+_width;
            if(_top < _maxheight ){
                if(wall(jsonX,jsonY+1)){
                    jsonY = jsonY+1;
                    character.css('top',_top);
                }
    
            }
            else{
                jsonY = 9;
            }
        }
    }
    
    function uniKeyCode() {
        if(uniKeyTrue == true){
            $(window).keydown(function(e){
                if(uniKeyTrue == true){
                    var _code = e.keyCode;
                    //左
                    if(_code == 37){
                        ChBoxMove('left');
                    }
                    //右
                    if(_code == 39){
                        ChBoxMove('right');
                    }
                    //上
                    if(_code == 38){
                        ChBoxMove('up');
                    }
                    //下
                    if(_code == 40){
                        ChBoxMove('down');
                    }
                }
            });
    }
    }
    
    
    
    //除心
    function heart_event(){
        var a = $('body').find('.heart_data').find('li').length,
            b = 0;
    
        $('body').find('.heart_data').find('li').each(function(){
    
    
            if($(this).hasClass('active')){
                console.log(a);
                a = a-1;
            }
    
            else{
                if (a-1 == 0) {
                    // alert("遊戲結束");
                    // window.open('../../index.html','_self');
                    $('.gameover2_bg').fadeIn(500);
                }
                $(this).addClass('active');
                $(this).find('img').attr('src','images/hart_o.png')
                a = a-1;
                console.log(a);
                return false;
            }
    
        });
    }
    
    
    $('body').on('click', '.topic_list li', function() {
        $(this).parents('.topic_list').find('li').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('correct')) {
            //答對
            answer();
        }
        else{
            //答錯
            wrong_answer();
            heart_event();
        }
    });
    
    
    $('body').on('click', '.ps_box a', function() {
        $('.prompt').fadeIn(500).addClass('active');
        $('.problem').fadeOut(0).removeClass('active');
        $('#back').parents('li').fadeIn(0);
        return false;
    });
    
    $('body').on('click', '#video_play', function() {
        /* Act on the event */
    });
    
    $('body').on('click', '#back', function() {
        $('.pro_box').each(function(index, el) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                if($(this).hasClass('prompt')){
                    $(this).fadeOut(0);
                    $('.problem').addClass('active').fadeIn(500);
                    $('#back').parents('li').fadeOut(0);
                }
                else{
                    $('.stage').fadeOut(0);
                }
    
            }
        });
    });
    
    $('body').on('click', '#signout', function() {
    });
    
    
    //答對題目
    function answer(){
    
        var mySound = soundManager.createSound({url: 'audio/correct1.mp3'});
        mySound.play()
    
    
        $('#answer_bg').fadeIn(100,function(){
            $('#answer_btn').focus();
            $('#answer_btn').click(function(event) {
                $('#answer_bg').fadeOut(200);
                $('.stage').fadeOut(200);
                uniKeyTrue = true;
            });
    
        });
    }
    
    //答錯題目
    function wrong_answer(){
         var mySound = soundManager.createSound({url: 'audio/incorrect1.mp3'});
         mySound.play()
    
        $('#wrong_answer').fadeIn(100,function(){
            $('#answer_btn').focus();
            $('#wrong_answer_btn').click(function(event) {
                $('#wrong_answer').fadeOut(200);
                // $('.stage').fadeOut(200); 
                // uniKeyTrue = true;           
            });
    
        });
    }
    
    
    
    
    //時間
    var countSecondS1 = 0,
        countSecondS2 = 0,
        countSecondM1 = 0,
        countSecondM2 = 0,
        SetTime;
    
    function countSecond()
    {  countSecondS1 = countSecondS1+1
       if(countSecondS1>9){
         countSecondS1 = 0
         countSecondS2 = countSecondS2+1;
       }
       if(countSecondS2>5){
         countSecondS2 = 0
         countSecondM1 = countSecondM1+1;
       }
       if(countSecondM1>9){
        countSecondM1 = 0;
        countSecondM2  =  countSecondM2+1;
       }
    
       $('#countSecondS1').text(countSecondS1);
       $('#countSecondS2').text(countSecondS2);
       $('#countSecondM1').text(countSecondM1);
       $('#countSecondM2').text(countSecondM2);
    
    　 SetTime = setTimeout("countSecond( )", 1000);
    
    }
    
    function ClearTime(){
        clearTimeout(SetTime);
        $('#passtime').text(''+countSecondM2+''+countSecondM1+':'+countSecondS2+''+countSecondS1+'');
    }
    
    
    
    //mobile
    
    $('.key_btn').bind('touchstart', function(e, touch) {
            if($(this).attr('id') == "up"){
                ChBoxMove("up")
            }
            else if($(this).attr('id') == "left"){
                ChBoxMove("left")
            }
            else if($(this).attr('id') == "right"){
                ChBoxMove("right")
            }
            else if($(this).attr('id') == "down"){
                ChBoxMove("down")
            }
    });
    

