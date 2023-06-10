let scanner = document.querySelector(".scanner");
let scannerNodesHTML = document.getElementsByClassName('scanner__node');
let scannerNodes = Array.prototype.slice.call(scannerNodesHTML);
let i = 0;

/* additional variable */
let reversing = false;

scannerNodes.forEach(scannerNode => {
  scannerNode.classList.toggle("dark-red");
});

changeColors();

function changeColors(){
  setInterval(function(){
    if(!reversing){
      if(i > 1){
        scannerNodes[i-2].classList.toggle("red");
      }

      if(i > 0){
        scannerNodes[i-1].classList.toggle("hot-red");
        scannerNodes[i-1].classList.toggle("red");
      }

      scannerNodes[i].classList.toggle("hot-red");

      if(i == 7){
        reversing = true;
      } else {
        i++;
      }
      
    } else {
      
      if(i > 1){
        scannerNodes[i-2].classList.toggle("red");
      }

      if(i > 0){
        scannerNodes[i-1].classList.toggle("red");
        scannerNodes[i-1].classList.toggle("hot-red");
      }

      scannerNodes[i].classList.toggle("hot-red");

      if(i == 0){
        reversing = false;
      } else {
        i--;
      }
    }
    
  }, 100)  
}