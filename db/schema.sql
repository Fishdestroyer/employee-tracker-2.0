DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(25) NOT NULL
);

CREATE TABLE role (

    role_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    department_id INTEGER NOT NULL,
    salary INTEGER,
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE employee (
    employee_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    last_name VARCHAR(30),
	first_name VARCHAR(30),
    job_title VARCHAR(50),
    department VARCHAR(30),
    salary INTEGER,
    role_id INTEGER,
    manager VARCHAR(30),
    FOREIGN KEY(role_id) REFERENCES role(role_id)
);




