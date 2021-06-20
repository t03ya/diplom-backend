const { Schema, model } = require('mongoose')
const waybillSchema = new Schema({
    waybillType: {type: String, required: true},  
    checkOutTime: {type: String, required: true},  
    timeOutTime: {type: String, required: true},  
    driverId: {type: String, required: true},
    carId: {type: String, required: true},
    mileageUp: {type: String, required: true},
    mileageAfter: {type: String, required: true},
    status: {type: String, required: true}
})

// Duplicate the ID field.
waybillSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
waybillSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Waybill', waybillSchema)