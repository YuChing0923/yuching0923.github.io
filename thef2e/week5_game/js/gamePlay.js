const gamePlay = {
    key: 'gamePlay',
    preload: function() {
        // 載入資源
        this.load.image('bg_sky_poor', 'images/bg_sky_poor.jpg');
        this.load.image('bg_city', 'images/bg_city.png');
        this.load.image('bg_cloud_poor', 'images/bg_cloud_poor.png');
        this.load.image('bg_road', 'images/bg_road.png');

        this.load.image('stone', 'images/item_stone.svg');
        this.load.image('finish_line', 'images/finish_line.svg');
        this.load.image('fa_da_tsai', 'images/fa_da_tsai.svg');

        this.load.spritesheet('phone_operator', 'images/char_phone_operator.png', { frameWidth: 120, frameHeight: 120 });

        this.gameStop = false; // 控制遊戲是否停止
        this.isMove = true; // 控制是否可上下移動
        this.timeCounter = 10; // 遊戲時間
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定
        this.bg_sky_poor = this.add.tileSprite(cw / 2, ch / 2 - 2, cw, ch, 'bg_sky_poor');
        this.bg_city = this.add.tileSprite(cw / 2, ch - 275, cw, 200, 'bg_city');
        this.bg_road = this.add.tileSprite(cw / 2, ch - 95, cw, 200, 'bg_road');
        this.bg_cloud_poor = this.add.tileSprite(cw / 2, ch - 240, cw, 150, 'bg_cloud_poor');

        // 加入物理效果
        const addPhysics = GameObject => {
            this.physics.add.existing(GameObject);
            GameObject.body.immovable = false;
            GameObject.body.moves = false;
        }

        this.stone1 = this.add.tileSprite(cw / 3, ch - 40, 74, 60, 'stone');
        this.stone2 = this.add.tileSprite(cw - 70, ch - 150, 74, 60, 'stone');
        this.stone1.setScale(0.5);
        this.stone2.setScale(0.5);

        this.finish_line = this.add.image(cw + 30, ch - 100, 'finish_line');
        this.finish_line.setScale(0.3);
        this.finish_line.setRotation(-10);
        addPhysics(this.finish_line);

        this.fa_da_tsai = this.add.image(cw + 300, ch - 150, 'fa_da_tsai');
        this.fa_da_tsai.setScale(0.5);

        //設定人物位置
        this.player = this.physics.add.sprite(150, 300, 'phone_operator');
        this.player.setCollideWorldBounds(true); //角色邊界限制
        this.player.setBounce(0); //設定彈跳值

        //設定動畫播放
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('phone_operator', { start: 0, end: 1, suffix: '.png' }),
            frameRate: 10,
            repeat: -1
        })
        //播放動畫
        this.player.anims.play('run', true);

        //設定文字
        this.timeText = this.add.text(cw/2-50, 30, `TIME: ${this.timeCounter}`, { fontSize: '28px', fill: '#000000' })

        // 遊戲計時器
        let gametime = setInterval(() => {
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
                this.physics.add.collider(this.player, this.finish_line, () => this.scene.start('gameStart'));
                // let congratulations = this.add.image(cw / 2, ch / 2 - 50, 'congratulations');
                // congratulations.setScale(0.8);
                // let playAgainBtn = this.add.image(cw / 2, ch / 2 + 40, 'playAgainBtn');
                // playAgainBtn.setScale(0.6);
                // playAgainBtn.setInteractive();
                // playAgainBtn.on('pointerdown', () => this.scene.start('gameStart'));
            }
        }, 1000);
    },
    update: function() {
        // 遊戲狀態更新
        if (this.gameStop) return;

        this.bg_sky_poor.tilePositionX += 2;
        this.bg_city.tilePositionX += 4;
        this.bg_road.tilePositionX += 3;

        this.stone1.x -= 3;
        this.stone2.x -= 3;

        // 啟動鍵盤事件
        let cursors = this.input.keyboard.createCursorKeys();
        if (this.timeCounter > 5) {

            // 檢測石頭是否超出邊界然後返回
            if (this.stone1.x <= -50) {
                this.stone1.x = cw + 200;
            }
            if (this.stone2.x <= -50) {
                this.stone2.x = cw + 200;
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
            this.finish_line.x -= 4;
            this.fa_da_tsai.x -= 4;

            if (this.player.x > 400) {
                //移動到定點 碰到終點線
                this.player.x -= 5;
            } else if (this.player.x < 400) {
                //移動到定點 碰到終點線
                this.player.x += 5;
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

    }
}