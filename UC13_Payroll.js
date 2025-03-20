class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        // Validate Name
        if (!this.validateName(name)) {
            throw new Error("Invalid Name: Name must start with a capital letter and have at least 3 characters.");
        }
        
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
    }

    // Method to validate name using regex
    validateName = (name) => /^[A-Z][a-zA-Z]{2,}$/.test(name);

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Creating Employee Payroll Data objects with Try-Catch
try {
    const emp1 = new EmployeePayroll(101, "Rashi", 50000, "Female", "2023-06-15");
    console.log(emp1.getDetails());

    const emp2 = new EmployeePayroll(102, "Shantanu", 60000, "Male", "2022-09-10");
    console.log(emp2.getDetails());

    const emp3 = new EmployeePayroll(103, "john", 55000, "Non-Binary", "2021-12-01");
    console.log(emp3.getDetails());
} catch (error) {
    console.error(error.message);
}