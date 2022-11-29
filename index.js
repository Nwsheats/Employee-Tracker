const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const db = require('./db/database');


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
        let choice = data.menu;
        switch (choice) {
            case 'View_Employees':
                viewEmployees();
                break;
            case 'Add_Employees':
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
            case 'Add_Department':
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


function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'first_name'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last_name'
        }])
        .then((data) => {
            let firstName = data.first_name;
            let lastName = data.last_name;
            db.viewAllRoles()
            .then(([data]) => {
                let roleData = data
                const roleMap = roleData.map(({ id, title }) => ({
                    name: title,
                    value: id
                }))
                inquirer.prompt([
                    {
                        type: 'list',
                        message: "What is the employee's role",
                        name: 'role_id',
                        choices: roleMap
                    }
                ]).then(res => {
                    let roleID = res.role_id;
                    db.viewAllEmployees()
                        .then(([data]) => {
                            let managerData = data;
                            const managerMap = managerData.map(({ first_name, last_name, manager_id }) => ({
                                name: `${first_name} ${last_name}`,
                                value: manager_id,
                            }))
                            inquirer.prompt([
                                {
                                    type: 'list',
                                    message: "Who is the employee's manager",
                                    name: 'emanager',
                                    choices: managerMap
                                }]).then(res => {
                                    const newEmployee = {
                                        first_name: firstName,
                                        last_name: lastName,
                                        role_id: roleID,
                                        manager_id: res.emanager
                                    }
                                    db.addNewEmployee(newEmployee)

                                }).then(() => {
                                    console.log(`${firstName} ${lastName} added successfully!`)
                                })
                                    .then(() => inquiry())
                        })
        })
    })
})}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of this role?",
            name: 'title'
        },
        {
            type: 'input',
            message: "What is the salary of this role?",
            name: 'salary'
        }
        ]).then((data) => {
            let roleName = data.title;
            let roleSalary = data.salary;
            db.viewAllDept()
            .then(([data]) => {
                let deptData = data
                const deptMap = deptData.map(({ id, dept_name }) => ({
                    name: dept_name,
                    value: id
                }))
                inquirer.prompt([
                    {
                        type: 'list',
                        message: "Which department does the role belong to?",
                        name: 'department_id',
                        choices: deptMap
                    }
                ]).then(res => {
                    let deptID = res.department_id;
                    const newRole = {
                        title: roleName,
                        salary: roleSalary,
                        department_id: deptID,
                    }
                    db.addEmployeeRole(newRole);
                }).then(() => {
                    console.log(`${roleName} added successfully!`)
                })
                    .then(() => inquiry())
        })
    })}

function addDept() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of the department?",
            name: 'dept_name'
        }
        ]).then((data) => {
            let deptData = data;
            db.addEmployeeDept(deptData)
            .then(() => {
                console.log(`Added successfully!`)
            })
            .then(() => inquiry())
            })
            }




function updateRole() {
    db.viewAllEmployees()
    .then(([data]) => {
        let employeeData = data;
        const employeeMap = employeeData.map(({ first_name, last_name, id }) => ({
            name: `${first_name} ${last_name}`,
            value: id,
        }))
        inquirer.prompt([
        {
            type: 'list',
            message: "Which employee's role do you want to update?",
            name: 'id',
            choices: employeeMap
        },
    ]).then(res => {
        let employeeID = res.id;
        db.viewAllRoles()
            .then(([data]) => {
                let roleData = data;
                const roleMap = roleData.map(({ title, id }) => ({
                    name: title,
                    value: id,
                }))
                inquirer.prompt([
                    {
                        type: 'list',
                        message: "What role do you want to assign the selected employee?",
                        name: 'title',
                        choices: roleMap
                    }    
                ]).then(res => {
                    db.updateEmployeeRole(employeeID, res.title);
                }).then(() => {
                    console.log(`Added successfully!`)
                })
                    .then(() => inquiry())
        })
    })}
)}


function quitMenu() {
    process.exit()
}

inquiry();