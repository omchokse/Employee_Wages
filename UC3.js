const IS_PART_TIME= 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  

function getWorkingHrs(emp){
    switch(emp){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
let Hrs=0;
let emp=Math.floor(Math.random()*10)%3;
Hrs=getWorkingHrs(emp);
let empWage=Hrs*WAGE_PER_HOUR;
console.log("Emp wage:"+empWage);