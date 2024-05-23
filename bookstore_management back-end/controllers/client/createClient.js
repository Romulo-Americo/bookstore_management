const Client = require('../../models/client/client');
const createRegistration = require('../../utils/createRegistration');

module.exports = (req, res) =>{
    const { name, email, address, contact } = req.body;
    const registration = createRegistration();
    const points = 0;
    const situation = true;
    const qtBooks = 0;
    const rentalDate = null;
    const returnDate = null;

    Client.create({
        name,
        email,
        address,
        contact,
        registration,
        points,
        situation,
        qtBooks,
        rentalDate,
        returnDate
    })
    .then(() =>{
        res.send('Client created successfuly');
    })
    .catch((err) =>{
        res.send(`Error in create client ${err}`)
    })
}