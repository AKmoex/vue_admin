const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const adSchema=new Schema({
    name:{type:String},
    items:[{
        img:{type:String},
        url:{type:String}
    }]

})
module.exports=mongoose.model('Ad',adSchema)

  