const Employee = require('../../../models/employee/employee');

let count = 0;

module.exports = (req, res) => {
    const { registration, password } = req.body;

    Employee.findOne({ where: { registration: registration } })
        .then((employee) => {
            if (!employee) {
                res.send('Employee not found');

            } else if (employee.password !== password) {
                console.log('Senha incorreta');
                count ++
                if(!employee.situation){
                    res.send('You are blocked');
                }else{
                    res.send('Wrong password');
                }
                if(count == 3){
                    employee.update({ situation: false });
                    console.log('block');
                }

            } else if(!employee.situation && employee.password == password ){
                res.send('You are blocked');

            }else{
                res.send('Welcome');
            }
        })
        .catch(err => {
            console.log(`Error to find employee ${err}`);
        });
}
