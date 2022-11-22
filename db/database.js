const connection = require('../config/connections');

class Database {
    constructor(connection) {
        this.connection = connection;
    }


    viewAllEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee"
    )}

    addNewEmployee() {
        return this.connection.promise().query(
            "INSERT INTO employee"
    )}
    
    updateEmployeeRole() {
        return this.connection.promise().query(
            ""
    )}

    viewAllRoles() {
        return this.connection.promise().query(
            "SELECT * FROM roles"
    )}

    addEmployeeRole() {
        return this.connection.promise().query(
            "INSERT INTO roles"
    )}

    viewAllDept() {
        return this.connection.promise().query(
            "SELECT * FROM department"
    )}

    addEmployeeDept() {
        return this.connection.promise().query(
            "INSERT INTO department"
    )}

    }

module.exports = Database;