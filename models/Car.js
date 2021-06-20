const { Schema, model } = require('mongoose')
const carSchema = new Schema({
    regNumber: {type: String, required: true, unique: true},
    vin: {type: String, required: true, unique: true},
    autoType: {type: String, required: true},
    autoModel:  {type: String, required: true},
    maintenanceDate:  {type: String, required: true},
    insuranceDate:  {type: String, required: true},
    category:  {type: String, required: true},
    bornDate:  {type: String, required: true},
    engineModel: {type: String, required: true},
    bodyNumber: {type: String, required: true},
    power:  {type: String, required: true},
    color:  {type: String, required: true},
    engineVolume:  {type: String, required: true},
    manufacturer:  {type: String, required: true},
    passNumber:  {type: String, required: true},
    passDate:  {type: String, required: true},
    issuedBy:  {type: String, required: true},
    owner:  {type: String, required: true},
    price:  {type: String, required: true},
    drivers: [{ 
         _id: false,
         tabelNumber: { type: String },
         fio: {type: String},
         licenseNumber: {type: String} 
    }]
})

module.exports = model('Car', carSchema)