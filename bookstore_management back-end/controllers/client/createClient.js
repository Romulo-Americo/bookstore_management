const Client = require('../../models/client/client');

const createRegistration = require('../../utils/createRegistration');

module.exports = (req, res) =>{
    const { name, email, address, contact } = req.body;
    const registration = createRegistration()

    Client.create({
        name,
        registration,
        email,
        address,
        contact,
    })
    .then(() =>{
        res.send('Client created successfuly');
    })
    .catch((err) =>{
        res.send(`Error in create client ${err}`)
    })
}