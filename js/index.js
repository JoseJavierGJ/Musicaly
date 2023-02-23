const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61bc6c2f74mshcad0bb668ba11b6p17d995jsndf638c3e57a8',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
            console.log('canciones', topTwoHundred)
        }) 
        .catch(err => console.error(err));
}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}