const gameStart = {
    key: 'gameStart',
    preload: function() {
        // 載入資源
        this.load.image('bg_sky_poor', 'images/bg_sky_poor.jpg');
        this.load.image('bg_city', 'images/bg_city.png');
        this.load.image('bg_cloud_poor', 'images/bg_cloud_poor.png');
        this.load.image('bg_road', 'images/bg_road.png');
        // this.load.image('bg5', '../images/');
        // this.load.image('footer', '../images/');
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定
        this.bg_sky_poor = this.add.tileSprite(cw / 2, ch / 2 - 2, cw, ch, 'bg_sky_poor');
        this.bg_city = this.add.tileSprite(cw / 2, ch - 275, cw, 200, 'bg_city');
        this.bg_road = this.add.tileSprite(cw / 2, ch - 90, cw, 200, 'bg_road');
        this.bg_cloud_poor = this.add.tileSprite(cw / 2, ch - 240, cw, 150, 'bg_cloud_poor');
    },
    update: function() {
        // 遊戲狀態更新
        this.bg_sky_poor.tilePositionX += 2;
        this.bg_city.tilePositionX += 4;
        this.bg_road.tilePositionX += 3;
        // this.bg_cloud_poor.tilePositionX += 0;
    }
}