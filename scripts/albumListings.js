let html = '';
let moreAlbumsMessage = "You need more albums!";
let playMusicMessage = "Let's start playing music!";


for (let i = 0; i < albums.length; i++ ) {
    html += `<h2>Album Name: ${albums[i].name} </h2>
    <h3>Artist: ${albums[i].artist} </h3>
    <p>Genre: ${albums[i].genre} </p>
    <img scr="${albums.photo}" alt="${albums.name}">`
    ;
}

document.querySelector('beforebegin', moreAlbumsMessage);

document.querySelector('main').insertAdjacentHTML('beforeend', html);
