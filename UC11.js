const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyRecords = []; // Array to store objects with Day, Hours, Wage

const getWorkingHours = (emp) => 
    emp === IS_PART_TIME ? PART_TIME_HOURS :
    emp === IS_FULL_TIME ? FULL_TIME_HOURS : 0;

const calculateDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) { 
    totalWorkingDays++;
    let emp = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(emp);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    dailyRecords.push({ day: totalWorkingDays, hoursWorked: empHrs, wageEarned: dailyWage });
}

// a.  
const totalWage = dailyRecords.reduce((sum, record) => sum + record.wageEarned, 0);
const totalHours = dailyRecords.reduce((sum, record) => sum + record.hoursWorked, 0);

console.log(`Total Wage: ${totalWage}, Total Hours Worked: ${totalHours}`);

// b. 
console.log("Full Working Days:");
dailyRecords.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) console.log(`Day ${record.day}`);
});

// c. 
const partWorkingDays = dailyRecords
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);

console.log("Part Working Days:", partWorkingDays.join(", "));

// d. 
const noWorkingDays = dailyRecords
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);

console.log("No Working Days:", noWorkingDays.join(", "));