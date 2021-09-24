// ****** toggle bar dark theme ****** //

const roundBtn = document.querySelector('.round');
const toggleBar = document.querySelector('.toggleBar');
const container = document.querySelector('.container');

toggleBar.addEventListener('click',()=> {
    if(roundBtn.classList.contains("roundColor") ) {
        toggleBar.classList.add('darkToggleBar');
        roundBtn.classList.add('darkRound');
        container.classList.add('darkContainer');

        toggleBar.classList.remove('toggleBarColor');
        roundBtn.classList.remove('roundColor');
       

    }else {
        toggleBar.classList.add('toggleBarColor');
        roundBtn.classList.add('roundColor');
        roundBtn.classList.add('container');


        toggleBar.classList.remove('darkToggleBar');
        roundBtn.classList.remove('darkRound');
        container.classList.remove('darkContainer');

    }
    
})