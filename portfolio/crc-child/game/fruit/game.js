(function(window, undefined) {

    var fruitGame = function(args) {
        this.FruitList = [
            { ID: 'F2', FruitName: '蘋果', Icon: 'images/2.png', Cent: 10 },
            { ID: 'F3', FruitName: 'CRClogo', Icon: 'images/3.png', Cent: 30 },
        ];
        this.BombList = [
            { ID: 'B1', BombName: '壞蘋果', Icon: 'images/15.png', Life: 10 },
        ];
        this.LevelList = [
            { Level: 1, Cent: 1000, Speed: 600 },
            { Level: 2, Cent: 2000, Speed: 600 },
            { Level: 3, Cent: 6000, Speed: 600 },
            { Level: 4, Cent: 12000, Speed: 600 }
        ];

        this.BuilderFruit = null;

        this.FruitMove = null;

        this.countdown = null;

        this.Setting = $.extend({

            GameBox: $('div#game_box'),

            CarBox: $('div#carBox'),

            CarMoveWidth: 30,

            CarBoxWidth: $('div#carBox').width(),

            BoxWidth: $('.game_container').outerWidth(true),

            BoxHeight: $('.game_container').outerHeight(true),

            FruitWidth: 30,

            CountCent: 0,

            LevelNum: 1,

            ListenerLevelNum: 1,

            UserName: '兒童公約小果農',

            LifeSize: 80,

            Pause: false,

            Start: false,

            applevalue: 0
        }, args);
    }


    fruitGame.prototype.GetLevelModel = function(level) {
        var _levels = this.LevelList,
            _levelObj;
        for (var i = 0, _count = _levels.length; i < _count; i++) {
            _levelObj = _levels[i];
            if (_levelObj.Level == level)
                return _levelObj;
        }
        return undefined;
    }

    fruitGame.prototype.GetRandomFruit = function() {
        var _this = this,
            _fruitCount = 0,
            _fruitIndex = 0,
            _fruitList = _this.FruitList.concat(_this.BombList);
        _fruitCount = _fruitList.length;
        _fruitIndex = parseInt(Math.random() * _fruitCount);
        return _fruitList[_fruitIndex];
    }

    fruitGame.prototype.GameLevelListener = function() {
        var _this = this,
            _countCent = _this.Setting.CountCent,
            _levelList = _this.LevelList,
            _levelObj;
        for (var i = 0, _count = _levelList.length; i < _count; i++) {
            _levelObj = _levelList[i];
            if (_levelObj.Cent >= _countCent) {
                if (_levelObj.Level > _this.Setting.ListenerLevelNum) {
                    _this.Setting.ListenerLevelNum = _levelObj.Level;
                    _this.ShowUpgrade(_levelObj.Level);
                }
                $('#gameLevel').text(_levelObj.Level);
                _this.Setting.LevelNum = _levelObj.Level;
                break;
            }
        }
    }

    fruitGame.prototype.ShowTipBox = function(type, position) {
        var _this = this,
            _tipBoxID = Math.random().toString().replace('.', ''),
            _tipBox = '<i id="' + _tipBoxID + '" class="tip_box ' + type + '" style=" left:' + position.X + 'px; top:' + position.Y + 'px;"></i>';
        _this.Setting.GameBox.append(_tipBox);
        setTimeout(function() {
            $('#' + _tipBoxID).remove();
        }, 300);
    }

    var keeptouch = false;

    fruitGame.prototype.BindControlMove = function() {
        var _this = this;

        $(window).keydown(function(e) {
            var _code = e.keyCode;
            //左
            if (_code == 37)
                _this.CarBoxMove('left');
            //右
            if (_code == 39)
                _this.CarBoxMove('right');
        });


        $('.mobile_btn').bind('touchstart', function(e, touch) {
            keeptouch = true;
            if ($(this).hasClass('left_st')) {
                _this.CarBoxMove('left','mobile');
            } else {
                _this.CarBoxMove('right','mobile');

            }
        });
        $('.mobile_btn').bind('touchend', function(e, touch) {
            keeptouch = false;
        });
    }


    fruitGame.prototype.CarBoxMove = function(action,device) {
        var _this = this,
            _setting = _this.Setting,
            _carsetting = _setting.CarMoveWidth,
            _left = _setting.CarBox.position().left;
        if(device !='mobile'){
            if (action == 'left') {
                _left = _left - _carsetting;
                if (_left < 0) return;
                $('div#carBox').css({ left: _left + 'px' });
                $('div#carBox').removeClass('mirroring');
            } else if (action == 'right') {
                if (_left > _setting.BoxWidth - _setting.CarBoxWidth) return;
                _left = _left + _carsetting;
                $('div#carBox').css({ left: _left + 'px' });
                $('div#carBox').addClass('mirroring');
            }
        }
        else{
            console.log(123);
            if (action == 'left') {
                function leftmove(){
                    _left = _left - _carsetting;
                    if (_left < 0) return;
                    $('div#carBox').css({ left: _left + 'px' });
                    $('div#carBox').removeClass('mirroring');
                    //setTimeout(function(){return switchS()},160);
                }
                function switchS(){
                    if(keeptouch == true){
                        leftmove();
                    }
                    else{
                        return
                    }
                }
                switchS();
            } else if (action == 'right') {

                function Rightmove(){
                    if (_left > _setting.BoxWidth - _setting.CarBoxWidth) return;
                    _left = _left + _carsetting;
                    $('div#carBox').css({ left: _left + 'px' });
                    $('div#carBox').addClass('mirroring');
                    //setTimeout(function(){return switchE()},160);
                }
                function switchE(){
                    if(keeptouch == true){
                        Rightmove();
                    }
                    else{
                        return
                    }
                }
                switchE();


            }
        }


    }





    fruitGame.prototype.offKey = function() {
        var _this = this;
        // jQuery(document).off('keydown');
        $(window).off("keydown");
    }


    /**
     * 掉水果
     */
    fruitGame.prototype.BuilderFruitPosition = function() {
        var _setting = this.Setting,
            _left = parseInt(Math.random() * _setting.BoxWidth);
        return _left > _setting.BoxWidth - _setting.FruitWidth ? _setting.BoxWidth - _setting.FruitWidth : _left;
    }

    /**
     * 掉水果
     */
    fruitGame.prototype.FruitDownMove = function(element) {
        var _this = this,
            _setting = this.Setting;
        var _move = setInterval(function() {
            var _$element = $(element),
                _top = _$element.position().top;
            _$element.css({ top: (_top + _setting.FruitWidth) + 'px' });
            _this.FruitPutCount(_$element, _move);

        }, this.GetLevelModel(_setting.LevelNum).Speed / 2);
    }

    /**
     *碰到壞頻果
     */
    fruitGame.prototype.FruitBomb = function(life) {

        var _this = this,
            _$lifeBar = $('#lifeBar'),
            _setting = _this.Setting,
            // _aa = parseInt(element.attr('cent') || 0),
            _applevalue = _setting.applevalue,
            _lifeSize = _$lifeBar.width(),
            _lifeSize = life,
            _$life_unmber = $('#life_unmber').find('li').length,
            _remainlife = $('#life_unmber').find('li.no_st').length
        if (_remainlife >= _$life_unmber - 1) {
            $('div#life_unmber ul li').addClass('no_st');
            $('div.thing').remove();
            // _this.Setting.GameBox.append('<span class="game_over_tip">Game Over!</span>');
            clearInterval(this.BuilderFruit);
            _this.gameOver();
        } else {
            $('div#life_unmber ul li').eq(_remainlife).addClass('no_st');
        }
    }

    /**
     * 碰到壞頻果
     */
    fruitGame.prototype.FruitBombShock = function() {
        var _this = this,

            _$gameBox = _this.Setting.GameBox.parent(),
            _x = _$gameBox.position().left,
            _y = _$gameBox.position().top,
            _shockWidth = 5,
            _shockHeight = 1,
            _shockCount = 0;
        var _shock = setInterval(function() {
            if (_shockCount >= 10) {
                _$gameBox.css({ left: _x + 'px', top: _y + 'px' });
                clearInterval(_shock);
                return;
            }
            if (_shockCount % 2 == 0)
                _$gameBox.css({ left: _x + _shockWidth + 'px', top: _y + _shockHeight + 'px' });
            else
                _$gameBox.css({ left: _x - _shockWidth + 'px', top: _y - _shockHeight + 'px' });
            _shockCount++;
        }, 20);
    }

    /**
     * 計算
     */
    fruitGame.prototype.FruitPutCount = function(element, elementMove) {
        var _this = this,
            _setting = _this.Setting,
            _carBoxLeft = _setting.CarBox.position().left,
            _carBoxTop = _setting.CarBox.parent().position().top,
            _elTop = element.position().top + element.height(),
            _elLeft = element.position().left + element.width(),
            _fruitCent = parseInt(element.attr('cent') || 0),
            _life = element.attr('life');

        if (_elLeft >= _carBoxLeft && _elLeft - element.width() <= _carBoxLeft + _setting.CarBoxWidth && _elTop - 50 >= _carBoxTop) {
            clearInterval(elementMove);
            element.remove();

            if (typeof _life == 'undefined') {
                //console.log('A:' + _life + ' - ' + (typeof _life == 'undefined') + ' - ' + _fruitCent);
                _setting.CountCent += _fruitCent;
                $('#gameCent').text(_setting.CountCent);
                // _this.GameLevelListener();
                _this.ShowTipBox('kiss', { X: _elLeft - _setting.FruitWidth, Y: _elTop - 30 });
            } else {
                //console.log('B:' + _life);
                _this.FruitBomb(_life);
                _this.ShowTipBox('bomb', { X: _elLeft - _setting.FruitWidth - 20, Y: _elTop - 60 });
                _this.FruitBombShock();
            }
        } else if (_elTop - 60 > _carBoxTop) {
            clearInterval(elementMove);
            element.remove();
            _this.ShowTipBox('miss', { X: _elLeft - _setting.FruitWidth, Y: _elTop - 60 });
        }
    }


    /**
     * 開始
     */
    fruitGame.prototype.Start = function() {
        var _this = this,
            _setting = this.Setting;

        _this.BindControlMove();
        _this.BuilderFruit = setInterval(function() {
                var _domDiv = document.createElement('div'),
                    _fruitObj = _this.GetRandomFruit();
                _domDiv.setAttribute('class', 'thing' + ' ' + _fruitObj.ID);
                _domDiv.setAttribute('idx', _fruitObj.ID);
                if (_fruitObj.Life) {
                    _domDiv.setAttribute('life', _fruitObj.Life);
                } else {
                    _domDiv.setAttribute('cent', _fruitObj.Cent);
                }
                _domDiv.setAttribute('style', 'left:' + _this.BuilderFruitPosition() + 'px;');
                _domDiv.innerHTML = '<img src="' + _fruitObj.Icon + '" width="30" height="30"/>';
                _setting.GameBox.append(_domDiv);
                _this.FruitDownMove(_domDiv);
            },
            _this.GetLevelModel(_setting.LevelNum).Speed);

        _this.countdown = setInterval(function() {
            var timetext = Number($('#second').text()) - 1;
            if (timetext > -1) {
                $('#second').text(timetext);
            } else {
                $('#second').text(59);
                var Minutetext = Number($('#Minute').text()) - 1;
                $('#Minute').text(Minutetext);
            }

            var Minutetext = Number($('#Minute').text());
            // console.log(Minutetext);

            if (Minutetext - 1 < 0 & timetext - 1 < 0) {
                _this.gameOver();
                // _this.Setting.GameBox.append('<span class="game_over_tip">時間到了!</span>');
                $('#Minute').text('00');
                $('#second').text('0');
            }

        }, 1000);

        return this;
    }



    //取消綁定

    var unBindEvent = function() {
        keydown = null;
    }

    /*
     *暫停
     */
    fruitGame.prototype.Pause = function() {
        var _this = this;
        clearInterval(_this.BuilderFruit);
        clearInterval(_this.countdown);
        clearInterval(_this.GetLevelModel);
        clearInterval(_this.BindControlMove);
        _this.offKey();
        $('.thing').remove();
        unBindEvent();

    }

    /**
     *結束
     */
    fruitGame.prototype.gameOver = function() {
        var _this = this;
        clearInterval(_this.BuilderFruit);
        clearInterval(_this.countdown);
        clearInterval(_this.GetLevelModel);
        clearInterval(_this.BindControlMove);
        _this.offKey();
        $('.thing').remove();
        unBindEvent();
        var gameCent = $('#gameCent').text();
        $('.fraction').text(gameCent);
        $('.gameover_bg').show();
        $('.character_box').hide();
        $('.control_box').hide();
        $('#game_control').hide();
    }




    /**
     * 遊戲初始
     */
    fruitGame.prototype.Init = function() {
        var _this = this;
        //new fruitGame().Start();
    }

    window.FruitGame = function() {
        return new fruitGame();
    }();



})(window);
