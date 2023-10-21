const buttons = document.querySelectorAll('.button')
const bdy = document.querySelector('body')


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target);

        bdy.style.backgroundColor = e.target.id;
    });
});