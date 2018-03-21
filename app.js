// Vue imported via CDN on index.html file

var app = new Vue({
    el: '#app',
    data: {
        userPokemonSrc: "./img/Meganium.png",
        opponentPokemonSrc: "./img/Claydol.png",
        userPokemon: "Meganium",
        opponentPokemon: "Claydol",
        userAlive: true,
        opponentAlive: true,
        opponentFill: 100,
        userFill: 100,
        userHP: 100,
        startUserHP: 100,
        opponentHP: 100,
        userLevel: 40,
        opponentLevel: 35,
        battleText: "What will Meganium do?",
        newGame: "Start Battle",
        battleOptions: ["Fight", "Pokemon", "Item", "Run"],
        userAttackDamage: [05,10,15,25],
        opponentAttacks: ["Tackle", "Iron Tail", "Rock Slide", "Slam"],
        opponentAttackDamage: [05,10,15,25],
        fightOptions: ["Attack", "Special Attack", "Heal"],
        endOptions: ["Yes", "No"],
        gameIsRunning: false,
        optionsOn: false,
        fightOn: false,
        endOn: false,
    userHpBar: {
        width: "100%"
    },
    opponentHpBar: {
        width: "100%"
    }
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.userHP = 100;
            this.opponentHP = 100;
        },
        attack: function () {
            // Player Attacks (reduce opponentHP)
            this.opponentHP -= this.userDamage();
            // Player Wins
            if (this.pickWinner()) {
                return;
            }
 
            // Opponent Attacks Player (reduce playerHP)
            this.userHP -= this.opponentDamage();
            // Player defeated
            this.pickWinner();
        },
        specialAttack: function () {
            var attack = this.userAttackDamage[Math.floor(Math.random()*this.userAttackDamage.length)];
            console.log(attack);
        },
        heal: function () {

        },
        run: function () {

        },
        // Randomly select an attack number from our array
        userDamage: function () {
            return this.userAttackDamage[Math.floor(Math.random()*this.userAttackDamage.length)];
        },
        opponentDamage: function () {
            return this.opponentAttackDamage[Math.floor(Math.random()*this.opponentAttackDamage.length)];
        },
        // Choose our winner
        pickWinner: function () {
            if (this.opponentHP <= 0) {
                if (confirm((this.opponentPokemon) + ' has fainted! You Won! New Battle?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.userHP <= 0) {
                if (confirm((this.userPokemon) + ' has fainted! You Lost! New Battle?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})
