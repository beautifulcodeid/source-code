function clickButton(){
    const upin = document.querySelectorAll('.upin');
    const ipin = document.querySelectorAll('.ipin');
    const loveAnimation = document.querySelectorAll('.love-animation');

    const button = document.querySelector('.btn');
    const borderDiv = document.querySelector('.border');

    upin.forEach((nodelist) => {
        nodelist.classList.toggle('transition-out');
    });

    ipin.forEach((nodelist) => {
        nodelist.classList.toggle('transition-out');
    });

    button.classList.toggle('transition-out');

    setTimeout(() => {
        upin.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('transition-out');
        });
    
        ipin.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('transition-out');
        });

        button.classList.toggle('hide');
        borderDiv.classList.toggle('border-t-red-soft');
        borderDiv.classList.toggle('px-5');
        borderDiv.classList.toggle('py-2');
        button.classList.toggle('transition-out');


        loveAnimation.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('love');
        });
    }, 1500)

    
}