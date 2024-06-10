const Employee = require('../../../models/employee/employee');
const createRegistration = require('../../../utils/createRegistration')

module.exports = (req, res) =>{
    const { name, email, typeEmployeeId } = req.body
    const registration = createRegistration();
    const password = 'bookstore@123';

    Employee.create({
        name,
        registration,
        email,
        password,
        typeEmployeeId
    })
    .then(() =>{
        res.send('Employee created successfuly');
    })
    .catch((err) =>{
        res.send(`Erro in create Employee ${err}`);
    })
}