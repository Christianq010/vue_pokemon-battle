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
        newGame: "Start a new game",
        battleOptions: ["Fight", "Pokemon", "Item", "Run"],
        userAttackDamage: [15,40,50,25],
        opponentAttacks: ["Tackle", "Iron Tail", "Rock Slide", "Slam"],
        opponentAttackDamage: [15,40,50,25],
        fightOptions: ["Attack", "Special Attack", "Heal"],
        endOptions: ["Yes", "No"],
        fightOn: false,
        optionsOn: true,
        endOn: false,
    userHpBar: {
        width: "100%"
    },
    opponentHpBar: {
        width: "100%"
    }
    },
    methods:{
      processOption: function(option){
        switch(option){
          case 1:
            //handle fight
            this.optionsOn = false
            this.fightOn = true
          break;
          case 2:
            //handle pokemon
            setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?"
        }, 2000);
            
            this.battleText = "You're our only hope " + this.userPokemon + "!"
            
          break;
          case 3:
            //handle item
            setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?"
        }, 2000);
            this.battleText = "No items in bag."
          break;
          case 4:
            //handle run
            setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?"
        }, 2000);
            this.battleText = "Can't escape."
          break;
        }
      },
      processAttack: function(attack){
        switch(attack){
          case 1:
            //handle scratch
            this.opponentHP -= this.userAttackDamage[attack-1]
            //edit if HP !== 0
            this.opponentFill -= (this.userAttackDamage[attack-1])
            if(this.opponentFill <= 0){
              this.opponentHpBar.width = "0%"
            } else{
              this.opponentHpBar.width = this.opponentFill + "%"
            }   
            if(this.checkOpponentHp()){
              this.battleText = this.opponentPokemon + " fainted! Play again?"
              this.processFaint(1)
            } else if(this.checkOpponentHp() === false) {
              
                setTimeout(() => {
                this.processOpponentAttack()
                }, 2000);
            
              this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
              //call opponent attack function
            setTimeout(() => { 
              if(this.userAlive){
                setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
                }, 2000);
              }
             }, 2000);
            }
          break;
          case 2:
            //handle fly
             this.opponentHP -= this.userAttackDamage[attack-1]
             //edit if HP !== 0
            this.opponentFill -= (this.userAttackDamage[attack-1])
            if(this.opponentFill <= 0){
              this.opponentHpBar.width = "0%"
            } else{
              this.opponentHpBar.width = this.opponentFill + "%"
            }
              if(this.checkOpponentHp()){
              this.battleText = this.opponentPokemon + " fainted! Play again?"
              this.processFaint(1)
            } else if(this.checkOpponentHp() === false) {
              
                setTimeout(() => {
                this.processOpponentAttack()
                }, 2000);
            
              this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
              //call opponent attack function
            setTimeout(() => { 
              if(this.userAlive){
                setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
                }, 2000);
              }
             }, 2000);
            }
          break;
          case 3:
            //handle flamethrower
             this.opponentHP -= this.userAttackDamage[attack-1]
             //edit if HP !== 0
            this.opponentFill -= (this.userAttackDamage[attack-1])
            if(this.opponentFill <= 0){
              this.opponentHpBar.width = "0%"
            } else{
              this.opponentHpBar.width = this.opponentFill + "%"
            }
              if(this.checkOpponentHp()){
              this.battleText = this.opponentPokemon + " fainted! Play again?"
              this.processFaint(1)
            } else if(this.checkOpponentHp() === false) {
              
                setTimeout(() => {
                this.processOpponentAttack()
                }, 2000);
            
              this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
              //call opponent attack function
            setTimeout(() => { 
              if(this.userAlive){
                setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
                }, 2000);
              }
             }, 2000);
            }
          break;
          case 4:
            //handle ember
             this.opponentHP -= this.userAttackDamage[attack-1]
             //edit if HP !== 0
            this.opponentFill -= (this.userAttackDamage[attack-1])
            if(this.opponentFill <= 0){
              this.opponentHpBar.width = "0%"
            } else{
              this.opponentHpBar.width = this.opponentFill + "%"
            }
            if(this.checkOpponentHp()){
              this.battleText = this.opponentPokemon + " fainted! Play again?"
              this.processFaint(1)
            } else if(this.checkOpponentHp() === false) {
              
                setTimeout(() => {
                this.processOpponentAttack()
                }, 2000);
            
              this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
              //call opponent attack function
            setTimeout(() => { 
              if(this.userAlive){
                setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
                }, 2000);
              }
             }, 2000);
            }
          break;
        }
      },
      checkOpponentHp: function(){
        if(this.opponentHP <= 0){
          //fainted
          return true
          
        } else{
          //battle continues
          return false
        }
      },
      processFaint: function(pokemon){
        this.fightOn = false
        this.endOn = true;
        if(pokemon === 1){
          this.opponentAlive = false
        } else {
          this.userHP = 0
          this.userAlive = false
        }
      },
      processOpponentAttack: function(){
        //generate random number
        var random = Math.floor((Math.random() * 4) + 1)
        //do damage to user
        this.userHP -=  this.opponentAttackDamage[random-1]
        this.userFill -= (this.opponentAttackDamage[random-1])
        if(this.userFill <= 0){
          this.userHpBar.width = "0%"
        } else{
          this.userHpBar.width = this.userFill + "%"
        } 
         if(this.checkUserHp()){
           //add battle text
           this.battleText = this.userPokemon + " fainted! Play again?"
           this.processFaint(2)
         } else if(this.checkOpponentHp() === false) {  
           //continue battle
           this.battleText = this.opponentPokemon + " used " + this.opponentAttacks[random-1]  + "!"
           this.fightOn = false
           this.optionsOn = true
         }
      },
      checkUserHp: function(){
         if(this.userHP <= 0){
          //fainted
          return true
          
        } else{
          //battle continues
          return false
        }
      },
      resetBattle: function(){
        //reset data to start new game
        this.endOn = false;
        this.fightOn = false;
        this.optionsOn = true;
        this.battleText = "What will Meganium do?"
        this.userAlive = true
        this.opponentAlive = true
        this.userHP = 100
        this.opponentHP = 100
        this.userFill = 100
        this.opponentFill = 100
        this.userHpBar.width = "100%"
        this.opponentHpBar.width = "100%"
      }
    }
    
  })
  
  