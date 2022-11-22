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
            ""
    )}
    
    updateEmployeeRole() {
        return this.connection.promise().query(
            ""
    )}

    viewAllRoles() {
        return this.connection.promise().query(
            ""
    )}

    addEmployeeRole() {
        return this.connection.promise().query(
            ""
    )}

    viewAllDept() {
        return this.connection.promise().query(
            ""
    )}

    addEmployeeDept() {
        return this.connection.promise().query(
            ""
    )}

    quitMenu() {
        return this.connection.promise().query(
            ""
    )}

    }

module.exports = Database;