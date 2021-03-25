class ScrollingSprite {
    constructor(image,x,y,width, height, speed){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    scroll(){
        this.x -= this.speed;
        if(this.x <= -this.width){
            this.x = this.width - 1;
        }
    }

    draw(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

window.onload = () => {

    const canvas = document.getElementById("render-canvas");
    const ctx = canvas.getContext('2d');

    const backgroundImage = new Image();
    backgroundImage.src = 'space.jpg';
    backgroundImage.position = { x: 0, y: 0}

    const backgroudSprite = new ScrollingSprite(backgroundImage, 0,0, canvas.width, canvas.height, 1);
    const backgroundSprite2 = new ScrollingSprite(backgroundImage, -canvas.width, 0, canvas.width, canvas.height, 1);

    const spriteArray = [
        backgroudSprite,
        backgroundSprite2,
       
    ];

    // Draw loop
    const render = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);

        spriteArray.forEach(sprite => {
            sprite.scroll();
            sprite.draw(ctx);
        });

        window.requestAnimationFrame(render);
    }
    render();
}