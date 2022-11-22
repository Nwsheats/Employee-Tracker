const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table')


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
    ])
}