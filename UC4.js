const IS_PART_TIME= 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20; 

const NUM_OF_WORKING_DAYS=2;
let Hrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let emp=Math.floor(Math.random()*10)%3;
    Hrs+=getWorkingHrs(emp);
}
let empWage=Hrs*WAGE_PER_HOUR;
console.log("Total hrs :"+Hrs+"Emp Wage: "+empWage);