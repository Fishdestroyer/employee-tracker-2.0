INSERT INTO departments(department_name)
VALUES
('Service'),
('sales'),
('install');

INSERT INTO role (job_title, department_id, salary)
VALUES
('Service_technician', 1, 50000),
('Sales_person', 2, 100000),
('Installer', 3, 30000),
('Dispatcher', 1, 40000);

INSERT INTO employee (last_name, first_name, job_title, department, salary, role_id, manager)
VALUES
('Doe', 'John', 'installer', 'install', 30000, 3, 'Install Manager'),
('Mehoff', 'Jack', 'Service_technician', 'Service', 50000, 1, 'Service Manager'),
('Running', 'Justine', 'Dispatcher', 'Service', 40000, 1, 'Service Manager'),
('Doo', 'Dew', 'Sales_person', 'sales', 100000, 2, 'Sales Manager');
