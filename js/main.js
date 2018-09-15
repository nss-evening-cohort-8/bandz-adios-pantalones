const ourAlbums = [
  {
    name: 'My Boo',
    songs: [
      { id: 0, songTitle: "when I'm gone" },
      { id: 1, songTitle: 'sugar' },
      { id: 2, songTitle: 'tootsie' }
    ]
  },
  {
    name: 'Bingo',
    songs: [
      { id: 3, songTitle: 'hey baby' },
      { id: 4, songTitle: 'kiss me twice' },
      { id: 5, songTitle: 'cheating wife' }
    ]
  }
];

const ourBios = [
  {
    name: 'Marco',
    favSongs: [{ id: 1 }, { id: 3 }, { id: 5 }]
  }
];

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

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

/// Media - Image Gallery ///

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

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

/// End Media Image Gallery ///

// const ourAlbums = [
//     {
//       name: 'The Secret',
//       songs: [{ id: 1, songTitle: "when I'm gone" }, { id: 2, songTitle: 'sugar' }, { id: 3, songTitle: 'tootsie' }]
//     },
//     {
//       name: 'Gore',
//       songs: [{ id: 4, songTitle: 'hey baby' }, { id: 5, songTitle: 'kiss me twice' }, { id: 6, songTitle: 'fantazmo' }]
//     },
//     {
//       name: 'The Pink Album',
//       songs: [{ id: 7, songTitle: 'pumpkin spice' }, { id: 8, songTitle: 'red balloon' }, { id: 9, songTitle: 'puppies' }]
//     }
//   ];
  
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
        let songFindResult = ourAlbums[album].songs.find(
          (songId) => songId.id === favSongId
        );
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



/// Media - Album Function ///

const albumOne = () => {
  let newString = ' ';
  for(i = 0; i < ourAlbums.length; i++){
    for(t=0; t < ourAlbums[i].songs.length; t++){
    let songId = ourAlbums[i].songs[t].id;
    let songTitle = ourAlbums[i].songs[t].songTitle;
    newString += `<div class="song">`;
    // newString += `<h1>${songId}</h1>`;
    newString += `<h1>${songTitle}</h1>`;
    // newString += `</div>`; 
  }
}
  printToDom(newString,'songs');
};

const albumOutput = document.getElementById('album1');
albumOutput.addEventListener("click", albumOne); 

const albumOutput2 = document.getElementById('album2');
albumOutput2.addEventListener("click", albumOne); 

const albumOutput3 = document.getElementById('album3');
albumOutput3.addEventListener("click", albumOne); 

/// End Media Album Function ///

