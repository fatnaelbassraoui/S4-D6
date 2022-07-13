function cambiaH1() {

   document.getElementById("primo").innerHTML = "<em>Questo negozio vende giochi per bambini</em>";
}

function cambiaBodyColor() {
   let elements = document.querySelectorAll("body");
   for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = 'pink';
   }
}

function cambiaIndirizzo() {
   document.getElementById("terzo").innerHTML = "Via della santissima ann. 102, lucca 5110";
}

function imgOpacity() {
   let myImg = document.getElementsByTagName("img");
   for (i = 0; i < myImg.length; i++) {
      myImg[i].style.opacity = "0.1";

   }
}

function richiamaClassi(){
   let elem = document.getElementsByClassName("price")
   let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
   for (i=0; i< elem.length;i++){
    elem[i].setAttribute("style","color: rgb(" + red + ", " + green + ", " + blue + ")") ;

   }
}





