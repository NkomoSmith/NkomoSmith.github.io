let bubble = [];

function setup() {
    createCanvas(500,400);

        for (i = 0; i < 100; i++) {

            bubble[i] = {
                x: random(0, width),
                y: random(0, height),
                size: random(0, 40),
                color: random(0, 255)
            }
        }
}
function draw() {
    background(0);

    for (i = 0; i < 100; i++) {

        fill(bubble[i].color);
        ellipse(bubble[i].x, bubble[i].y, bubble[i].size)

        bubble[i].x += random(-2, 2);
        bubble[i].y += random(-2, 2);
    }
}