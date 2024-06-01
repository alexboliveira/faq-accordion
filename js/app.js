var pegar = document.getElementsByClassName("aperte");
var i;

for (i = 0; i < pegar.length; i++) {
  pegar[i].addEventListener("click", function() {
    var mostrar = this.nextElementSibling;

    console.log(this);
    if (mostrar.style.display === "block") {
      this.children[1].src= '../assets/images/icon-plus.svg';
      mostrar.style.display = "none";
    } else {
      this.children[1].src = '../assets/images/icon-minus.svg';
      mostrar.style.display = "block";
    }
  });
}







