// Write your solution in this file!
const employee = {
    name: "Walter",
    streetAddress: "Seattle",
    }

function employees(company) {
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee.name = 'Sam';
    newEmployee.streetAddress = '11 Broadway';
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
    newEmployee.streetAddress = '12 Broadway';
    return newEmployee;
}

function deleteFromEmployeeByKey(newEmployee, key) {
    newEmployee.name = undefined;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(newEmployee, key) {
    delete newEmployee.name;
    return newEmployee;
}