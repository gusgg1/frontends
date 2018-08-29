
const canvas = document.querySelector('#draw');
const div =  document.querySelector('div');
const ctx = canvas.getContext('2d'); // we can also get 3d

//canvas.width = div.innerWidth; // window.innerWidth;
//canvas.height = div.innerHeight; // window.innerHeight;
ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply'; // creates blending effect

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
  //if (!isDrawing) return; // stop the fn from running when user not moused down
  if (isDrawing) { 
    console.log(e); // here we see the mousemove event info
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // ctx.lineWidth = hue;

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; // this is same as 2 lines below
    // lastX = e.offsetX;
    // lastY = e.offsetY
    hue++;
    if (hue === 360) {
      hue = 0;
    }

    // making the line big small depending on its current lineWidth
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
