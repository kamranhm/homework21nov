"use strict"

let number = prompt("Enter number of season: ")

switch (true) {
    case (number == 1):
        alert("Winter")
        break;
    case (number == 2):
        alert("Spring")
        break;
    case (number == 3):
        alert("Summer")
        break;
    case (number == 4):
        alert("Fall")
        break;
    default:
        alert("No Season")
        break;
}
