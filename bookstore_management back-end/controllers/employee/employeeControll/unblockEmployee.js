const Employee = require('../../../models/employee/employee');

module.exports = (req, res) =>{
    const { id } = req.params;

    Employee.findOne({ where: { employee_id: id } })
    .then((employee) =>{
        if(employee.situation){
            res.send('This user is not blocked')
        }else if(!employee.situation){
            employee.update({ 
                situation: true,
                password: 'bookstore@123'
            });
            res.send('User unblocked');
        }
    })
    .catch((err) =>{
        res.send(`Error in unblock employee ${err}`);
    })
}