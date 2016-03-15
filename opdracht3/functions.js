/**
 * Created by Simon on 16-2-2016.
 */
var count = 0;
var maxCalo;
var gender = "man";
var calo = 0;
var totalVet = 0;
var vet = 0;
var calorieënProduct = 0;
var vettenProduct = 0;
var list = new Array();
var localStorage;
var document;


function allowDrop(ev) {
    "use strict";
    ev.preventDefault();
}

function saveData(info) {
    "use strict";
    localStorage.setItem(info, info);
}
function changeGender() {
    "use strict";
    var x = document.getElementById("genderchange").value;
    if (x === "man") {
        maxCalo = 2500;
    } else {
        maxCalo = 2000;
    }
    document.getElementById("maxCaloGender").innerHTML = maxCalo;

}

function drag(ev, calorieën, vetten) {
    "use strict";
    ev.dataTransfer.setData("text", ev.target.id);
    var c = document.getElementById("bestellinglist");
    list.push(ev.target.id);
    saveData(ev.target.id);


    calorieënProduct = calorieën;
    vettenProduct = vetten;

    c.innerHTML = " " + list.toString();
}

function drop(ev) {
    "use strict";
    count++;

    if (gender === "man") {
        maxCalo = 2500;
    } else {
        maxCalo = 2000;
    }


    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    calo = calo + calorieënProduct;
    totalVet = totalVet + vettenProduct;

    if (calo > maxCalo) {
        alert("U heeft teveel calorieën besteld.");
    }
    var procent = 100 / maxCalo * calo;

    vet = vet + ev.dataTransfer.getData('value');
    var updateMaxCalo = document.getElementById("maxCalo");
    updateMaxCalo.innerHTML = procent + "%";


    var changeCalo = document.getElementById("calo");
    changeCalo.innerHTML = calo;

    var changeVet = document.getElementById("vetten");
    changeVet.innerHTML = totalVet;

    var updateCount = document.getElementById("aantal");
    updateCount.innerHTML = count;
}
