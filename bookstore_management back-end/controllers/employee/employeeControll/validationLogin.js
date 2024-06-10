const Employee = require('../../../models/employee/employee');
const EmployeeAttemps = require('../../../models/employee/employeeAttemps');
const { Sequelize } = require('sequelize');

module.exports = (req, res) => {
    const { registration, password } = req.body;

    Employee.findOne({ where: { registration: registration } })
        .then(employee => {
            if (!employee) {
                res.send('Employee not found');
            }

            if (employee.password !== password) {
                EmployeeAttemps.findOne({ where: { employee_id: employee.employee_id } })
                    .then(attempt => {
                        if (!attempt) {
                            return EmployeeAttemps.create({ employeeId: employee.employee_id, attemps: 1 })
                                .then(() => {
                                    res.send('Incorrect password, attempt recorded');
                                });
                        } else {
                            EmployeeAttemps.update(
                                { attemps: Sequelize.literal('attemps + 1') },
                                { where: { employee_id: employee.employee_id } }
                            )
                            .then(() => {
                                return EmployeeAttemps.findOne({ where: { employee_id: employee.employee_id } });
                            })
                            .then(updatedAttempt => {
                                if (updatedAttempt.attemps >= 3) {
                                    res.send('Blocked');
                                    Employee.update(
                                        { situation: false },
                                        { where: { employee_id: updatedAttempt.employee_id } }
                                    )
                                } else {
                                    res.send('Incorrect password, attempt updated');
                                }
                            });
                        }
                    })
                    .catch(err => {
                        res.send(`Error finding employee attempts: ${err}`);
                    });
            } else {
                res.send(`Welcome, your ID is ${employee.employee_id}`);
            }
        })
        .catch(err => {
            console.error(`Error to find employee: ${err}`);
            res.send('Error occurred');
        });
};
