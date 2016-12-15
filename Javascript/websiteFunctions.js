/**
 * Created by marcu_000 on 15/12/2016.
 */
function myFunction() {
    var x = document.getElementById("collapseNav");
    if (x.className === "nav-tabs") {
        x.className += " responsive";
    } else {
        x.className = "nav-tabs";
    }
}

function searchFunction() {
    var nameArray = ["index", "news", "about", "research", "courses", "faq", "compResearch", "smartResearch", "undergraduate", "postgraduate"];
    var searchArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < document.getElementById('inputBar').value.toLocaleLowerCase().length; i++) {
        if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "a") {
            searchArray[3] += 1;
            searchArray[5] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "b") {
            searchArray[2] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "c") {
            searchArray[3] += 1;
            searchArray[4] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "d") {
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "e") {
            searchArray[0] += 1;
            searchArray[1] += 1;
            searchArray[3] += 1;
            searchArray[4] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "f") {
            searchArray[5] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "g") {
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "h") {
            searchArray[0] += 1;
            searchArray[3] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "i") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "j") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "k") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "l") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "m") {
            searchArray[0] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "n") {
            searchArray[1] += 1;
            searchArray[8] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "o") {
            searchArray[0] += 1;
            searchArray[2] += 1;
            searchArray[4] += 1;
            searchArray[6] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "p") {
            searchArray[6] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "q") {
            searchArray[5] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "r") {
            searchArray[3] += 1;
            searchArray[4] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "s") {
            searchArray[1] += 1;
            searchArray[3] += 1;
            searchArray[4] += 1;
            searchArray[6] += 1;
            searchArray[7] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "t") {
            searchArray[2] += 1;
            searchArray[7] += 1;
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "u") {
            searchArray[2] += 1;
            searchArray[4] += 1;
            searchArray[8] += 1;
            searchArray[9] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "v") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "w") {
            searchArray[1] += 1;
        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "x") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "y") {

        } else if (document.getElementById('inputBar').value.toLocaleLowerCase().charAt(i) === "z") {

        }
    }

    var result = "";
    var highestCount = 0;

    for (var i = 0; i < searchArray.length; i++) {
        if (highestCount < searchArray[i]) {
            highestCount = searchArray[i];
            result = nameArray[i];
        }
    }
    document.getElementById('sub');
    window.location = 'http://websitecsdm.azurewebsites.net/' + result + ".html";
    return false;
}