const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = []; // Stores Daily Wage
let empDailyWageMap = new Map(); // Maps Day to Wage
let empDailyHoursMap = new Map(); // Maps Day to Hours Worked

const getWorkingHours = (emp) => 
    emp === IS_PART_TIME ? PART_TIME_HOURS : 
    emp === IS_FULL_TIME ? FULL_TIME_HOURS : 0;

const calculateDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Generating Employee Wage Data
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) { 
    totalWorkingDays++;
    let emp = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(emp);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    
    empDailyWageArray.push(dailyWage); // Storing Daily Wage
    empDailyWageMap.set(totalWorkingDays, dailyWage); // Storing Day-Wise Wage
    empDailyHoursMap.set(totalWorkingDays, empHrs); // Storing Day-Wise Hours
}

// a.  
const totalWage = empDailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage: ${totalWage}`);

// b.  
const dailyWagesWithDays = Array.from(empDailyWageMap.entries())
    .map(([day, wage]) => `Day ${day}: Wage ${wage}`);
console.log("Daily Wages with Days:\n", dailyWagesWithDays.join("\n"));

// c.  
const fullTimeWageDays = Array.from(empDailyWageMap.entries())
    .filter(([day, wage]) => wage === 160)
    .map(([day, wage]) => `Day ${day}`);
console.log("Days with Full Time Wage:", fullTimeWageDays.join(", "));

// d.  
const firstFullTimeWageDay = Array.from(empDailyWageMap.entries())
    .find(([day, wage]) => wage === 160);
console.log(`First Full Time Wage Earned on: Day ${firstFullTimeWageDay[0]}`);

// e.  
const isEveryFullTimeWageValid = Array.from(empDailyWageMap.values())
    .every(wage => wage === 160 || wage !== 160);
console.log("Is Every Full Time Wage Correct?", isEveryFullTimeWageValid);

// f.  
const hasPartTimeWage = Array.from(empDailyWageMap.values()).some(wage => wage === 80);
console.log("Is There Any Part Time Wage?", hasPartTimeWage);

// g. 
const workingDays = Array.from(empDailyHoursMap.values())
    .filter(hours => hours > 0).length;
console.log("Number of Days Employee Worked:", workingDays);