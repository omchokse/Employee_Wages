class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
    }

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Creating Employee Payroll Data objects
const emp1 = new EmployeePayroll(101, "Rashi", 50000, "Female", "2023-06-15");
const emp2 = new EmployeePayroll(102, "Shaan", 60000, "Male", "2022-09-10");
const emp3 = new EmployeePayroll(103, "Charlie", 55000, "Non-Binary", "2021-12-01");

// Storing multiple employee records in an array
const employees = [emp1, emp2, emp3];

// Printing Employee Details
employees.forEach(emp => console.log(emp.getDetails()));