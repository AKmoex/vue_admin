<template>
    <div>
        <h1>{{id?'编辑':'新建'}}</h1>
        <el-form @submit.native.prevent="save" label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="称号">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <!--element选择器一个属性multiple，加上便允许多选-->
                <el-select v-model="model.categories" placeholder="请选择" multiple>
                    <el-option v-for="item in categories" :key="item._id" :value="item._id" :label="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="难度">
                <div class="block">
                    <el-rate v-model="model.scores.difficult" :max=10></el-rate>
                </div>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="afterUpload">
                    <img v-if="model.avatar" :src="model.avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存更改</el-button>
            </el-form-item>
        </el-form>
    </div>    
</template>
<script>
/* eslint-disable */
export default {
    props:{
        id:{}
    },
    data(){
        return {
            categories:[],
            model:{
                name:'',
                avatar:'',
                scores:{},
                value1: null,
                value2: null,
                
            },
        }
    },
    methods:{
        async fetchCategories(){
            const res=await this.$http.get('rest/categories')
            
            this.categories=res.data
        },
        async save(){        
            let res    
            if(this.id){
                const res=await this.$http.put('rest/heroes/'+this.id,this.model);
            }
            else{
                const res=await this.$http.post('rest/heroes',this.model);
            }
            
            this.$message({
                type:'success',
                message:'保存成功'
            })
            this.$router.push('/heroes/list')
        },
        async fetch(){
            const res=await this.$http.get(`rest/heroes/${this.id}`);
            // this.model=Object.assign({},res.data)
            this.model=res.data;
        },
        async afterUpload(res){
        //原来是没有icon属性的，后面想加上的话最好用set语法
        this.$set(this.model,'avatar',res.url)
        }
    },
    created(){
        this.fetchCategories()
        this.id && this.fetch()
    },
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: block;
  }
</style>
