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
            debug: true,
        },
    },
    scene: [
        gamePlay,
        gameStart,
    ]
};

const game = new Phaser.Game(config);