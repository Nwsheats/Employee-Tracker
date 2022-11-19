INSERT INTO department (id, dept_name)
VALUES (1, "Operations"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Billing")
       (5, "Marketing")
       (6, "Legal");


INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Operations Lead", 200000, 1),
       (2, "Operations Specialist", 80000, 1),
       (3, "Lead Engineer", 230000, 3),
       (4, "Software Engineer", 120000, 3),
       (5, "Sales Lead", 200000, 2),
       (6, "Sales Associate", 110000, 2),
       (7, "Billing Lead", 150000, 4),
       (8, "Billing Specialist", 100000, 4),
       (9, "Marketing Lead", 180000, 5),
       (10, "Marketing Associate", 75000, 5),
       (11, "Legal Head", 280000, 6),
       (12, "Lawyer", 180000, 6);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Tony", "Khan" 1, 1),
       (2, "Tony", "Schiavone", 2, NULL),
       (3, "Britt", "Baker", 3, 2),
       (4, "Jamie", "Hayder", 4, NULL),
       (5, "Serena", "Deeb", 4, NULL),
       (5, "Kenny", "Omega", 5, 3),
       (6, "Matt", "Jackson", 6, NULL),
       (7, "Nick", "Jackson", 6, NULL),
       (8, "Andrade", "El Idolo" 7, 4),
       (9, "Matt", "Hardy", 8, NULL),
       (10, "Chris", "Jericho", 9, 5),
       (11, "Sammy", "Guevara", 10, NULL),
       (12, "Daniel", "Garcia", 10, NULL),
       (13, "William", "Regal", 11, 6),
       (14, "Jon", "Moxley", 12, NULL),
       (15, "Bryan", "Danielson", 12, NULL),
       (16, "Wheeler", "Yuta", 12, NULL);