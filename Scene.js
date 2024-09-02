class Scene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("player", "./rectangle.png");
    }

    create() {
        this.players = [];

        for (let i = 0; i < 22; i++) {
            let x = i * 100; // Adjust the spacing as needed
            let player = this.physics.add.sprite(x, 0, "player").setOrigin(0);
            player.setDisplaySize(50, 50);
            this.players.push(player);
        }

        this.amplitude = 300;
        this.frequency = 0.3;
        this.time = 0;
    }

    update(time, delta) {
        this.time += delta * 0.001;

        let yOffset = this.amplitude * Math.sin(this.time * this.frequency * 2 * Math.PI);

        for (let player of this.players) {
            player.setY(400 + yOffset);
        }
    }
}

/*
class Scene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("player", "./rectangle.png");
    }

    create() {
        // Create a group to hold the players for efficient management
        this.players = this.physics.add.staticGroup();

        // Create 22 player sprites and add them to the group
        for (let i = 0; i < 22; i++) {
            let x = i * 100; // Adjust the spacing as needed
            let player = this.players.create(x, 0, "player").setOrigin(0);
            player.setDisplaySize(50, 50);
        }

        // Set initial player position and movement parameters
        this.amplitude = 300;
        this.frequency = 0.3;
        this.time = 0;
    }

    update(time, delta) {
        this.time += delta * 0.001;

        // Calculate the y offset for the sine wave motion
        let yOffset = this.amplitude * Math.sin(this.time * this.frequency * 2 * Math.PI);

        // Update the y position for all players in the group
        this.players.children.iterate(player => {
            player.setY(400 + yOffset);
        });
    }
}
*/