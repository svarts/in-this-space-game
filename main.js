const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor(){
    this.position = {
      x: 200,
      y: 200
    }
    this.velocity = { //speed of the object
      x: 0,
      y: 0
    }

    const image = new Image()
    image.src = './img/shuttle.png'

    this.image = image
    this.width = 100
    this.height = 100
  }
  draw(){
    /* c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height) */
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}
const player = new Player();
player.draw()

function animate(){
  requestAnimationFrame(animate)
  c.fillRect(0, 0, canvas.width, canvas.height) //changes background to black
  player.draw()
}

animate()
