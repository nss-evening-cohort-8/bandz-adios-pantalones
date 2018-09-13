
const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const ourAlbums = [
    {
      name: 'The Secret',
      songs: [{ id: 1, songTitle: "when I'm gone" }, { id: 2, songTitle: 'sugar' }, { id: 3, songTitle: 'tootsie' }]
    },
    {
      name: 'Gore',
      songs: [{ id: 4, songTitle: 'hey baby' }, { id: 5, songTitle: 'kiss me twice' }, { id: 6, songTitle: 'fantazmo' }]
    },
    {
      name: 'The Pink Album',
      songs: [{ id: 7, songTitle: 'pumpkin spice' }, { id: 8, songTitle: 'red balloon' }, { id: 9, songTitle: 'puppies' }]
    }
  ];
  
//   const ourBios = [
//     {
//       name: 'Marco',
//       favSongs: [{ id: 1 }, { id: 3 }, { id: 5 }]
//     }
//   ];
  
//   function bandBioStringBuilder() {
//     let newString = '';
//     // Loop through the Bios
//     for (let i = 0; i < ourBios.length; i++) {
//       newString += `<h3>${ourBios[i].name}</h3>`;
//       newString += `<ul>`;
//       // Loop through the array of favorite songs
//       for (let s = 0; s < ourBios[i].favSongs.length; s++) {
//         // Loop through the Albums and do a find for the SongTitle that matches the Favorte Song ID in the Bio.
//         for (let album = 0; album < ourAlbums.length; album++) {
//           // Grab the songId from the Band memeber Bio
//           let favSongId = ourBios[i].favSongs[s].id;
//           let songFindResult = ourAlbums[album].songs.find((songId) => songId.id === favSongId);
//           // If we don't find a song match in the Album it returns undefind so just move along.
//           if (songFindResult !== undefined) {
//             // We found a match so grab the song title from the result and put it in a <li>
//             newString += `<li>${songFindResult.songTitle}</li>`;
//           }
//         }
//       }
//       // Close up the <ul>
//       newString += `</ul>`;
//     }
//     printToDom(newString, 'somHTMLElementHere');
//   }
// }


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

/// End Media Image Gallery ///


/// Media - Album Function ///

const albumOne = () => {
  let newString = ' ';
  for(i = 0; i < ourAlbums.length; i++){
    for(t=0; t < ourAlbums[i].songs.length; t++){
    let songId = ourAlbums[i].songs[t].id;
    let songTitle = ourAlbums[i].songs[t].songTitle;
    newString += `<div class="song">`;
    newString += `<h1>${songId}</h1>`;
    newString += `<h1>${songTitle}</h1>`;
    newString += `</div>`; 
  }
}
  printToDom(newString,'songs');
};

albumOne ();