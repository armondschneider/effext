function setup() {
    pixelDensity(1);
    // Adjust canvas size based on mobile device dimensions
    let canvasWidth, canvasHeight;
    
    // Detect mobile devices by checking if the touch is available or if the width is small
    if ('ontouchstart' in window || windowWidth < 768) {
      canvasWidth = windowWidth * 0.9; // Use 90% of the screen width
      canvasHeight = canvasWidth * 1.5; // Make the height 1.5 times the width for a longer look
    } else {
      // For non-mobile devices
      canvasWidth = windowWidth / 3;
      canvasHeight = canvasWidth * (4 / 3);
    }
  
    canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('canvas-holder');
  
    noStroke();
  
    cam = createCapture(VIDEO);
    cam.size(width, height); // Match the size of the canvas
    cam.hide();
  }
  
  function windowResized() {
    // Adjust canvas size on window resize, with mobile dimensions in mind
    if ('ontouchstart' in window || windowWidth < 768) {
      let canvasWidth = windowWidth * 0.9;
      let canvasHeight = canvasWidth * 1.5;
      resizeCanvas(canvasWidth, canvasHeight);
      cam.size(canvasWidth, canvasHeight);
    } else {
      let canvasWidth = windowWidth / 3;
      let canvasHeight = canvasWidth * (4 / 3);
      resizeCanvas(canvasWidth, canvasHeight);
      cam.size(canvasWidth, canvasHeight);
    }
  
    cam.hide();
  }
  