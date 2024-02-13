// function Play(){
//     // strp 1:when press the play now btn first hide the home screen and add a class to hide the homescreen.
//     const hoemSection = document.getElementById('home-Screen')
//     hoemSection.classList.add('hidden');



//     // step2: then hidden playground screen shown .
//     const playGroundScetion = document.getElementById('play-ground')
//     console.log(playGroundScetion.classList)
//     playGroundScetion.classList.remove('hidden')
//     // 
// }



// optional same uporar kaj ta function use kora kora jay jata multipule time use kora jay sate utitity .js file a use kora houca
function  continueGame(){
    // stem 1 generate a random alphabate
const alphabet = getARandomAlphabet()
console.log('your random alphabet',alphabet)

// set randomly generated alphabet to the screen(show it)
const currentAlphabetElement = document.getElementById('current-alphabet')
currentAlphabetElement.innerText=alphabet;

// set addBackgroundColor
setBackgroundColorById(alphabet)


}





function Play(){
    hideElementById('home-Screen')
    showElementById('play-ground')
    continueGame()
}