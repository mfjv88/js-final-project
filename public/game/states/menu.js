'use strict';

function creatingMenu(x, y, text, credit, play, tab, chat){
  var mainMenu = {
      create: function() {
          game.add.image(0, 0, 'background');
          this.clouds = this.game.add.tileSprite(0,
              this.game.height - 550,
              this.game.width,
              this.game.cache.getImage('clouds').height,
              'clouds'
          );

          var title = this.game.add.text(x, y, text, {
              font: "32px Press Start 2P",
              fill: "#000000"
          });
          title.setShadow(-3, 3, 'rgba(0,0,0,0.2)', 0);

          var instructions = this.game.add.text(150, 300, 'Tap SPACEBAR or TAP to JUMP. \n\nTo start the game, use the same function.', {
              font: "14px Press Start 2P",
              align: "center",
              fill: "#000000"
          });
          instructions.setShadow(-3, 3, 'rgba(0,0,0,0.2)', 0);

          var credits = this.game.add.text(30, 500, "Credits:\nDesigns: José Daniel 'Mansuper' Vélez\nProgramming: Miguel Vacas\n" + credit , {
              font: "10px Press Start 2P",
              align: "left",
              fill: "#000000"
          });
          credits.setShadow(-3, 3, 'rgba(0,0,0,0.2)', 0);

          var hs = this.game.add.text(600, 20, "High Score: " + highscore, {
              font: "14px Press Start 2P",
              fill: "#000"
          });

          spaceKey = game.input.keyboard.addKey(
              Phaser.Keyboard.SPACEBAR
          );

          tabButton = game.input.keyboard.addKey(
              Phaser.Keyboard.TAB
          );

          chatButton = game.input.keyboard.addKey(
              Phaser.Keyboard.C
          );

          if (play != 'play_jinete'){
            jinete.stop();
          } else {
            if(jinete.isPlaying == false) {
                jinete.play();
            } else {
              jinete.resume();
            }
          }
      },

      update: function() {
          this.clouds.tilePosition.x -= 0.50;

          if (this.game.input.activePointer.justPressed() || spaceKey.isDown === true) {
              game.state.start(play);
          }
          if (tabButton.isDown === true) {
              if (play == 'play_jinete'){
                  jinete.stop();
              }
              this.game.state.start(tab);
          }
          if (chatButton.isDown === true) {
              if (play == 'play_jinete'){
                  jinete.stop();
              }
              this.game.state.start(chat);
          }
      },
  };

  return mainMenu;
}
