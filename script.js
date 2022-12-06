const images = [
    {
       image: 'img/01.webp',
       title: 'Marvel\'s Spiderman Miles Morale',
       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
       image: 'img/02.webp',
       title: 'Ratchet & Clank: Rift Apart',
       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
       image: 'img/03.webp',
       title: 'Fortnite',
       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
       image: 'img/04.webp',
       title: 'Stray',
       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
       image: 'img/05.webp',
       title: "Marvel's Avengers",
       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
 ];

// prendo il pulsante previous
const buttonPrevious  = document.querySelector('div.button.previous');
// prendo il pulsante next
const buttonNext  = document.querySelector('div.button.next');
// seleziono l'elemento padre 
const parentElement = document.querySelector('div.carousel-image');
// creo un elemento div
const divElement  = document.createElement('div');
// assegno la classe al div creato
divElement.classList.add('my_carousel-item');
// appendo il div all'elemento padre
parentElement.appendChild(divElement);
// creo l'elemento img
const imgElement = document.createElement('img');
// appendo l'elemento img all'elemento div
divElement.appendChild(imgElement);
// aggiungo l'immagine all'elemento img
imgElement.src = 'img/01.webp';


// creo un ciclo forte.. ora tocca capire come usarlo :(
for (let i = 0; i < images.length; i++){

    console.log(images[i]);

}

// creo un evento per il pulsante previous 
buttonPrevious.addEventListener('click', function(){

})

// creo un evento per il pulsante next
buttonNext.addEventListener('click', function(){

    

})




