const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const adminUserSchema=new Schema({
    username:{type:String},
    password:{
        type:String,
        select:false,   //防止对散列后的值再次进行散列
        set(val){
            return require('bcryptjs').hashSync(val,10)
        }
    }
})
module.exports=mongoose.model('AdminUser',adminUserSchema)