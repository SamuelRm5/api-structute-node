const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log("Conexión exitosa a BD online");

    } catch (error) {
        
        throw new Error('Error en la inicialización de la BD')

    }

}





module.exports = {
    dbConnection,

}