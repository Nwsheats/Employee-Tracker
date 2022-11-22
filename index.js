const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/database');


// const viewAllEmployees = () => {
//     return db.promise().query('SELECT * FROM employee');
// }

const inquiry = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: [
            {
                name: 'View All Employees',
                value: 'View_Employees'
            },
            {
                name: 'Add Employee',
                value: 'Add_Employees'
            },
            {
                name: 'Update Employee Role',
                value: 'Update_Role'
            },
            {
                name: 'View All Roles',
                value: 'View_Roles'
            },
            {
                name: 'Add Role',
                value: 'Add_Role'
            },
            {
                name: 'View All Departments',
                value: 'View_Departments'
            },
            {
                name: 'Add Department',
                value: 'Add_Department'
            },
            {
                name: 'Quit',
                value: 'Quit_Inquiry'
            }]
        
        }
])
    .then(data => {
        let choice = data.choices;
        console.log(choice)
        switch (choice) {
            case 'View_Employees':
                viewEmployees();
                break;
            case 'Add_Employee':
                addEmployee();
                break;
            case 'Update_Role':
                updateRole();
                break;
            case 'View_Roles':
                viewRoles();
                break;
            case 'Add_Role':
                addRole();
                break;
            case 'View_Departments':
                viewDept();
                break;
            case 'Add Department':
                addDept();
                break;
            default:
                quitMenu();
        }
    })
}

function viewEmployees() {
    db.viewAllEmployees()
    .then(([table]) => {
        let employees = table;
        console.table(employees);
    })
    .then(() => inquiry())
}

function viewRoles() {
    db.viewAllRoles()
    .then(([table]) => {
        let allRoles = table;
        console.table(allRoles);
    })
    .then(() => inquiry())
}

function viewDept() {
    db.viewAllDept()
    .then(([table]) => {
        let allDept = table;
        console.table(allDept);
    })
    .then(() => inquiry())
}


function addEmployee(managerListArray) {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'fname'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lname'
        },
        {
            type: 'list',
            message: "What is the employee's role",
            name: 'erole',
            choices: ["Operations Lead", "Operations Specialist", "Lead Engineer", "Software Engineer", "Sales Lead", "Sales Associate", "Billing Lead", "Billing Specialist", "Marketing Lead",
            "Marketing Associate", "Legal Head", "Lawyer"]
        },
        {
            type: 'list',
            message: "Who is the employee's manager",
            name: 'emanager',
            choices: managerListArray
        }]) 
        db.addNewEmployee()
        .then(([table]) => {
            let employees = table;
            console.table(employees);
        })
        .then(() => inquiry())
}

function addRole(roleDeptArray) {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of this role?",
            name: 'rname'
        },
        {
            type: 'input',
            message: "What is the salary of this role?",
            name: 'rsalary'
        },
        {
            type: 'list',
            message: "Which department does the role belong to?",
            name: 'rdept',
            choices: roleDeptArray
        }]) 
        db.addEmployeeRole()
        .then(([table]) => {
            let newRole = table;
            console.table(newRole);
        })
        .then(() => inquiry())
}


function addDept() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of the department?",
            name: 'dname'
        }]), db.addEmployeeDept()
        .then(([table]) => {
            let newDept = table;
            console.table(newDept);
        })
        .then(() => inquiry())
}



function updateRole(employeeList, rolesList) {
    inquirer.prompt([
        {
            type: 'list',
            message: "Which employee's role do you want to update?",
            name: 'elist',
            choices: employeeList
        },
        {
            type: 'list',
            message: "What role do you want to assign the selected employee?",
            name: 'erole',
            choices: rolesList
        }]), db.updateEmployeeRole()
    .then(([table]) => {
        let update = table;
        console.table(update);
    })
    .then(() => inquiry())
}

function quitMenu() {
    return
}

inquiry();