"use strict";
// 1. Create variables for payRate and hoursWorked
// 2. if the person works more than 40 hours
// 3.Pay the overtime hours at 1.5 x the regular rate of hours

var payRate1 = 12.5;
var payRate2 = 25.0;
var payRate3 = 17.3;

var hoursWorked1 = 20;
var hoursWorked2 = 40;
var hoursWorked3 = 45;

var totalPay1 = 0;

// regularHours: 40
// overtimeHours: 5
// totalHours: 45
// (40 * payRate) + ((hoursWorked - 40) * payRate * 1.5) - overtime
// hoursWorked * payRate - regular time

