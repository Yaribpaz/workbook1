"use strict"
var payRate = 12.50;
var hours = 20;
var grossPay = 0;

grossPay = payRate * hours
console.log(grossPay)

var payRate3 = 17.30;
var overtimeMultiplier = 1.5;
var overtimePayRate = payRate3 * overtimeMultiplier * grossPay;
var hours3 = 45;
var grossPay3 = 0;

if(hours > 40){
    grossPay3 = grossPay3 + overtimePayRate;
    console.log(grossPay.toFixed(2))
}else{
    console.log("No overtime")
}
