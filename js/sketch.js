let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('position', 'fixed');
    canvas.style('z-index', '-1');
    canvas.style('top', '0');
    canvas.style('left', '0');
    background(255, 255, 255);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
}

function draw() {}

function mouseMoved() {
    drawPencilStroke(mouseX, mouseY);
    return false;
}

function drawPencilStroke(_x, _y) {
    let r = random(0, 100);
    let g = random(0, 100);
    let b = random(150, 200);
    let alpha = 50;
    
    stroke(r, g, b, alpha);
    strokeWeight(random(2, 3));
    
    for (let i = 0; i < 5; i++) {
        let offsetX = random(-5, 5);
        let offsetY = random(-5, 5);
        line(_x + offsetX, _y + offsetY, 
             _x + offsetX + random(-15, 15), 
             _y + offsetY + random(-15, 15));
    }
}
