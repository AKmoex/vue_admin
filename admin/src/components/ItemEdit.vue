<template>
    <div>
        <h1>{{id?'编辑':'新建'}}</h1>
        <el-form @submit.native.prevent="save" label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :headers="getAuthHeader()"
                    :show-file-list="false"
                    :on-success="afterUpload">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
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
            model:{},
        }
    },
    methods:{
        async save(){        
            let res    
            if(this.id){
                const res=await this.$http.put('rest/items/'+this.id,this.model);
            }
            else{
                const res=await this.$http.post('rest/items',this.model);
            }
            
            this.$message({
                type:'success',
                message:'保存成功'
            })
            this.$router.push('/items/list')
        },
        async fetch(){
            const res=await this.$http.get(`rest/items/${this.id}`);
            this.model=res.data;
        },
        async afterUpload(res){
        //原来是没有icon属性的，后面想加上的话最好用set语法
        //当然也可以直接再model里面把需要用的数据先统一定义好
        this.$set(this.model,'icon',res.url)
        }
    },
    created(){
        //console.log(this.id)
        this.id && this.fetch()
    },
}
</script>
<style>
  
</style>
