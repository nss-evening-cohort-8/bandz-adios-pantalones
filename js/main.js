
const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const ourAlbums = [
    {
      name: 'My Boo',
      songs: [{ id: 0, songTitle: "when I'm gone" }, { id: 1, songTitle: 'sugar' }, { id: 2, songTitle: 'tootsie' }]
    },
    {
      name: 'Bingo',
      songs: [{ id: 3, songTitle: 'hey baby' }, { id: 4, songTitle: 'kiss me twice' }, { id: 5, songTitle: 'cheating wife' }]
    }
  ];
  
  const ourBios = [
    {
      name: 'Marco',
      favSongs: [{ id: 1 }, { id: 3 }, { id: 5 }]
    }
  ];
  
  function bandBioStringBuilder() {
    let newString = '';
    // Loop through the Bios
    for (let i = 0; i < ourBios.length; i++) {
      newString += `<h3>${ourBios[i].name}</h3>`;
      newString += `<ul>`;
      // Loop through the array of favorite songs
      for (let s = 0; s < ourBios[i].favSongs.length; s++) {
        // Loop through the Albums and do a find for the SongTitle that matches the Favorte Song ID in the Bio.
        for (let album = 0; album < ourAlbums.length; album++) {
          // Grab the songId from the Band memeber Bio
          let favSongId = ourBios[i].favSongs[s].id;
          let songFindResult = ourAlbums[album].songs.find((songId) => songId.id === favSongId);
          // If we don't find a song match in the Album it returns undefind so just move along.
          if (songFindResult !== undefined) {
            // We found a match so grab the song title from the result and put it in a <li>
            newString += `<li>${songFindResult.songTitle}</li>`;
          }
        }
      }
      // Close up the <ul>
      newString += `</ul>`;
    }
    printToDom(newString, 'somHTMLElementHere');
  }



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
            description: 'This bottle of inspiration might be empty, but it can filled with your hopes and dreams!  All your hopes and dreams can smell just like our inspiration!',
            price: '₩5000 / $5.99',
            buy: 'BUY',
        },
        {
            name: 'Stained Pillow',
            picture: '../images/img_MERCH/pillow.jpg',
            description: 'This pillow is stained with all the colors of our love.  Each pillow is unique to a band member and has been carefully prepared over several weeks.  Supplies are limited!',
            price: '₩599000 / $599.99',
            buy: 'BUY',
        },
        {
            name: 'Flavor Infused Plate',
            picture: '../images/img_MERCH/plate.jpg',
            description: 'Paper plates are bad for the environment.  So we buy single use ceramic plates, and once we’re done, sell them to you at a huge discount!  Each plate is flavored to a recent meal of one of our bandmates.',
            price: '₩59000 / $59.99',
            buy: 'BUY',
        },
        {
            name: 'Dulled Razor',
            picture: '../images/img_MERCH/razor.jpg',
            description: 'These are the actual razors the band uses to shave their legs!  Each razor represents months of daily shaving.  Great for children!',
            price: '₩16000 / $16.99',
            buy: 'BUY',
        },
        {
            name: 'Bar Soap',
            picture: '../images/img_MERCH/soap.jpg',
            description: 'This was a puddle of liquid soap that sat too long.  We call it bar soap because we found it on the floor of a bar! Bonus: may contain unknown scents!',
            price: '₩29000 / $29.99',
            buy: 'BUY',
        },
        {
            name: 'Community Toothbrush',
            picture: '../images/img_MERCH/tooth.jpg',
            description: 'We take out teeth hygiene very seriously.  So should you!  Our advice:  Don’t use and ammature toothbrush.   Use our toothbrush.  It has plenty of experience. ',
            price: '₩29000 / $29.99',
            buy: 'BUY',
        },
    ]
};

const merch_string_builder = () => {
    let new_string = '';
    for(let i=0; i<merch_data.items.length; i++){
        new_string += `<div class="Items">`
        new_string += `<h2>${merch_data.items[i].name}</h2>`
        new_string += `<img src="${merch_data.items[i].picture}"`
        new_string += `<p>${merch_data.items[i].description}</p>`
        new_string += `<h3>${merch_data.items[i].price}</h3>`
        new_string += `<button>${merch_data.items[i].buy}</button>`
    }
    printToDom(new_string, 'merch-store');
};

merch_string_builder();
function showDivs(n) {
  var newImages = document.getElementsByClassName("media-images");
  if ( n > newImages.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = newImages.length}
  for (i = 0; i < newImages.length; i++) {
     newImages[i].style.display = "none";  
  }
  newImages[slideIndex-1].style.display = "block";  
}

/// End Media Image Gallery ///
