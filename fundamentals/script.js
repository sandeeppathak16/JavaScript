'use strict';


let markWeight = 95;
let johnWeight = 85;
let markHeight = 1.88;
let johnHeight = 1.76;

const markBMI = (markWeight / (markHeight **2)) ;
const johnBMI = (johnWeight / (johnHeight **2));
console.log(markBMI, johnBMI)

const markHigherBMI = (markWeight / (markHeight **2)) > (johnWeight / (johnHeight **2));
if (markHeight === true) {
    console.log(`Mark's BMI(${markBMI}) is higher than john's(${johnBMI})!`)
} else {
    console.log(`John's BMI(${johnBMI}) is higher than mark's(${markBMI})!`)
}

const dolphinsAvgScore = (96 + 150 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

let winner;

if ((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore > 100)){
    winner = 'Dolphins';
} else if ((koalasAvgScore > dolphinsAvgScore) && (koalasAvgScore > 100)) {
    winner = 'Koalas';
} else if ((koalasAvgScore === dolphinsAvgScore ) && (koalasAvgScore >=100)) {
    winner = 'Draw';

}

console.log(`result: ${winner}`);

const bill = 275

const tip = ((bill < 300) && (bill > 50 )) ? bill * (15 / 100) : bill * (20 / 100)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

