// Name field
var form = document.querySelector ("form");

form.addEventListener("submit", (event) => {
    var kuromiName = document.querySelector("input").value;
    event.preventDefault();
    if (!kuromiName) {
        document.querySelector('h1').textContent = "Customise your Kuromi!"
    } else {
        document.querySelector('h1').textContent = "Customise your " + kuromiName + "mi!";
    }
})

// GAME SECTION START

// Body parts
var main = document.querySelector(".main");
var detail = document.querySelector(".detail");
var face = document.querySelector(".face");

// Arrays
var mainColors = ["./images/main-white.svg", "./images/main-black.svg", "./images/main-pink.svg", "./images/main-red.svg", "./images/main-yellow.svg", "./images/main-blue.svg", "./images/main-green.svg"];
var detailColors = ["./images/details-white.svg", "./images/details-black.svg", "./images/details-pink.svg", "./images/details-red.svg", "./images/details-yellow.svg", "./images/details-blue.svg", "./images/details-green.svg"];
var faceColors = ["./images/face-gray.svg", "./images/face-black.svg", "./images/face-pink.svg", "./images/face-red.svg", "./images/face-yellow.svg", "./images/face-blue.svg", "./images/face-green.svg"];
var accessoryArray = ["./images/none.svg", "./images/heart.svg", "./images/cloud.svg", "./images/star.svg", "./images/sunglasses.svg", "./images/french.svg"];

// Main
var mainWhite = document.querySelector("#white-main");
var mainBlack = document.querySelector("#black-main");
var mainPink = document.querySelector("#pink-main");
var mainRed = document.querySelector("#red-main");
var mainYellow = document.querySelector("#yellow-main");
var mainBlue = document.querySelector("#blue-main");
var mainGreen = document.querySelector("#green-main");
var mainRandom = document.querySelector("#random-main");

// Details
var detailWhite = document.querySelector("#white-detail");
var detailBlack = document.querySelector("#black-detail");
var detailPink = document.querySelector("#pink-detail");
var detailRed = document.querySelector("#red-detail");
var detailYellow = document.querySelector("#yellow-detail");
var detailBlue = document.querySelector("#blue-detail");
var detailGreen = document.querySelector("#green-detail");
var detailRandom = document.querySelector("#random-detail");

// Face
var faceGray = document.querySelector("#gray-face");
var faceBlack = document.querySelector("#black-face");
var facePink = document.querySelector("#pink-face");
var faceRed = document.querySelector("#red-face");
var faceYellow = document.querySelector("#yellow-face");
var faceBlue = document.querySelector("#blue-face");
var faceGreen = document.querySelector("#green-face");
var faceRandom = document.querySelector("#random-face");

// Accessories
var none = document.querySelector("#none");
var heart = document.querySelector("#heart");
var cloud = document.querySelector("#cloud");
var star = document.querySelector("#star");
var sunglasses = document.querySelector("#sunglasses");
var french = document.querySelector("#french");
var accessory = document.querySelector(".accessory-active");

// Main colors
mainWhite.addEventListener("click", () => {
    main.src = mainColors[0];
})

mainBlack.addEventListener("click", () => {
    main.src = mainColors[1];
})

mainPink.addEventListener("click", () => {
    main.src = mainColors[2];
})

mainRed.addEventListener("click", () => {
    main.src = mainColors[3];
})

mainYellow.addEventListener("click", () => {
    main.src = mainColors[4];
})

mainBlue.addEventListener("click", () => {
    main.src = mainColors[5];
})

mainGreen.addEventListener("click", () => {
    main.src = mainColors[6];
})

mainRandom.addEventListener("click", () => {
    var randomGetal = Math.random()*7;
    randomGetal = Math.floor(randomGetal);
    main.src = mainColors[randomGetal];
})

// Detail colors
detailWhite.addEventListener("click", () => {
    detail.src = detailColors[0];
})

detailBlack.addEventListener("click", () => {
    detail.src = detailColors[1];
})

detailPink.addEventListener("click", () => {
    detail.src = detailColors[2];
})

detailRed.addEventListener("click", () => {
    detail.src = detailColors[3];
})

detailYellow.addEventListener("click", () => {
    detail.src = detailColors[4];
})

detailBlue.addEventListener("click", () => {
    detail.src = detailColors[5];
})

detailGreen.addEventListener("click", () => {
    detail.src = detailColors[6];
})

detailRandom.addEventListener("click", () => {
    var randomGetal = Math.random()*7;
    randomGetal = Math.floor(randomGetal);
    detail.src = detailColors[randomGetal];
})

// Face colors
faceGray.addEventListener("click", () => {
    face.src = faceColors[0];
})

faceBlack.addEventListener("click", () => {
    face.src = faceColors[1];
})

facePink.addEventListener("click", () => {
    face.src = faceColors[2];
})

faceRed.addEventListener("click", () => {
    face.src = faceColors[3];
})

faceYellow.addEventListener("click", () => {
    face.src = faceColors[4];
})

faceBlue.addEventListener("click", () => {
    face.src = faceColors[5];
})

faceGreen.addEventListener("click", () => {
    face.src = faceColors[6];
})

faceRandom.addEventListener("click", () => {
    var randomGetal = Math.random()*7;
    randomGetal = Math.floor(randomGetal);
    face.src = faceColors[randomGetal];
})

// Accessories
none.addEventListener("click", () => {
    accessory.src = accessoryArray[0];
})

heart.addEventListener("click", () => {
    accessory.src = accessoryArray[1];
})

cloud.addEventListener("click", () => {
    accessory.src = accessoryArray[2];
})

star.addEventListener("click", () => {
    accessory.src = accessoryArray[3];
})

sunglasses.addEventListener("click", () => {
    accessory.src = accessoryArray[4];
    var gtaSong = new Audio("../sounds/gta-song.mp3"); //src: https://www.youtube.com/watch?v=16-keH0xs5Y
    gtaSong.play();
})

french.addEventListener("click", () => {
    accessory.src = accessoryArray[5];
    var frenchSong = new Audio("../sounds/french-song.mp3"); //src: https://www.youtube.com/watch?v=W4VTq0sa9yg
    frenchSong.play();
})

// GAME SECTION END
