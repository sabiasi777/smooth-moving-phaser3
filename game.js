
var config = {
    type: Phaser.AUTO,
    width: 1850,
    height: 1040,
    scene: [ Scene ],
    physics: {
        default: "arcade",
        arcade: { debug: false }
    }
};

var game = new Phaser.Game(config);