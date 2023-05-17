import './less/index.less'

// Your code goes here!
console.log('hello world');

// Event 1 - load
window.onload = function(evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);

    const heading = document.querySelector('h1');
    heading.textContent = 'READY TO GO!!';

// Event 2 - copy
window.addEventListener('copy', () => {
        navigator.clipboard.readText()
           .then(text => {
            heading.textContent += text;
           })
    })

// Event 3 - click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror');
})

// Event 4 - dblclick
document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ' ';
})

// Event 5 - keydown
window.addEventListener('keydown', evt => {
    if(evt.key == 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>';
    }
})

// Event 6 - mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt;
    //console.log(`mouse is at ${clientX}, ${clientY}`);
})

// Event 7 - mouseenter
// Event 8 - mouseleave
const destinations = document.querySelectorAll('.destination');
for(let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold';
    })
    destination.addEventListener('mouseleave', evt => {
        setTimeout (() => {
            destination.style.fontWeight = 'initial';
        }, 500)
    })
}
}


