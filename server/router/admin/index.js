module.exports=app=>{
    const express=require('express')
    const router=express.Router({
        mergeParams:true
    })
    const jwt=require('jsonwebtoken')
    const assert=require('http-assert') //抛出异常
    const AdminUser=require('../../models/AdminUser')

    const authMiddleware=require('../../middleware/auth')
    const resourceMiddleware=require('../../middleware/resource')

    //上传资源
    router.post('/',async(req,res)=>{
        const model=await req.Model.create(req.body)
        res.send(model);
    })

    //更新资源
    router.put('/:id',async(req,res)=>{
        const model=await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model);
    })

    //资源列表
    router.get('/',async(req,res)=>{
        let queryOptions={}
        if(req.Model.modelName=='Category'){
            queryOptions.populate='parent'
        }
        const items=await req.Model.find().setOptions(queryOptions).limit(10);
        res.send(items)
    })

    //删除资源
    router.delete('/:id',async(req,res)=>{
        const model=await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //资源详情
    router.get('/:id',async(req,res)=>{
        const model=await req.Model.findById(req.params.id);
        res.send(model)
    })

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    const multer=require('multer')
    const upload=multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async(req,res)=>{
        const file=req.file;
        file.url='http://localhost:3000/uploads/'+file.filename;
        res.send(file)
    })

    app.post('/admin/api/login',async (req,res)=>{
        const {username,password}=req.body
        const AdminUser=require('../../models/AdminUser')
        const user=await AdminUser.findOne({username}).select('+password')
        assert(user,422,'用户不存在')
        
        // if(!user){
        //     return res.status(422).send({
        //         message:'用户不存在'
        //     })
        // }
        // compareSync() bcryptjs中的明文与密文的比较
        
        const isValid=require('bcryptjs').compareSync(password,user.password)
        
        assert(isValid,422,'密码错误')

        // if(!isValid){
        //     return res.status(422).send({
        //         message:'密码错误'
        //     })
        // }
        
        const token=jwt.sign({id:user._id},app.get('secret'));
        res.send({token})
    })

    //统一错误处理
    app.use(async (err,req,res,next)=>{
        res.status(err.status).send({
            message:err.message
        })
    })
}