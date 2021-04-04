class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution : 0.2,
            friction : 1.4,
            density : 2
        
        }
        this.body = Bodies.rectangle(x,y,20, height, options)
        this.width = 20
        this.height = height
        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("brown")
        stroke("black")
        strokeWeight(4)
        rect(0,0, this.width, this.height)
        pop()

    }
    
}