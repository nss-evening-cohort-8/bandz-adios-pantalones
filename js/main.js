const ourAlbums = [
  {
    name: 'My Boo',
    songs: [{ id: 0, songTitle: "when I'm gone" }, { id: 1, songTitle: 'sugar' }, { id: 2, songTitle: 'tootsie' }]
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

const tourSchedule = [
  {
    date: '',
    city: 'Pulaski, TN',
    venue: 'Pulaski Lions Club',
    isSoldOut: 'true'
  },
  {
    date: '',
    city: 'New York, NY',
    venue: 'Madison Square Garden',
    isSoldOut: 'false'
  },
  {
    date: '',
    city: '',
    venue: '',
    isSoldOut: 'false'
  },
  {
    date: '',
    city: '',
    venue: '',
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
