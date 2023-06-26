const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Width and height
canvas.width = window.innerWidth
canvas.height = window.innerHeight


// Gravity and Environmental Variables

const gravity = 2

//KEY DETECTION
const keys = {
    right: {
        isPressed: false
    },
    left: {
        isPressed: false
    }

}

class Player {

    constructor(){
        this.position = {
            x: 100,
            y: 10,
        }

        this.velocity = {
            x: 0,
            y: 1,
        }

        this.width = 50
        this.height = 50
        this.moveSpeed = 20
    }
    draw(){
        ctx.fillStyle = "dodgerblue"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
            // GRAVITY FUNCTIONALITY
        player.position.y += this.velocity.y
        player.position.x += this.velocity.x
        if(player.position.y + player.height + player.velocity.y > canvas.height){
            player.velocity.y = 0
        }
        else{
            this.velocity.y += gravity

        }
        this.draw()
    }
}


const player = new Player()






//MOVEMENTS

window.addEventListener('keydown', (key) => {

    switch (key.keyCode) {
        //up
        case 87:
            player.velocity.y -= 50;
            console.log('Up')
            break;
        //left
            case 65:
            keys.left.isPressed = true
            
            break;
        //Down
            case 83:

            break;
        //Right
            case 68:
            keys.right.isPressed = true
            break;

    }
})

window.addEventListener('keyup', (key) => {

    switch (key.keyCode) {
        //up
        // case 87:
        //     player.velocity.y -= 50;
        //     console.log('Up')
        //     break;
        //left
            case 65:
            keys.left.isPressed = false
            break;
        //Down
            case 83:

            break;
        //Right
            case 68:

            keys.right.isPressed = false
            break;

    }
})


class Platform {
    constructor(x,y){
        this.position = {
            x: 300,
            y: 500
        }
        this.width = 500
        this.height = 10;
    }

    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}



const platform = new Platform()

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.update()

// AVOID SLIPPING MECHANCICS

    if(keys.right.isPressed){
        player.velocity.x = player.moveSpeed 

    }
    else if(keys.left.isPressed){
        player.velocity.x = -player.moveSpeed 
    }
    else{
        player.velocity.x = 0
    }
    if(
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width &&
        player.position.y + player.height <= platform.position.y  &&
        player.position.y + player.height + player.velocity.y >= platform.position.y


        ){
        player.velocity.y = 0
    }

    platform.draw()
    
    
}

animate()