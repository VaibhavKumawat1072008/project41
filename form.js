class Form{
    constructor(){
       this.input = createInput("").attribute("placeHolder","Name");
       this.button = createButton('Play');
       this.greeting = createElement('h5');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(width / 2 - 250, height / 2 - 330);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(width / 2 - 100, height / 2 - 50);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');
        this.button.position(width / 2 - 90, height / 2 + 50);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, height - 100);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html(`Hello ${player.name}
            </br>Please wait for the second player to join.
            </br>Thanks you are the best.`);
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref("/").set({
                gameState: 0,
                playerCount: 0,
                playerAtEnd: 0
            });


            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            window.location.reload();
        });

    }
}