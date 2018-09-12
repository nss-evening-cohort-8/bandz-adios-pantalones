
const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
}


/// Media - Image Gallery ///

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
};

function showDivs(n) {
  var newImages = document.getElementsByClassName("media-images");
  if ( n > newImages.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = newImages.length}
  for (i = 0; i < newImages.length; i++) {
     newImages[i].style.display = "none";  
  }
  newImages[slideIndex-1].style.display = "block";  
}

/// Media - Album Cover Objects ///
