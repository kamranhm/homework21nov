"use strict" 

let money = prompt("Enter the amount of money which you want: ");
let month = prompt("Enter the count of the month: ");

let monLeft = (money % month);

let credit = (money - monLeft) / month;
let arr = []

for (let row = 1; row < month; row++) {
    for (let i = 1; i <= month; i++) {
        arr[i] = credit;
    }
    console.log(row + "-th month " + credit)
}

arr[month] = credit + monLeft

console.log(month + "-th month " +  arr[month])

