// Enemies our player must avoid
class Enemy {
    constructor(speed, x, y) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    // Draw the enemy on the screen, required method for game
    render() {
        console.log('test');
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite='images/char-boy.png';
        this.x = 200;
        this.y = 405;
        
        // Variable to add/deduct by moving left/right or up/down
        this.horizontal = 101;
        this.vertical = 83;
    }
    
    // Draws the player on the board
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
        // Go back to initial position when the player reaches the water
        if (this.y <= 1) {
            setTimeout(() => { this.reset() }, 100);
        }
        
    }

    // Helper method to set the player back to the original position
    reset() {
        this.x = 200;
        this.y = 405;
    }

    // Moves the player left, right, up, or down
    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0) { this.x -= this.horizontal; }
                break;
            case 'up':
                if (this.y > 0) { this.y -= this.vertical; }
                break;
            case 'right':
                if (this.x < 350) { this.x += this.horizontal; }
                break;
            case 'down':
                if (this.y < 400) { this.y += this.vertical; }
                break;
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player();
let enemyOne = new Enemy(75, 0, 60);
let enemyTwo = new Enemy(150, 0, 145);
let enemyThree = new Enemy(250, 0, 230);
let allEnemies = [enemyOne, enemyTwo, enemyThree];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
