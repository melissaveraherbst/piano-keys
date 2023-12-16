// The keys and notes variables store the piano keys
// The keys and notes are the same as the id's of the HTML elements in index.html
const keys = [
    "c-key",
    "d-key",
    "e-key",
    "f-key",
    "g-key",
    "a-key",
    "b-key",
    "high-c-key",
    "c-sharp-key",
    "d-sharp-key",
    "f-sharp-key",
    "g-sharp-key",
    "a-sharp-key",
];

const notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
});

// 1 
// - Change the background color of the keys when they are pressed down
// - Play audio file (piano note) 
function keyPlay(event) {
    const element = event.target.closest(".key");
    element.style.backgroundColor = "var(--color-5)";

    const { id } = element;
    const audio = document.querySelector(`audio[src='./audio/${id}.mp3']`);
    audio.play();
}

// 2
// Return the background color of the keys to their default when the mouse is released on the element.
function keyReturn(event) {
    // Setting a style property equal to an empty string '' in JavaScript will return the element to its original style.
    event.target.closest(".key").style.backgroundColor = "";
}

// 3 - 5
function keyPress(note) {
    note.addEventListener("mousedown", keyPlay);
    note.addEventListener("mouseup", keyReturn);
}

// 6 - 7
notes.forEach(function (note) {
    keyPress(note);
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// 8 - 10
// 2nd line of the Happy Birthday song (the 1st line is the default in index.html)
nextOne.addEventListener("click", function () {
    nextOne.hidden = true;
    nextTwo.hidden = false;
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
});

// 11 - 15
// 3rd line of the Happy Birthday song
nextTwo.addEventListener("click", function () {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    document.getElementById("word-five").innerHTML = "DEAR";
    document.getElementById("word-six").innerHTML = "FRI-";
    lastLyric.style.display = "inline-block";
    document.getElementById("letter-note-three").innerHTML = "G";
    document.getElementById("letter-note-four").innerHTML = "E";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("letter-note-six").innerHTML = "B";
});

// 16 - 20
// 4th and last line of the Happy Birthday song;
nextThree.addEventListener("click", function () {
    nextThree.hidden = true;
    startOver.hidden = false;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("word-three").innerHTML = "BIRTH";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("word-six").innerHTML = "YOU!";
    document.getElementById("letter-note-one").innerHTML = "F";
    document.getElementById("letter-note-two").innerHTML = "F";
    document.getElementById("letter-note-three").innerHTML = "E";
    document.getElementById("letter-note-four").innerHTML = "C";
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
    lastLyric.style.display = "none";
});

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("word-three").innerHTML = "BIRTH-";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("word-six").innerHTML = "YOU";
    document.getElementById("letter-note-one").innerHTML = "G";
    document.getElementById("letter-note-two").innerHTML = "G";
    document.getElementById("letter-note-three").innerHTML = "A";
    document.getElementById("letter-note-four").innerHTML = "G";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("letter-note-six").innerHTML = "B";
};
