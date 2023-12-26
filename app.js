const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const result = document.querySelector('.result');

let value = 0;

noButton.addEventListener('mouseover', () => {
    if (value === 0){
        noButton.style.transform = 'translateX(-130%)';
        value = 1;
    }
    else{
        noButton.style.transform = 'translateX(130%)';
        value = 0;
    }
});

yesButton.addEventListener('click', () => {
    result.style.maxHeight = '100vh';
});