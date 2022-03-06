const artistsList = document.getElementById('artistsList');
const searchBar = document.getElementById('searchBar');
let hpArtists = [];
console.log(searchBar);

searchBar.addEventListener('keyup', (e) => {
     const searchString = e.target.value.toLowerCase();
     console.log(searchString);

     //if searchString is uppercase -> lowercase
     //if searchString is lowercase -> lowercase
     //convert name to lowercase and then compare
     // ...
     //convert genre to lowercase and then compare

     const filteredArtists = hpArtists.filter((artist) => {
         return ( artist.name.toLowerCase().includes(searchString) || 
                  artist.genre.toLowerCase().includes(searchString)       
         );
     });
   displayArtists(filteredArtists);
});
const loadArtists = async () => {
    try {
        const res = await fetch('../artists.json');
        hpArtists = await res.json();
        displayArtists(hpArtists);
        console.log(hpArtists);
    } catch (err) {
        console.error(err);
    }
};

const displayArtists = (artists) => {
    const htmlString = artists
    .map((artist) => {
        return `
         <li class="artist">
         <h2>${artist.name}</h2>
         <p>${artist.genre}</p>
         <img src="${artist.image}"></img>
         </li>
        `;
    })
    .join('');
    artistsList.innerHTML = htmlString;
};

loadArtists();