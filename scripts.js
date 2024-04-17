window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;


    class InputHandler {
        constructor(){
            this.keys = new Set();
            document.addEventListener("keydown", e => {
            this.keys.add(e.key);
            console.log("Key pressed: ", this.keys);
            });    
        }
    }


    class Player {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 50;
            this.height = 50;
            this.x = 0;
            this.y = this.gameHeight - this.height;
        }
        draw(context){
            context.fillStyle = "white";
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Background {

    }

    class displayStatusText {

    }

    const player = new Player(canvas.width, canvas.height);
    const inputHandler = new InputHandler();

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        player.draw(ctx);

    }

    animate();

});