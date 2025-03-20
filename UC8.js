const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map(); // Map to store day-wise wages

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
    
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wage in Map
}

// Compute total wage using Map
let totalWage = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

console.log("Day-wise Wage Map:", dailyWageMap);
console.log(`Total Wage Computed from Map: ${totalWage}`);