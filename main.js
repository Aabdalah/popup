const popupButton = document.getElementById("popup-button");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup-close");
const mover = document.getElementById("move");
let startY;
popupButton.addEventListener("click", function() {
  popup.style.animation = "move 1s ease forwards";
  popup.style.display = "block";
  popup.style.top = "70%";
});
popupClose.addEventListener("click", function() {
  popup.style.animation =  "close 1s ease forwards";
});
popupClose.addEventListener("touchstart", function() {
  popup.style.animation =  "close 1s ease forwards";
});

let isDragging = false;
let  lastY;

mover.addEventListener("mousedown", function(e) {
  isDragging = true;
  lastY = e.clientY;
  popup.style.animation = "none";
});
mover.addEventListener("touchstart", function(e) {
  e.preventDefault();
  isDragging = true;
  lastY = e.touches[0].clientY;
  popup.style.animation = "none";
});

popup.addEventListener("mousemove", function(e) {
  if (isDragging) {
    let deltaY = e.clientY - lastY;
    let rect = popup.getBoundingClientRect();
    popup.style.top = rect.top + deltaY + "px";
    lastY = e.clientY;
  }
});
popup.addEventListener("touchmove", function(e) {
  e.preventDefault();
  if (isDragging) {
    let deltaY = e.touches[0].clientY - lastY;
    let rect = popup.getBoundingClientRect();
    popup.style.top = rect.top + deltaY + "px";
    lastY = e.touches[0].clientY;
  }
});

popup.addEventListener("mouseup", function() {
  isDragging = false;  
  if(lastY>450){
    popup.style.animation =  "close 1s ease forwards";
  }
});
popup.addEventListener("touchend", function() {
  isDragging = false;
  if(lastY>350){
    popup.style.animation =  "close 1s ease forwards";
  }
});



const popupButton1 = document.getElementById("popup-button-1");
const popup1 = document.getElementById("popup-1");
const popupClose1 = document.querySelector(".popup-close-1");
console.log(popupClose1)
const mover1 = document.getElementById("move-1");
let startY1;
popupButton1.addEventListener("click", function() {
  popup1.style.animation = "move 1s ease forwards";
  popup1.style.display = "block";
  popup1.style.top = "70%";
});
popupClose1.addEventListener("click", function() {
  popup1.style.animation =  "close 1s ease forwards";
});
popupClose1.addEventListener("touchstart", function() {
  popup1.style.animation =  "close 1s ease forwards";
});

let isDragging1 = false;
let  lastY1;

mover1.addEventListener("mousedown", function(e) {
  isDragging1 = true;
  lastY1 = e.clientY;
  popup1.style.animation = "none";
});
mover1.addEventListener("touchstart", function(e) {
  e.preventDefault();
  isDragging1 = true;
  lastY1 = e.touches[0].clientY;
  popup1.style.animation = "none";
});

popup1.addEventListener("mousemove", function(e) {
  if (isDragging1) {
    let deltaY1 = e.clientY - lastY1;
    let rect1 = popup1.getBoundingClientRect();
    popup1.style.top = rect1.top + deltaY1 + "px";
    lastY1 = e.clientY;
  }
});
popup1.addEventListener("touchmove", function(e) {
  e.preventDefault();
  if (isDragging1) {
    let deltaY1 = e.touches[0].clientY - lastY1;
    let rect1 = popup1.getBoundingClientRect();
    popup1.style.top = rect1.top + deltaY1 + "px";
    lastY1 = e.touches[0].clientY;
  }
});

popup1.addEventListener("mouseup", function() {
  isDragging1 = false;  
  if(lastY1>450){
    popup1.style.animation =  "close 1s ease forwards";
  }
});
popup1.addEventListener("touchend", function() {
  isDragging1 = false;
  if(lastY1>350){
    popup1.style.animation =  "close 1s ease forwards";
  }
});



const popupButton2 = document.getElementById("popup-button-2");
const popup2 = document.getElementById("popup-2");
const popupClose2 = document.querySelector(".popup-close-2");
const mover2 = document.getElementById("move-2");
let startY2;
popupButton2.addEventListener("click", function() {
  popup2.style.animation = "move 1s ease forwards";
  popup2.style.display = "block";
  popup2.style.top = "70%";
});
popupClose2.addEventListener("click", function() {
  popup2.style.animation =  "close 1s ease forwards";
});
popupClose2.addEventListener("touchstart", function() {
  popup2.style.animation =  "close 1s ease forwards";
});

let isDragging2 = false;
let  lastY2;

mover2.addEventListener("mousedown", function(e) {
  isDragging2 = true;
  lastY2 = e.clientY;
  popup2.style.animation = "none";
});
mover2.addEventListener("touchstart", function(e) {
  e.preventDefault();
  isDragging2 = true;
  lastY2 = e.touches[0].clientY;
  popup2.style.animation = "none";
});

popup2.addEventListener("mousemove", function(e) {
  if (isDragging2) {
    let deltaY2 = e.clientY - lastY2;
    let rect2 = popup2.getBoundingClientRect();
    popup2.style.top = rect2.top + deltaY2 + "px";
    lastY2 = e.clientY;
  }
});
popup2.addEventListener("touchmove", function(e) {
  e.preventDefault();
  if (isDragging2) {
    let deltaY2 = e.touches[0].clientY - lastY2;
    let rect2 = popup2.getBoundingClientRect();
    popup2.style.top = rect2.top + deltaY2 + "px";
    lastY2 = e.touches[0].clientY;
  }
});

popup2.addEventListener("mouseup", function() {
  isDragging2 = false;  
  if(lastY2>450){
    popup2.style.animation =  "close 1s ease forwards";
  }
});
popup2.addEventListener("touchend", function() {
  isDragging2 = false;
  if(lastY2>350){
    popup2.style.animation =  "close 1s ease forwards";
  }
});