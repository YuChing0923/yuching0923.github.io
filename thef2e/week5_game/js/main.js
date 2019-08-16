var cw = 768,
    ch = 432;
    
const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: '🎡fa_da_tsai🎡',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            // debug: true,
        },
    },
    scene: [
        gameStart,
        gamePlay,
        gameWin,
    ]
};

const game = new Phaser.Game(config);