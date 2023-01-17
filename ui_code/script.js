const hexArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const bgColor = document.getElementById('bg-color');
const btn = document.getElementById('button-hex');
const text = document.getElementById('hex-text');

btn.addEventListener('click', function(){

    let newHex = '#';

    for(let i = 0; i < 6; i++){
        const idx = Math.floor(Math.random()* hexArr.length);

        newHex += hexArr[idx];
    }

    text.textContent = newHex;

    bgColor.style.backgroundColor = newHex;

});
