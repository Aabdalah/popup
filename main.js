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
  popup.style.display = "none";

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

});
popup.addEventListener("touchend", function() {
  isDragging = false;
  console.log(lastY)
  if(lastY>450){
    popup.style.animation =  "close 1s ease forwards";
  }
});

