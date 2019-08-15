var cw = 768,
    ch = 432;
    
const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: '🎡fa_da_tsai🎡',
    scene: [
        gameStart,
        gamePlay,
    ]
};

const getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const game = new Phaser.Game(config);