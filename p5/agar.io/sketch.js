var blob;

var blobs = [];
var zoom = 1;
var scale = 1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  blob = new Player(0, 0, 64);
  for (var i = 0; i < 2000; i++) {
    var x = random(-5 * width,5 * width);
    var y = random(-5 * height, 5 * height);
    blobs[i] = new Blob(x, y, 10);
  }
}

function draw() {
  colorMode(HSB)
  background(250, 210, 190);

  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  //zoom = lerp(zoom, newzoom, 0.1);
  //scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length-2; i >=0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1)
      blobs.push(new Blob(random(-width,width), random(-height,height), 16))
  }
}

blob.show();
blob.update();

}