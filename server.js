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
    const sql = `SELECT department_name AS "dept." FROM departments`;
    db.query(sql, (err, rows) => {
        if(err){
            console.log(500).json({ error: err.message});
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

const addDept = () => {
    addDept.prompt = [{

        type: 'input',
        name: 'department_name',
        message: 'What department would you like to add?'
    }

    ];
    inquirer.prompt(addDept.prompt).then((answers)=> {
      console.log(answers.department_name);
    const department_name =answers.department_name;
    const sql =`INSERT INTO departments (department_name) VALUES ('${department_name}')`;
       //onsole.log(sql);
        db.query(sql, (err, results) => {
           if (err) throw err;
            console.log('Department Added!');
    });
  });
};

const addARole = () => {
    addARole.prompt = [{

        type: 'input',
        name: 'role',
        message: 'What role would you like to add ?:'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?:'
    },

    {
        type: 'input',
        name: 'dept',
        choices: function () {
            let choiceArray = results[1].map(choice => choice.department_name);
            return choiceArray;
        },
        message: "Which dept. does this role belong to?:"

    }
    

   ];return((answer) => {
    const sql =
        `INSERT INTO role(title, salary, department_id) 
        VALUES
        ("${answer.newTitle}", "${answer.newSalary}", 
        (SELECT id FROM departments WHERE department_name = "${answer.dept}"));`

        db.query(sql, (err, results) => {
            if (err) throw err;
             console.log('Department Added!');
    
   });
});
}

     

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


module.exports = prompt;


    prompt();
  
