const mysql= require('mysql2');
const inquirer = require('inquirer');
const Ctable = require('console.table');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;
//Upon start- prompt the following options
const promptMessages = {
  viewAllDepartments: "View All Departments",
  viewAllRoles: "View All Roles",
  viewAllEmployees: "View All Employees",
  addDepartment: "Add A Department",
  addRole: "Add A Role",
  addEmployee: "Add An Employee",
  updateRole: "Update Employee Role",
  viewByDepartment: "View All Employees By Department",
  viewByManager: "View All Employees By Manager",
  exit: "Exit"
};

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,
//SQL username
  user: 'root',

//SQL password
  password: 'FuzzyCrackhead2317#',
  database: 'employee'
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);