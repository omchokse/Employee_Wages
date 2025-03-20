const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map();  
let dailyHourMap = new Map();  
function getWorkingHours(emp) {
    return emp === IS_PART_TIME ? PART_TIME_HOURS :
           emp === IS_FULL_TIME ? FULL_TIME_HOURS : 0;
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
    dailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs)); // Store wage
    dailyHourMap.set(totalWorkingDays, empHrs); // Store hours worked
}

// a. Calc total Wage and total hours worked using reduce() and Arrow Functions
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
let totalHours = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);

console.log(`Total Wage: ${totalWage}, Total Hours Worked: ${totalHours}`);

// b. Show full working days, part working days, and no working days using filter()
let fullWorkingDays = Array.from(dailyHourMap.entries())
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day, hours]) => day);

let partWorkingDays = Array.from(dailyHourMap.entries())
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day, hours]) => day);

let noWorkingDays = Array.from(dailyHourMap.entries())
    .filter(([day, hours]) => hours === 0)
    .map(([day, hours]) => day);

console.log(`Full Working Days: ${fullWorkingDays}`);
console.log(`Part Working Days: ${partWorkingDays}`);
console.log(`No Working Days: ${noWorkingDays}`);