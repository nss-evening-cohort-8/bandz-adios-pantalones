

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

  const ourAlbums = [
    {
      name: 'My Boo',
      songs: [
        { id: 0, songTitle: "When I'm Gone" },
        { id: 1, songTitle: 'Sugar' },
        { id: 2, songTitle: 'Tootsie' }
      ]
    },
    {
      name: 'Bingo',
      songs: [
        { id: 3, songTitle: 'Hey Baby' },
        { id: 4, songTitle: 'Kiss Me Twice' },
        { id: 5, songTitle: 'Cheating Wife' }
      ]
    }
  ];
  
  const ourBios = [
    {
      name: 'Maco',
      favSongs: [{ id: 1 }, { id: 3 }, { id: 5 }]
    },
    {
      name: 'Robo',
      favSongs: [{ id: 4 }, { id: 2 }, { id: 1 }]
    },
    {
      name: 'Chabo',
      favSongs: [{ id: 2 }, { id: 3 }, { id: 0 }]
    },
    {
      name: 'Timbo',
      favSongs: [{ id: 2 }, { id: 3 }, { id: 5 }]
    },
    {
      name: 'Waybo',
      favSongs: [{ id: 1 }, { id: 3 }, { id: 5 }]
    }
  ];
  
  /// Media - Image Gallery ///
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs((slideIndex += n));
  }
  
 

  // Tour Schedule Array listing current tour dates
  const tourScheduleDates = [
    {
      // Mon Sep 17 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1537160400000,
      city: 'Pulaski',
      state: 'TN',
      venue: 'Pulaski Lions Club',
      isSoldOut: 'true'
    },
    {
      // Fri Aug 31 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1535691600000,
      city: 'Scratch Ankle',
      state: 'AL',
      venue: "Jim's Waterin' Hole",
      isSoldOut: 'false'
    },
    {
      // Fri Aug 17 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1534482000000,
      city: 'Flippin',
      state: 'GA',
      venue: 'Peach Pot',
      isSoldOut: 'false'
    },
    {
      // Sat Jul 28 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1532754000000,
      city: 'Coward',
      state: 'SC',
      venue: "Surf n' Turf Karaoke Bar",
      isSoldOut: 'true'
    },
    {
      // Sat Jul 07 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1530939600000,
      city: 'Whynot',
      state: 'NC',
      venue: '',
      isSoldOut: 'false'
    },
    {
      // Sun Jun 24 2018 00:00:00 GMT-0500 (Central Daylight Time)
      date: 1529816400000,
      city: 'Booger Hole',
      state: 'WV',
      venue: "You Pickem' We Serve 'em",
      isSoldOut: 'false'
    }
  ];
  
  function showDivs(n) {
    var newImages = document.getElementsByClassName('media-images');
    if (n > newImages.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = newImages.length;
    }
    for (i = 0; i < newImages.length; i++) {
      newImages[i].style.display = 'none';
    }
    // BELOW IS WHAT I HAD TO COMMENT OUT FOR MY FUNCTION TO WORK ON 
    // MY PAGE
    // newImages[slideIndex - 1].style.display = 'block';
  }

  /// End Media Image Gallery ///

  function bandBioStringBuilder(bio_name) {
    newString = '';
    for (let i=0;i<ourBios.length;i++){
      if(ourBios[i]["name"] == bio_name) {
        for (let s = 0; s < ourBios[i].favSongs.length; s++) {     
          for (let album = 0; album < ourAlbums.length; album++) {
            let favSongId = ourBios[i].favSongs[s].id;
            let songFindResult = ourAlbums[album].songs.find(
              (songId) => songId.id === favSongId);
            if (songFindResult !== undefined) {
              newString += `<li>${songFindResult.songTitle}</li>`;
            }
          }
        }
      }
      // newString += `</ul>`;
    }
    newString = `<p>Favorite Songs` + `<ul>`+ newString + `</ul>`;
    printToDom(newString, bio_name);
  };
// YES I AM GOING TO WORK THESE BELOW INTO ONE FUNCTION
  document.getElementById("Maco").addEventListener("click", function(){
    bandBioStringBuilder("Maco");
  });
  
  document.getElementById("Robo").addEventListener("click", function(){
    bandBioStringBuilder("Robo");
  });

  document.getElementById("Chabo").addEventListener("click", function(){
    bandBioStringBuilder("Chabo");
  });

  document.getElementById("Timbo").addEventListener("click", function(){
    bandBioStringBuilder("Timbo");
  });

  document.getElementById("waybo").addEventListener("click", function(){
    bandBioStringBuilder("Waybo");
  });


function plusDivs(n) {
  showDivs((slideIndex += n));
}

/// Merch - Merchandise Item Object ///
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
///end of merch object///

///merch string builder function///
const merch_string_builder = () => {
    let new_string = '';
    for(let i=0; i<merch_data.items.length; i++){ //this is the for loop that creates the item boxes on the merch page 
        new_string += `<div class="Items">`
        new_string += `<h2>${merch_data.items[i].name}</h2>`
        new_string += `<img src="${merch_data.items[i].picture}"`
        new_string += `<p>${merch_data.items[i].description}</p>`
        new_string += `<h3>${merch_data.items[i].price}</h3>`
        new_string += `<button>${merch_data.items[i].buy}</button>`
    }
    printToDom(new_string, 'merch-store');
};
///end of merch string builder function///
function showDivs(n) {
  var newImages = document.getElementsByClassName('media-images');
  if (n > newImages.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = newImages.length;
  }
  for (i = 0; i < newImages.length; i++) {
    newImages[i].style.display = 'none';
  }
  newImages[slideIndex - 1].style.display = 'block';
}

