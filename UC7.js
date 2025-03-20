const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageArray = [];  

function getWorkingHours(emp) {
    switch (emp) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) { 
    totalWorkingDays++;
    let emp = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(emp);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    dailyWageArray.push({ day: totalWorkingDays, hours: empHrs, dailyWage: dailyWage }); // Storing daily wage
}

// a. 
const totalWage = dailyWageArray.reduce((total, emp) => total + emp.dailyWage, 0);
console.log("Total Wage:", totalWage);

// b.  
const dayWithWage = dailyWageArray.map(emp => `Day ${emp.day} => Wage: ${emp.dailyWage}`);
console.log("Day with Wage:", dayWithWage);

// c.  
const fullTimeDays = dailyWageArray
    .filter(emp => emp.dailyWage === 160)
    .map(emp => emp.day);
console.log("Full Time Wage Earned on Days:", fullTimeDays);

// d.  
const firstFullTimeWageDay = dailyWageArray
    .find(emp => emp.dailyWage === 160);
console.log("First occurrence of Full Time Wage:", firstFullTimeWageDay);

// e.  
const isAllFullTime = dailyWageArray
    .every(emp => emp.hours === FULL_TIME_HOURS);
console.log("Every element has Full Time Wage:", isAllFullTime);

// f.  
const hasPartTimeWage = dailyWageArray
    .some(emp => emp.hours === PART_TIME_HOURS);
console.log("Is there any Part Time Wage:", hasPartTimeWage);

// g.  
const daysWorked = dailyWageArray
    .filter(emp => emp.hours > 0).length;
console.log("Number of Days Employee Worked:", daysWorked);