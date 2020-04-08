<template>
    <div>
        <h1>{{id?'编辑':'新建'}}广告</h1>
        <el-form @submit.native.prevent="save" label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
                <el-button type="text" @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
                <el-row type="flex" style="flex-wrap:wrap">
                    <el-col :md="12" v-for="(item,index) in model.items" :key="index">
                        <el-form-item label="链接(URL)">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item v-model="item.img" label="图片">
                            <el-upload
                                class="avatar-uploader"
                                :action="$http.defaults.baseURL+'/upload'"
                                :show-file-list="false"
                                :on-success="(res)=>{
                                    $set(item,'img',res.url)
                                }">
                                <img v-if="item.img" :src="item.img" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="model.items.splice(index,1)">删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
            model:{
                name:'',
                items:[]
            },
        }
    },
    methods:{
        async save(){        
            let res    
            if(this.id){
                const res=await this.$http.put('rest/ads/'+this.id,this.model);
            }
            else{
                const res=await this.$http.post('rest/ads',this.model);
            }
            
            this.$message({
                type:'success',
                message:'保存成功'
            })
            this.$router.push('/ads/list')
        },
        async fetch(){
            const res=await this.$http.get(`rest/ads/${this.id}`);
            console.log(res.data);
            console.log(this.model);
            this.model=res.data;
            console.log(this.model);
            
        },
        
    },
    created(){
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
