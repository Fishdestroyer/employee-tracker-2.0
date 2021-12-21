const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const consoleTable = require('console.table');


//const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'FuzzyCrackhead2317#',
        database: 'employee'
    },
    console.log('Connected to the employee database.')
);

const prompt = () => {
     return inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Please choose from the options below',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee'
                ]
            }
        ])
        .then(answer => {
            //console.log('answer', answer);
            switch (answer.options) {
                case 'View all departments':
                    department();
                    break;

                case 'View all roles':
                    role();
                    break;

                case 'View all employees':
                    employees();
                    break;

                case 'Add a department':
                    addDept();
                    break;

                case 'Add a role':
                    addARole();
                    break;

                case 'Add an employe':
                    addAnEmployee;
                    break;
                case 'Update an employee':
                    updateAnEmployee;
                    break;
            }
        });
}

const department = () => {
    const sql = `SELECT department_name FROM departments`;
    db.query(sql, (err, rows) => {
        if(err){
            res.status(500).json({ error: err.message});
            return;
        }
        console.log({
            message: 'You did it!',
            data: rows
        });
    });
};


const role = () => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if(err){
            res.status(505).json({ error: err.message});
            return;
        }
        console.log({
            message: 'Whoa Nelly, You did it again!',
            data: rows
        });
    });
};


const employees = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if(err){
            res.status(505).json({ error: err.message});
            return;
        }
        console.log({
            message: 'WOOOOHOOO 3 in a row',
            data: rows
        });
    });
};
     

//db.query(`SELECT * FROM employee`, (err, rows) => {
  //console.log(rows);
//});

  //db.query(`SELECT * FROM employee WHERE employee_id = 1`, (err, row) => {
    //if (err) {
      //console.log(err);
    //}
    //console.log(row);
  //});


//test server connection
  //app.get('/', (req, res) => {
   // res.json({
     // message: 'Hello World'
    //});
  //});

  app.use((req, res) => {
    res.status(404).end();
  });

  
  //  app.listen(PORT, () => {
  //    console.log(`Server running on port ${PORT}`);
  //  });





    prompt();
  

  