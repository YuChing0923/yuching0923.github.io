const gameOver = {
    key: 'gameOver',
    preload: function() {
        // 載入資源
        this.load.image('restartBtn', 'images/restart.png');
        this.load.image('game_over', 'images/game_over.svg');
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定

        this.game_over = this.add.sprite(cw / 2, ch / 2 -10, 'game_over');
        this.game_over.setScale(0.5);
        this.restartBtn = this.add.sprite(cw / 2, ch / 2+120, 'restartBtn');
        this.restartBtn.setScale(0.4);

        this.restartBtn.setInteractive();
        this.restartBtn.on('pointerdown', () => this.scene.start('gameStart'))
    },
    update: function() {
        // 遊戲狀態更新
    }
}