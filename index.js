import  Matter  from "./matter.min"

// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')
// const CANVAS_WIDTH = canvas.width = 600
// const CANVAS_HEIGHT = canvas.height = 600
// console.log(ctx)

// class Particle {
//     constructor(x,y,color,size){
//         this.x = x
//         this.y = y
//         this.color = color
//         this.size = size
//     }
    
// }


// function animate(){
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     ctx.moveTo(0,0)
//     ctx.lineTo(0,450)
//     ctx.lineTo(295,600)
//     ctx.lineWidth = 5
//     ctx.stroke()
//     ctx.moveTo(600,0)
//     ctx.lineTo(600,450)
//     ctx.lineTo(305,600)
//     ctx.stroke()
//     requestAnimationFrame(animate)
// }
// animate()
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);





