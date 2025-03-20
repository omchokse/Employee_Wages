class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
}

// Creating Employee Payroll Data objects
const emp1 = new EmployeePayroll(101, "Rashi", 50000);
const emp2 = new EmployeePayroll(102, "Diksha", 60000);
const emp3 = new EmployeePayroll(103, "Shantanu", 55000);

// Storing multiple employee records in an array
const employees = [emp1, emp2, emp3];

// Printing Employee Details
employees.forEach(emp => console.log(emp.getDetails()));