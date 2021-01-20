const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    title:String     
    ,
    image: String
    // fields:{
    //      title: String,
    //      name: String, 
    //      values: String
    //     } 

})

const Doc = mongoose.model('document', DocumentSchema );
module.exports = Doc;