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


// functions

let calcAverage = (s1, s2, s3) => {
    return (s1 + s2 + s3) / 3;
}

let checkWinner = function winner(player1AvgScore, play2AvgScore) {
    if (player1AvgScore > play2AvgScore) {
        return player1AvgScore;
    } else {
        return play2AvgScore;
    }
}

const dolphinsAverage = calcAverage(44, 23, 300);
const koalasAverage = calcAverage(65, 54, 49);

function getWinner(){
    if (checkWinner(dolphinsAverage, koalasAverage) === dolphinsAverage) {
        console.log('Winner is Dolpins');
    } else {
        console.log('Winner is Koalas');
    }
}

getWinner()

let tip = (bill) => ((bill < 300) && (bill > 50 )) ? bill * (15 / 100) : bill * (20 / 100)
let bills = [125, 555, 44]
let totalBills = []


for(let i=0; i<bills.length; i++){
    totalBills.push(bills[i] + tip(bills[i]))
}

console.log(`Total Bills: ${totalBills}`)

let MarkDetails = {
    Name: 'Mark',
    Height: 1.69,
    Weight: 78,
    calBMI: function bmi() {
        this.BMI = this.Weight / (this.Height **2)
        return this.BMI
    }
}

let johnDetails = {
    Name: 'John',
    Height: 1.95,
    Weight: 92,
    calBMI: function bmi() {
        this.BMI = this.Weight / (this.Height **2)
        return this.BMI
    }
}

if (MarkDetails.calBMI() > johnDetails.calBMI()) {
    console.log(`Mark's BMI(${MarkDetails.BMI}) is higher than john's(${johnDetails.BMI})!`)
} else {
    console.log(`John's BMI(${johnDetails.BMI}) is higher than mark's(${MarkDetails.BMI})!`)
}
