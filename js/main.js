
const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};


/// Media - Image Gallery ///

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// };

// function showDivs(n) {
//   var newImages = document.getElementsByClassName("media-images");
//   if ( n > newImages.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = newImages.length}
//   for (i = 0; i < newImages.length; i++) {
//      newImages[i].style.display = "none";  
//   }
//   newImages[slideIndex-1].style.display = "block";  
// };

/// merch - items object ///

let merch_data = {
    items: [
        {
            name: 'Inspiration Bottle',
            picture: '../images/img_MERCH/bottle.jpg',
            description: '',
            price: '$5.99',
            buy: 'BUY',
        },
        {
            name: 'Stained Pillow',
            picture: '../images/img_MERCH/pillow.jpg',
            description: '',
            price: '$599.99',
            buy: 'BUY',
        },
        {
            name: 'Flavor Infused Plate',
            picture: '../images/img_MERCH/plate.jpg',
            description: '',
            price: '59.99',
            buy: 'BUY',
        },
        {
            name: 'Dulled Razor',
            picture: '../images/img_MERCH/razor.jpg',
            description: '',
            price: '16.99',
            buy: 'BUY',
        },
        {
            name: 'Bar Soap',
            picture: '../images/img_MERCH/soap.jpg',
            description: '',
            price: '29.99',
            buy: 'BUY',
        },
        {
            name: 'Community Toothbrush',
            picture: '../images/img_MERCH/tooth.jpg',
            description: '',
            price: '29.99',
            buy: 'BUY',
        },
    ]
};

const merch_string_builder = () => {
    let new_string = '';
    for(let i=0; i<merch_data.items.length; i++){
        new_string += `<div class="Items">`
        new_string += `<h3>${merch_data.items[i].name}</h3>`
        new_string += `<img src="${merch_data.items[i].picture}"`
        new_string += `<p>${merch_data.items[i].description}</p>`
        new_string += `<h5>${merch_data.items[i].price}</p>`
        new_string += `<button>${merch_data.items[i].buy}</button>`
    }
    printToDom(new_string, 'merch-store');
};

merch_string_builder();