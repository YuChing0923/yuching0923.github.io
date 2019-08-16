var cw = 768,
    ch = 432;
    
const keyFrame = (self) => {
    self.anims.create({
            key: 'run',
            frames: self.anims.generateFrameNumbers('phone_operator', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
    });

    self.anims.create({
            key: 'win',
            frames: self.anims.generateFrameNumbers('phone_operator', { start: 2, end: 5 }),
            frameRate: 15,
            repeat: -1
    })
}

const getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};