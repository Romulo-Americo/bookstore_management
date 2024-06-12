const Employee = require('../../../models/employee/employee');
const EmployeeAttemps = require('../../../models/employee/employeeAttemps');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const { registration, password } = req.body;

    Employee.findOne({ where: { registration: registration } })
        .then(employee => {
            if (!employee) {
                return res.send('Employee not found');
            }

            bcrypt.compare(password, employee.password, (err, isMatch) => {
                if (err) {
                    return res.send(`Error comparing passwords: ${err}`);
                }

                if (!isMatch) {
                    EmployeeAttemps.findOne({ where: { employee_id: employee.employee_id } })
                        .then(attempt => {
                            if (!attempt) {
                                return EmployeeAttemps.create({ employee_id: employee.employee_id, attempts: 1 })
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
                                            return Employee.update(
                                                { situation: false },
                                                { where: { employee_id: updatedAttempt.employee_id } }
                                            );
                                        } else {
                                            res.send('Incorrect password');
                                        }
                                    });
                            }
                        })
                        .catch(err => {
                            res.send(`Error finding employee attempts: ${err}`);
                        });
                } else {
                    res.send('Welcome');
                }
            });
        })
        .catch(err => {
            console.error(`Error finding employee: ${err}`);
            res.send('Error occurred');
        });
};
