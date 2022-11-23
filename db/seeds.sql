INSERT INTO department (dept_name)
VALUES ("Operations"),
       ("Sales"),
       ("Engineering"),
       ("Billing"),
       ("Marketing"),
       ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Operations Lead", 200000, 1),
       ("Operations Specialist", 80000, 1),
       ("Lead Engineer", 230000, 3),
       ("Software Engineer", 120000, 3),
       ("Sales Lead", 200000, 2),
       ("Sales Associate", 110000, 2),
       ("Billing Lead", 150000, 4),
       ("Billing Specialist", 100000, 4),
       ("Marketing Lead", 180000, 5),
       ("Marketing Associate", 75000, 5),
       ("Legal Head", 280000, 6),
       ("Lawyer", 180000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Khan", 1, 1),
       ("Tony", "Schiavone", 2, NULL),
       ("Britt", "Baker", 3, 2),
       ("Jamie", "Hayder", 4, NULL),
       ("Serena", "Deeb", 4, NULL),
       ("Kenny", "Omega", 5, 3),
       ("Matt", "Jackson", 6, NULL),
       ("Nick", "Jackson", 6, NULL),
       ("Andrade", "El Idolo", 7, 4),
       ("Matt", "Hardy", 8, NULL),
       ("Chris", "Jericho", 9, 5),
       ("Daniel", "Garcia", 10, NULL),
       ("William", "Regal", 11, 6),
       ("Jon", "Moxley", 12, NULL),
       ("Bryan", "Danielson", 12, NULL),
       ("Wheeler", "Yuta", 12, NULL),
       ("Sammy", "Guevara", 10, NULL);