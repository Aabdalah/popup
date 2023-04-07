const popupButton = document.getElementById("popup-button");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup-close");

popupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

popupClose.addEventListener("click", function() {
  popup.style.display = "none";
});

let isDragging = false;
let  lastY;

popup.addEventListener("mousedown", function(e) {
  isDragging = true;
  lastY = e.clientY;
});
popup.addEventListener("touchstart", function(e) {
  e.preventDefault();
  isDragging = true;
  lastY = e.touches[0].clientY;
});

popup.addEventListener("mousemove", function(e) {
  if (isDragging) {
    let deltaY = e.clientY - lastY;
    let rect = popup.getBoundingClientRect();
    if(rect.top + deltaY>0){
      popup.style.top = rect.top + deltaY + "px";
    }
    lastY = e.clientY;
  }
});
popup.addEventListener("touchmove", function(e) {
  e.preventDefault();
  if (isDragging) {
    let deltaY = e.touches[0].clientY - lastY;
    let rect = popup.getBoundingClientRect();
    if(rect.top + deltaY>0){
      popup.style.top = rect.top + deltaY + "px";
    }
    
    lastY = e.touches[0].clientY;
  }
});

popup.addEventListener("mouseup", function() {
 
  console.log(lastY)
  isDragging = false;
  if(lastY>400){
    popup.style.display='none';
    popup.style.top=100+"px"
  }
  if(lastY<400 && lastY>100){
    popup.style.top=100+"px"
  }
  if(lastY<100){
    popup.style.top=0+"px";
  }
  
});
popup.addEventListener("touchend", function() {
  console.log(lastY)
  isDragging = false;
  if(lastY>400){
    popup.style.display='none';
    popup.style.top=100+"px"
  }
  if(lastY<400 && lastY>100){
    popup.style.top=100+"px"
  }
  if(lastY<100){
    popup.style.top=0+"px";
  }
});
