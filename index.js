const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { allowedNodeEnvironmentFlags } = require('process');


const getEmployees = () => {
    return db.promise().query('SELECT * FROM employee');
}

const inquiry = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'initial',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ]) .then((data) => {
        switch (data) {
            case data.choices === 'View All Employees':
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                })
                return inquiry();
            case data.choices === 'Add Employee':
                // code
                return addEmployee();
            case data.choices === 'Update Employee Role':
                //code
                return updateRole();
            case data.choices === 'View All Roles':
                db.query('SELECT * FROM roles', function (err, results) {
                    console.table(results);
                })
                return inquiry();
            case data.choices === 'Add Role':
                // code
                return addRole();
            case data.choices === 'View All Departments':
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                })
            case data.choices === 'Add Department':
                // code
                return addDept();
            case data.choices === 'Quit':
                break;
        }
    })
}