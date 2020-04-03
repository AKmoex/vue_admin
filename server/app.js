const express=require('express')

const app=express();
app.use(express.json());
app.use(require('cors')())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./plugins/db')(app)
require('./router/admin')(app);

app.listen('3000',()=>{
    console.log('express服务器启动完成了');
    
})