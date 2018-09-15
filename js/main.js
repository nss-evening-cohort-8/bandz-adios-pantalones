

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

