var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var BatchSchema = new Schema({
  batch_id: { type: String, unique: true, index: true},
  addresses: { type: Array, default: [] },
}, {id: false});

module.exports = mongoose.model('Batch', BatchSchema);
