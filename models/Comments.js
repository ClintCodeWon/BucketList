var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  title: String,

});
mongoose.model('Item', ItemSchema);
