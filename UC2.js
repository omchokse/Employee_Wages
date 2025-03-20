const IS_PART_TIME= 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  

let Hrs = 0;  
emp= Math.floor(Math.random()*10) % 3; 
switch(emp){
    case IS_PART_TIME:  
    Hrs=PART_TIME_HOURS;  
    break;
    case IS_FULL_TIME:  
    Hrs=FULL_TIME_HOURS; 
    break;
    default:
        Hrs=0;  
    }
    let empWage=Hrs * WAGE_PER_HOUR;  
    console.log("Emp Wage: " + empWage);