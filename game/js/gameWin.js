const gameWin = {
    key: 'gameWin',
    preload: function() {
        // 載入資源
        this.load.image('bg_sky_fadatsai', 'images/bg_sky_fadatsai.jpg');
        this.load.image('bg_city', 'images/bg_city.png');
        this.load.image('bg_cloud_fadatsai', 'images/bg_cloud_fadatsai.png');
        this.load.image('bg_road', 'images/bg_road.png');

        this.load.image('restartBtn', 'images/restart.png');
        this.load.image('fa_da_tsai', 'images/fa_da_tsai.svg');
        this.load.image('ribbon', 'images/ribbon.svg');
        this.load.image('warning', 'images/warning.svg');

        this.load.spritesheet('phone_operator', 'images/char_phone_operator.png', { frameWidth: 120, frameHeight: 120 });
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定

        // 動畫影格
        keyFrame(this);

        this.bg_sky_fadatsai = this.add.tileSprite(cw / 2, ch / 2 - 2, cw, ch, 'bg_sky_fadatsai');
        this.bg_city = this.add.tileSprite(cw / 2, ch - 275, cw, 200, 'bg_city');
        this.bg_road = this.add.tileSprite(cw / 2, ch - 90, cw, 200, 'bg_road');
        this.bg_cloud_fadatsai = this.add.tileSprite(cw / 2, ch - 240, cw, 150, 'bg_cloud_fadatsai');

        this.fa_da_tsai = this.add.image(cw / 2, ch / 2 + 90, 'fa_da_tsai');
        this.fa_da_tsai.setScale(0.5);

        this.ribbon = this.add.sprite(cw / 2, ch / 2+60, 'ribbon');
        this.ribbon.setScale(0.6);
        this.warning = this.add.sprite(cw / 2, ch / 3-30, 'warning');
        this.warning.setScale(0.5);
        this.restartBtn = this.add.sprite(cw / 2, ch / 3+60, 'restartBtn');
        this.restartBtn.setScale(0.4);

        //設定人物位置
        this.player = this.add.sprite(150, 300, 'phone_operator');

        //播放動畫
        this.player.anims.play('win', true);

        this.restartBtn.setInteractive();
        this.restartBtn.on('pointerdown', () => this.scene.start('gameStart'))
    },
    update: function() {
        // 遊戲狀態更新
    }
}