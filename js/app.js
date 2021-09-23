// ****** toggle bar dark theme ****** //

const roundBtn = document.querySelector('.round');
const toggleBar = document.querySelector('.toggleBar');
console.log(roundBtn)
console.log(toggleBar)


toggleBar.addEventListener('click',()=> {
    if(roundBtn.classList.contains("roundColor") ) {
        toggleBar.classList.add('darkToggleBar');
        roundBtn.classList.add('darkrRound');
        toggleBar.classList.remove('toggleBarColor');
        roundBtn.classList.remove('roundColor');
        console.log(roundBtn)
        console.log(toggleBar)  

    }else {
        toggleBar.classList.add('darkToggleBar');
        roundBtn.classList.add('darkRound');
    }
    
})