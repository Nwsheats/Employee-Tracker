const connection = require('../config/connections');

class Database {
    constructor(connection) {
        this.connection = connection;
    }


    viewAllEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee"
    )}

    addNewEmployee(newEmployee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", newEmployee
    )}
    
    updateEmployeeRole(EID, RID) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [RID, EID]
    )}

    viewAllRoles() {
        return this.connection.promise().query(
            "SELECT * FROM roles"
    )}

    addEmployeeRole(newRole) {
        return this.connection.promise().query(
            "INSERT INTO roles SET ?", newRole
    )}

    viewAllDept() {
        return this.connection.promise().query(
            "SELECT * FROM department"
    )}

    addEmployeeDept(newDept) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?", newDept
    )}

    }

module.exports = new Database(connection);