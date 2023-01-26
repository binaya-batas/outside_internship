let prev = document.querySelector('.carousel__buttons__prev');
let next = document.querySelector('.carousel__buttons__next');
let slider = document.querySelector('.carousel__images');
let images = document.querySelectorAll('.carousel__images img');
let indicators = document.querySelector('.carousel__indicators');

let index = 0;
//const width = images[index].clientWidth; //returns width of an element including padding but not border.
let width = 500;
console.log(width)
console.log(index)

next.addEventListener('click', onClickNext)
function onClickNext() {
    index++;

    console.log(index)
    slider.style.transform = `translate(${-index * (width + 10)}px)`;

    if (index === images.length-1) {
        next.classList.add('disable')
    } else {
        next.classList.remove('disable')
    }
}

prev.addEventListener('click', onClickPrev)
function onClickPrev() {
    index--;

    console.log(index)
    slider.style.transform = `translate(${-index *(width + 10)}px)`;

    if (index === 0) {
        prev.classList.add('disable')
    } else {
        console.log('else')
        prev.classList.remove('disable')
    }
}

//creating circles according to the number of images.
for (let i=0; i<images.length; i++) {
    let circle = document.createElement('div')
    circle.setAttribute('class', 'circle');
    indicators.appendChild(circle);
}


let dots = document.querySelectorAll('.circle')
dots.forEach((dot, ind) => {
    dot.addEventListener('click', () => {
        if (dot === dots[ind]) {
            dots[ind].classList.add('circle--active');
            slider.style.transform = `translate(${-ind * (width + 10)}px)`;
            
            if (ind === 0) {
                prev.classList.add('disable')
            }

            if (ind ===images.length-1) {
                next.classList.add('disable')
            }
            
        } else {
            dots[ind].classList.remove('circle--active');
        }
    })
})

