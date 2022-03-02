const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const consoleTable = require('console.table');
const res = require('express/lib/response');
//const { listen } = require('express/lib/application');
//const Connection = require('mysql2/typings/mysql/lib/Connection');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
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

const prompt = async () => {
    const answer = await inquirer
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
        ]);
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

            case 'Add an employee':
                addAnEmployee;
                break;
    };
};

const department = () => {
    const sql = `SELECT department_name AS "dept." FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(500).json({ error: err.message });
            return prompt;
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
        if (err) {
            res.status(505).json({ error: err.message });
            return;
        }
        console.log({
            message: 'Whoa Nelly, You did it again!',
            data: rows
        })
        
    })
};


const employees = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(505).json({ error: err.message });
            return;
        }
        console.log({
            message: 'WOOOOHOOO 3 in a row',
            data: rows
        })
        
    })
};

 const addDept = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.staust(505).json({ error: err.message });
            return;
        }
        console.log({
            message: 'Please continue',
            data: rows
        });
    });
    addDept.prompt = [{

        type: 'input',
        name: 'department_name',
        message: 'What department would you like to add?'
    }

    ];
    inquirer.prompt(addDept.prompt).then((answers) => {
        console.log(answers.department_name);
        const department_name = answers.department_name;
        const sql = `INSERT INTO departments (department_name) VALUES ('${department_name}')`;
        console.log(sql);
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log('Department Added!');
        });
    });
};

const addARole = () => {


    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What role would you like to add?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary for this role?"
        },
        {
            name: "department_name",
            type: "list",
            message: "What department does this role belong to?",
            choices: ['1', '2', '3']
        },
    ]).then(function (answer) {
        db.query(`INSERT INTO role (job_title, salary, department_id) VALUES ('${answer.title}', '${answer.salary}', ${answer.department_name})`, (err, res) => {
            if (err) throw err;

            console.log("1 new role added: " + answer.title);

           // return prompt();
        })

    });

};



const addAnEmployee = () => {
   
    addAnEmployee.prompt([
        {
            name: "last_name",
            type: "input",
            message: "What is the new employess last name?"
        },
        {
            name: "first_name",
            type: "input",
            message: "What is the new employees first name?"
        },
      
       
        {
            name: "title",
            type: "input",
            message: "What is the new employees role?"
        },
        {
            name: "manager",
            type: "input",
            message: "Who is the new employees manager?"
        }
    ]);.then(function (answer) {
        db.query(`INSERT INTO employee (last_name, first_name, role, manager) VALUES ('${answer.last_name}', '${answer.first_name}', '${answer.title}', ${answer.manager}`, (err, res) => {
            if (err) throw err;

            console.log("1 new employee added: " + answer.last_name);


        })
    
    })
  
};


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





prompt();