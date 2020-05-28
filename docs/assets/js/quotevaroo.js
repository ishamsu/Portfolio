var quotes = [

    "Loading . . . . ."

]

function newquote() {
    var randomno = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randomno];
    document.getElementById('quotedisplay').style.color = randomColors();

}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}