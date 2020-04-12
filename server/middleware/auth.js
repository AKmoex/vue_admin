module.exports=(options)=>{
    const jwt=require('jsonwebtoken')
    const assert=require('http-assert')
    const AdminUser=require('../models/AdminUser')

    return async(req,res,next)=>{
        const token=String(req.headers.authorization||'').split(' ').pop();
        //无token
        assert(token,401,'请先登录1')
        //查出用户id
        const{id}=jwt.verify(token,req.app.get('secret'))
        assert(id,401,'请先登录2')
        //根据id查出用户
        req.user=await AdminUser.findById(id)
        assert(req.user,401,'请先登录3')
        await next()
    }
}