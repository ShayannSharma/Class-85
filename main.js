canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
roverx=220
rovery=270
roverWidth=100
roverHeight=100
background = ["BG1.jpg", "BG2.jpg", "BG3.jpg", "BG4.jpg"]
randomNumber = Math.floor(Math.random()*4)
backgroundImage=background[randomNumber]
roverImage="rover.png"
function add(){
    bg=new Image()
    bg.onload=uploadBg
    bg.src=backgroundImage
    rover=new Image()
    rover.onload=uploadRover
    rover.src=roverImage
}
function uploadBg() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadRover() {
    ctx.drawImage(rover,roverx,rovery,roverWidth,roverHeight)
}
window.addEventListener('keydown',myKeyDown)
function myKeyDown(e) {
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed=="37") {
        console.log("left")
        left()
    }
if (keypressed=="38") {
    console.log("up")
    up()
}
if (keypressed=="39") {
    console.log("right")
    right()
}
if (keypressed=="40") {
    console.log("down")
    down()
}
}
function left() {
    if (roverx > 0) {
        roverx = roverx - 10
        console.log("When Left Arrow is pressed, X = "+ roverx + " Y = " + rovery +".")
        uploadBg()
        uploadRover()

    }
}
function right() {
    if (roverx < 700) {
        roverx = roverx + 10
        console.log("When Right Arrow is pressed, X = "+ roverx + " Y = " + rovery +".")
        uploadBg()
        uploadRover()
        
    }
}
function up() {
    if (rovery > 0) {
        rovery = rovery - 10
        console.log("When Up Arrow is pressed, X = "+ roverx + " Y = " + rovery +".")
        uploadBg()
        uploadRover()
        
    }
}
function down() {
    if (rovery < 500) {
        rovery = rovery + 10
        console.log("When Down Arrow is pressed, X = "+ roverx + " Y = " + rovery +".")
        uploadBg()
        uploadRover()
        
    }
}