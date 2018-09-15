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
    venue: "Hurricane's Eye Saloon",
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

/// Media - Image Gallery ///

var slideIndex = 1;
// showDivs(slideIndex);

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

// Start Tour-Schedule \\
const tsStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < tourScheduleDates.length; i++) {
    let tourDate = new Date(tourScheduleDates[i].date);
    let locale = window.navigator.language;
    let month = tourDate.toLocaleDateString(locale, {
      month: 'short'
    });
    let day = tourDate.getDate();
    let city = tourScheduleDates[i].city;
    let state = tourScheduleDates[i].state;
    let venue = tourScheduleDates[i].venue;
    newString += `<div class="ts-show">`;
    // newString += `<div class="ts-show-date">`;
    newString += `<div class="ts-date-numbers">`;
    newString += `<p>${month}</p>`;
    newString += `<p>${day}</p>`;
    newString += `</div>`;
    newString += `<div class="venue">`;
    newString += `<p>${city}, ${state}</p>`;
    newString += `<p>${venue}</p>`;
    newString += `</div>`;
    // newString += `</div>`;
    newString += `</div>`;
  }
  // printToDom(newString, 'ts-show-date-venue');
  printToDom(newString, 'ts-container');
};
