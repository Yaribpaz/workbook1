"use strict"
// var regularPayRate = 12.50;
// var regularHours = 20;
// var regularPay = 250;

// var payRate = 17.30;
// var overtimePayRate = payRate * 1.5;
// var regularPay = 0;
// var overtimePay = 0;
// var hoursWorked = 45;
// var regularHours = 40;
// var overtimeHours = 0;
// var grossPay = 0;

// overtimeHours = hoursWorked - regularHours;

// console.log(overtimeHours)
// if(hoursWorked <=40){
//     grossPay = payRate * hoursWorked;
// }

// else{
//     regularPay = regularHours * payRate
//     overtimePay = overtimeHours * overtimePayRate
//     grossPay = regularPay + overtimePay
// }
// console.log(grossPay);


var payRate = 17.30;
var overtimePayRate = payRate * 1.5;
var regularPay = 0;
var overtimePay = 0;
var hoursWorked = 45;
var regularHours = 40;
var overtimeHours = 0;
var grossPay = 0;

overtimeHours = hoursWorked - regularHours;

console.log(overtimeHours)
if(hoursWorked <=40){
    grossPay = payRate * hoursWorked;
}

else{
    regularPay = regularHours * payRate
    overtimePay = overtimeHours * overtimePayRate
    grossPay = regularPay + overtimePay
}
console.log(grossPay);