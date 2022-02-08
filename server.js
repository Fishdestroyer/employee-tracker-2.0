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
        case 'Update an employee':
            updateAnEmployee;
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
        prompt();
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
        prompt();
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
        });
    });
};

addDept = () => {
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

addARole = () => {
    let departmentOptions = [];
    for (i = 0; i < department.length; i++) {
        departmentOptions.push(Object(department[i]));
    };

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
        db.query(`INSERT INTO role (job_title, salary, department_id) VALUES ('${answer.job_title}', '${answer.salary}', ${answer.department_name})`, (err, res) => {
            if (err) throw err;

            console.log("1 new role added: " + answer.job_title);
            //getRole();
            //start();

        })
        prompt();
    })
};






//test server connection
//app.get('/', (req, res) => {
// res.json({
// message: 'Hello World'
//});
//});

// app.use((req, res) => {
//   res.status(404).end();
//  });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





prompt();