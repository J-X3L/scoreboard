//document.getElementById("home").innerText = 5;

const hom = document.getElementById("home");

let count = 0;

function onePlus() {
    count = count + 1;
    hom.innerText = count;
}
function twoPlus() {
    count = count + 2;
    hom.innerText = count;
}
function threePlus() {
    count = count + 3;
    hom.innerText = count;
}



const aw = document.getElementById("away");

let count2 = 0;

function onePls() {
    count2 = count2 + 1;
    aw.innerText = count2;
} 

function twoPls() {
    count2 = count2 + 2;
    aw.innerText = count2;
}

function threePls() {
    count2 = count2 + 3;
    aw.innerText = count2;
}

function rest() {
    hom.innerText = 0;
    count = 0;
    aw.innerText = 0;
    count2 = 0;
}