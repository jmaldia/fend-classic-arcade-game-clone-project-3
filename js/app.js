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
        value: function update(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all <computers className=""> </computers> className=""></computers> className=""></computers> className=""></computers>
            if (this.x < 400) {
                this.x += this.speed * 83 * dt;
            } else {
                this.x = 0;
            }
        }

        // Draw the enemy on the screen, required method for game

    }, {
        key: 'render',
        value: function render() {
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
        this.y = 405;

        // Variable to add/deduct by moving left/right or up/down
        this.horizontal = 101;
        this.vertical = 83;
    }

    // Draws the player on the board


    _createClass(Player, [{
        key: 'render',
        value: function render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            // Go back to initial position when the player reaches the water
            if (this.y <= 1) {
                setTimeout(function () {
                    alert('Congrats! You won!');
                }, 20);
                setTimeout(function () {
                    _this.reset();
                }, 15);
            }

            // When player collides with an enemy it resets
            allEnemies.forEach(function (enemy) {
                var enemyHead = enemy.x + 75;
                var enemyTail = enemy.x - 75;

                if (_this.x >= enemyTail && _this.x <= enemyHead && (_this.y - 9 === enemy.y || _this.y - 11 === enemy.y || _this.y - 13 === enemy.y)) {
                    // setTimeout(() => { alert('Sorry, You lost!') }, 20);
                    setTimeout(function () {
                        _this.reset();
                    }, 15);
                }
            });
        }

        // Helper method to set the player back to the original position

    }, {
        key: 'reset',
        value: function reset() {
            this.x = 200;
            this.y = 405;
        }

        // Moves the player left, right, up, or down

    }, {
        key: 'handleInput',
        value: function handleInput(input) {
            switch (input) {
                case 'left':
                    if (this.x > 0) {
                        this.x -= this.horizontal;
                    }
                    break;
                case 'up':
                    if (this.y > 0) {
                        this.y -= this.vertical;
                    }
                    break;
                case 'right':
                    if (this.x < 350) {
                        this.x += this.horizontal;
                    }
                    break;
                case 'down':
                    if (this.y < 400) {
                        this.y += this.vertical;
                    }
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
var enemyOne = new Enemy(1, 0, 60);
var enemyTwo = new Enemy(1.25, 0, 60);
var enemyThree = new Enemy(1.75, 0, 60);
var enemyFour = new Enemy(.75, 0, 145);
var enemyFive = new Enemy(2.1, 0, 145);
var enemySix = new Enemy(2, 0, 230);
var allEnemies = [enemyOne, enemyThree, enemyFour, enemyFive, enemySix];

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
