
const canvas = document.querySelector('#drawingSketch');

const area = canvas.getContext('2d');
area.fillStyle = "rgb(32, 32, 32)";
area.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', finishDraw);

let painting = false;
let mousePosition = {
  x: 0,
  y: 0,
};

function draw(event) {
  if (!painting) {
    return;
  }
  area.beginPath();
  area.strokeStyle = color;
  area.lineCap = 'round';
  area.lineWidth = choosingWidth.value;
  area.moveTo(mousePosition.x, mousePosition.y);
  let target = this.getBoundingClientRect();
  let x = event.clientX - target.left;
  let y = event.clientY - target.top;
  area.lineTo(x, y);
  mousePosition.x = x;
  mousePosition.y = y;
  area.stroke();
}

function startDraw(event) {
  painting = true;
  let target = this.getBoundingClientRect();
  let x = event.clientX - target.left;
  let y = event.clientY - target.top;
  mousePosition.x = x;
  mousePosition.y = y;
}

function finishDraw() {
  painting = false;
}

// For setting colors
document.querySelector('#base').addEventListener('click', setColor);
const colors = document.querySelectorAll('.color');
colors.forEach((color) => color.addEventListener('click', setMostUsedColor));

let color = '#ffffff'

function setColor() {
  color = this.value + '';
}

function setMostUsedColor() {
  color = this.dataset.color;
}
// For setting width
const choosingWidth = document.querySelector('#width');

const colorButton = document.querySelector('.colorButton');
const widthButton = document.querySelector('.widthButton');

colorButton.addEventListener('click', function () {
  document.querySelector('#base').classList.toggle('show');
  this.parentElement.classList.toggle('open');
});

widthButton.addEventListener('click', function () {
  document.querySelector('#width').classList.toggle('show');
  this.parentElement.classList.toggle('open');
});
// For deleting
const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click', function () {
  if(checkbox.checked === true){
    color = 'white';
  }else{
    color = 'rgb(32, 32, 32)';
  }
  choosingWidth.value = 15;
  deleteButton.classList.add('makeSmaller');
  setTimeout(() => deleteButton.classList.remove('makeSmaller'), 100);
});
// For download
const downloadButton = document.querySelector('.download');
downloadButton.addEventListener('click', download);

function download() {
  downloadButton.classList.add('makeSmaller');
  setTimeout(() => downloadButton.classList.remove('makeSmaller'), 100);
  let link = document.createElement('a');
  link.download = 'myPrettyImage.png';

  canvas.toBlob(function(blob) {
    link.href = URL.createObjectURL(blob);
    link.click();
    delete link;
  },'image/png');
}
//For choosing theme
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('click', updateTheme);

const content = document.querySelector('.content');



function updateTheme(){
  if(checkbox.checked === true){
    area.fillStyle = "white";
    area.fillRect(0, 0, canvas.width, canvas.height);
  }else{
    area.fillStyle = "rgb(32, 32, 32)";
    area.fillRect(0, 0, canvas.width, canvas.height);
  }
  content.classList.toggle('content-light');
  canvas.classList.toggle('canvas-light');
  document.querySelectorAll('.chooseBox').forEach((box) => box.classList.toggle('box-light'));
  document.querySelector('.logo').classList.toggle('logo-light');
  document.querySelectorAll('ion-icon').forEach((icon) => icon.classList.toggle('icon-light'));
  color = 'white';

  
}
