'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Enemies our player must avoid
var Enemy = function () {
    function Enemy(speed, x, y) {
        _classCallCheck(this, Enemy);

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


    _createClass(Enemy, [{
        key: 'update',
        value: function update(dt) {}
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.


        // Draw the enemy on the screen, required method for game

    }, {
        key: 'render',
        value: function render() {
            console.log('test');
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }]);

    return Enemy;
}();

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update(dt) {}
    }, {
        key: 'render',
        value: function render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }, {
        key: 'handleInput',
        value: function handleInput(input) {
            switch (input) {
                case 'left':
                    console.log('left');
                    break;
                case 'up':
                    console.log('up');
                    break;
                case 'right':
                    console.log('right');
                    break;
                case 'down':
                    console.log('down');
                    break;
            }
        }
    }]);

    return Player;
}();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var player = new Player();
var enemyOne = new Enemy(75, 0, 60);
var enemyTwo = new Enemy(150, 0, 145);
var enemyThree = new Enemy(250, 0, 230);
var allEnemies = [enemyOne, enemyTwo, enemyThree];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
