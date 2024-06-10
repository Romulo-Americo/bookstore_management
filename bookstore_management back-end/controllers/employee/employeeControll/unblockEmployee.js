const Employee = require('../../../models/employee/employee');
const EmployeeAttemps = require('../../../models/employee/employeeAttemps');

module.exports = (req, res) =>{
    const { id } = req.params;

    Employee.findOne({ where: { employee_id: id } })
    .then((employee) =>{
        if(employee.situation){
           return res.send('This user is not blocked');
        }else{
            employee.update({ 
                situation: true,
                password: 'bookstore@123'
            });
            EmployeeAttemps.findOne( { where: { employee_id: id }} )
            .then((resetAttemps) =>{
                resetAttemps.update({
                    attemps: 0
                })
            })
            return res.send('User unblocked');
        }
    })
    .catch((err) =>{
        res.send(`Error in unblock employee ${err}`);
    })
}