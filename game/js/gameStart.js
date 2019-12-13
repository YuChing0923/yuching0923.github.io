const gameStart = {
    key: 'gameStart',
    preload: function() {
        // 載入資源
        this.load.image('bg_sky_poor', 'images/bg_sky_poor.jpg');
        this.load.image('bg_city', 'images/bg_city.png');
        this.load.image('bg_cloud_poor', 'images/bg_cloud_poor.png');
        this.load.image('bg_road', 'images/bg_road.png');

        this.load.image('logo', 'images/kaohsiung_fa_da_tsai.png');
        this.load.image('startBtn', 'images/start.png');
        this.load.image('btnUp', 'images/key_up.svg');
        this.load.image('btnDown', 'images/key_down.svg');
        this.load.image('stone', 'images/item_stone.svg');

        this.load.spritesheet('phone_operator', 'images/char_phone_operator.png', { frameWidth: 120, frameHeight: 120 });
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定

        // 動畫影格
        keyFrame(this);
        
        this.bg_sky_poor = this.add.tileSprite(cw / 2, ch / 2 - 2, cw, ch, 'bg_sky_poor');
        this.bg_city = this.add.tileSprite(cw / 2, ch - 275, cw, 200, 'bg_city');
        this.bg_road = this.add.tileSprite(cw / 2, ch - 90, cw, 200, 'bg_road');
        this.bg_cloud_poor = this.add.tileSprite(cw / 2, ch - 240, cw, 150, 'bg_cloud_poor');

        this.stone1 = this.add.tileSprite(cw / 3, ch - 40, 74, 60, 'stone');
        this.stone2 = this.add.tileSprite(cw-70, ch-150, 74, 60, 'stone');
        this.stone1.setScale(0.5);
        this.stone2.setScale(0.5);

        this.logo = this.add.sprite(cw - 250, ch / 2 - 50, 'logo');
        this.logo.setScale(0.5);

        this.startBtn = this.add.sprite(cw - 250, ch - 120, 'startBtn');
        this.startBtn.setScale(0.5);

        this.btnUp = this.add.sprite(cw - 290, ch - 50, 'btnUp');
        this.btnDown = this.add.sprite(cw - 210, ch - 50, 'btnDown');
        this.btnUp.setScale(0.5);
        this.btnDown.setScale(0.5);

        //設定人物位置
        this.player = this.add.sprite(150, 300, 'phone_operator');

        //播放動畫
        this.player.anims.play('run', true);

        this.startBtn.setInteractive();
        this.startBtn.on('pointerdown', () => this.scene.start('gamePlay'))
    },
    update: function() {
        // 遊戲狀態更新
        this.bg_sky_poor.tilePositionX += 2;
        this.bg_city.tilePositionX += 4;
        this.bg_road.tilePositionX += 3;

        this.stone1.x -= 3;
        this.stone2.x -= 3;

        // 檢測石頭是否超出邊界然後返回
        if (this.stone1.x <= -50) {
            this.stone1.x = cw + 200;
        }
        if (this.stone2.x <= -50) {
            this.stone2.x = cw + 200;
        }

    }
}