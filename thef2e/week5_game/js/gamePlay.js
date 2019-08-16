const gamePlay = {
    key: 'gamePlay',
    preload: function() {
        // 載入資源
        this.load.image('bg_sky_poor', 'images/bg_sky_poor.jpg');
        this.load.image('bg_city', 'images/bg_city.png');
        this.load.image('bg_cloud_poor', 'images/bg_cloud_poor.png');
        this.load.image('bg_road', 'images/bg_road.png');

        this.load.image('stone', 'images/item_stone.svg');
        this.load.image('coin', 'images/item_coin.svg');
        this.load.image('coin_bling', 'images/item_coin_bling.svg');
        this.load.image('char_1450', 'images/char_1450.svg');
        this.load.image('finish_line', 'images/finish_line.svg');
        this.load.image('fa_da_tsai', 'images/fa_da_tsai.svg');

        this.load.spritesheet('phone_operator', 'images/char_phone_operator.png', { frameWidth: 120, frameHeight: 120 });

        this.gameStop = false; // 控制遊戲是否停止
        this.gamePause = false; // 控制遊戲是否暫停（撞到敵人時）
        this.isMove = true; // 控制是否可上下移動
        this.pointIsCount = true; // 控制硬幣可加分1次
        this.coinCounter = 0; // 撿到金幣的數量
        this.timeCounter = 30; // 遊戲時間
        this.lifeArr = []; // 左上所有生命
        this.stoneArr = []; // 存放所有金幣
        this.coinArr = []; // 存放所有金幣
        this.itemXArr = []; //物件隨機X軸
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定
        this.bg_sky_poor = this.add.tileSprite(cw / 2, ch / 2 - 2, cw, ch, 'bg_sky_poor');
        this.bg_city = this.add.tileSprite(cw / 2, ch - 275, cw, 200, 'bg_city');
        this.bg_road = this.add.tileSprite(cw / 2, ch - 95, cw, 200, 'bg_road');
        this.bg_cloud_poor = this.add.tileSprite(cw / 2, ch - 240, cw, 150, 'bg_cloud_poor');

        // 動畫影格
        keyFrame(this);

        // 加入物理效果
        // const addPhysics = GameObject => {
        //     this.physics.add.existing(GameObject);
        //     GameObject.body.immovable = true;
        //     GameObject.body.moves = false;
        // }

        //設定文字
        this.timeText = this.add.text(cw / 2 - 50, 30, `TIME: ${this.timeCounter}`, { fontSize: '28px', fill: '#000000' })
        this.score = this.add.text(cw - 50, 30, `${this.coinCounter}`, { fontSize: '28px', fill: '#000000' })

        // 遊戲計時器
        let gametime = setInterval(() => {
            if (!this.gamePause) {
                this.timeCounter--;
                //重新設定文字
                this.timeText.setText(`TIME: ${this.timeCounter}`);
                if (this.timeCounter < 20 && this.timeCounter > 10) {
                    // this.bgSpeed = 1.6;
                } else if (this.timeCounter < 5 && this.timeCounter > 0) {
                    // this.finish_line = this.add.image(cw / 2, ch / 2 - 50, 'finish_line');
                    // this.bgSpeed = 3;
                } else if (this.timeCounter <= 0) {
                    this.gameStop = true;
                    clearInterval(gametime);
                    this.scene.start('gameWin');
                }
            }
        }, 1000);

        //設定人物
        this.player = this.physics.add.sprite(150, 300, 'phone_operator');
        this.player.depth = 2; //角色放置到最上層
        this.player.setCollideWorldBounds(true); //角色邊界限制
        this.player.setBounce(0); //設定彈跳值
        this.player.setSize(60, 30).setOffset(30, 80);
        if (!this.gamePause) {
            this.player.anims.play('run', true); //播放動畫
        }

        this.char_1450 = this.physics.add.sprite(1000, 300, 'char_1450'); ////////////////////test待改getRandom+Arr////////////////////
        this.player.depth = 1; //敵人放置到物件上層
        // this.char_1450.setCollideWorldBounds(true); //角色邊界限制
        this.char_1450.setBounce(0); //設定彈跳值
        this.char_1450.setSize(80, 60).setOffset(80, 200);
        this.char_1450.setScale(0.5);

        // 物件陣列
        // 石頭
        this.stoneArr = [
            this.physics.add.sprite(cw / 3, ch - 50, 'stone').setScale(0.5),
            this.physics.add.sprite(cw - 70, ch - 100, 'stone').setScale(0.5),
            this.physics.add.sprite(cw - 70, ch - 150, 'stone').setScale(0.5)
        ]

        //碰撞後獲得金幣
        const getCoin = (player, coin) => {
            coin.setTexture('coin_bling');
            coin.body.moves = false;
            coin.body.setSize(60, 60);
            // console.log(this);

            setTimeout(() => {
                if (coin.visible) {
                    this.coinCounter++;
                    this.score.setText(`${this.coinCounter}`);
                }
                coin.visible = false;
            }, 100);
        }

        // const metEnemy = (player, enemy) => {
        //     // player.anims.play('run', false);
        //     console.log('metEnemy');
        // }
        // this.physics.add.collider(this.player, this.char_1450, metEnemy);

        // 金幣
        for (let i = 0; i < 5; i++) {
            let coinX = getRandom(3, 10);
            let coinY = getRandom(0, 4);
            if (i > 0) {
                if (this.coinArr[i - 1].x - 100 * coinX <= 100 && this.coinArr[i - 1].x - 100 * coinX >= 0) {
                    coinX -= 100;
                } else if (this.coinArr[i - 1].x - 100 * coinX < 0 && this.coinArr[i - 1].x - 100 * coinX >= -100) {
                    coinX += 100;
                }
            }
            this['coin' + i] = this.physics.add.sprite(100 * coinX, ch - 50 * coinY, 'coin').setScale(0.5);
            this.coinArr.push(this['coin' + i]);
            // this.physics.add.existing(this['coin' + i]);
            this['coin' + i].body.moves = false;
            this['coin' + i].body.setSize(60, 60);
            this.physics.add.collider(this.player, this['coin' + i], getCoin);
        }

        //結尾
        this.finish_line = this.add.image(cw + 30, ch - 100, 'finish_line');
        this.finish_line.setScale(0.3);
        this.finish_line.setRotation(-10);
        this.fa_da_tsai = this.add.image(cw + 300, ch - 150, 'fa_da_tsai');
        this.fa_da_tsai.setScale(0.5);

    },
    update: function() {
        // 遊戲狀態更新
        if (this.gameStop) return;

        //沒有撞到敵人時
        if (!this.gamePause) {
            this.bg_sky_poor.tilePositionX += 2;
            this.bg_city.tilePositionX += 4;
            this.bg_road.tilePositionX += 3;

            for (let i = 0; i < this.stoneArr.length; i++) {
                this.stoneArr[i].x -= 3;
            }
            for (let i = 0; i < this.coinArr.length; i++) {
                this.coinArr[i].x -= 3;
            }
            this.char_1450.setCollideWorldBounds(true); //角色邊界限制
            this.char_1450.x -= 5;

            // 啟動鍵盤事件
            let cursors = this.input.keyboard.createCursorKeys();
            if (this.timeCounter < 30 && this.timeCounter >= 5) {
                // 檢測金幣是否超出邊界然後返回
                for (let i = 0; i < this.coinArr.length; i++) {
                    if (this.coinArr[i].x <= -50) {
                        let coinX = getRandom(8, 13);
                        this.coinArr[i].setTexture('coin');
                        this.coinArr[i].visible = true;
                        this.coinArr[i].body.moves = false;
                        this.coinArr[i].body.setSize(60, 60);
                        this.coinArr[i].x = coinX * 100;
                    }
                }
            }
            if (this.timeCounter > 5) {
                // 檢測石頭是否超出邊界然後返回
                for (let i = 0; i < this.stoneArr.length; i++) {
                    if (this.stoneArr[i].x <= -50) {
                        this.stoneArr[i].x = cw + 200;
                    }
                }

                //最後5秒前 可自由移動
                if (cursors.up.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.y) / 50 >= 6 && (this.player.y) / 50 <= 7) {
                            this.player.y += -50;
                        }
                    }
                } else if (cursors.down.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.y) / 50 >= 5 && (this.player.y) / 50 <= 6) {
                            this.player.y += 50;
                        }
                    }
                } else if (cursors.left.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.x) / 50 >= 3 && (this.player.x) / 50 <= 13) {
                            this.player.x += -50;
                        }
                    }
                } else if (cursors.right.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.x) / 50 >= 2 && (this.player.x) / 50 <= 12) {
                            this.player.x += 50;
                        }
                    }
                } else {
                    this.isMove = true;
                }
            } else {
                //最後5秒 準備結束遊戲
                this.finish_line.x -= 3;
                this.fa_da_tsai.x -= 3;

                if (this.player.x > 400) {
                    //移動到定點 碰到終點線
                    this.player.x -= 4;
                } else if (this.player.x < 400) {
                    //移動到定點 碰到終點線
                    this.player.x += 4;
                }
                if (cursors.up.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.y) / 50 >= 6 && (this.player.y) / 50 <= 7) {
                            this.player.y += -50;
                        }
                    }
                } else if (cursors.down.isDown) {
                    if (this.isMove) {
                        this.isMove = false;
                        if ((this.player.y) / 50 >= 5 && (this.player.y) / 50 <= 6) {
                            this.player.y += 50;
                        }
                    }
                } else {
                    this.isMove = true;
                }
            }
        } else {
            //撞到敵人時才會暫停
            this.player.x -= 15;
            this.player.y -= 10;
            this.player.rotation -= 0.7;
            this.player.setCollideWorldBounds(false); //角色邊界限制

            if (this.player.x < -50 && this.player.y < -50) {
                this.char_1450.x = 1300; ////////////////////test待改 getRandom////////////////////
                this.char_1450.setCollideWorldBounds(false); //角色邊界限制
                this.player.x = 150;
                this.player.y = 300;
                this.player.rotation = 0;
                this.player.setCollideWorldBounds(true); //角色邊界限制
                this.gamePause = false;
            }
        }

        //撞到敵人時控制暫停
        if (isOverlapping(this, this.player, this.char_1450)) {
            this.gamePause = true;
        }

    }
}