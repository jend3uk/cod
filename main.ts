

//click yes btn
function clickYesButton() {
    ('I love you too <3');
}

//move button on hover
function hoverNoButton() {
    // random from 0 to 1, then multiply with screen size
    let x = Math.random()  innerWidth;
    let y = Math.random() * window.innerHeight;

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y + 'px';

}