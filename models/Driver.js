const { Schema, model } = require('mongoose')
const driverSchema = new Schema({
    tabelNumber: {type: String, required: true, unique: true},
    fio: {type: String, required: true},
    post: {type: String, required: true},
    licenseDateTo: {type: String, required: true, unique: true},
    licenseNumber: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    dateOfWork: {type: String, required: true},
    order:{type: String, required: true},
    address:{type: String, required: true},
    phoneNum: {type: String, required: true}
})

// Duplicate the ID field.
driverSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
driverSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Driver', driverSchema)