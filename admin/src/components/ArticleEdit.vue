<template>
    <div>
        <h1>{{id?'编辑':'新建'}}文章</h1>
        <el-form @submit.native.prevent="save">
            <el-form-item label="所属分类" label-width="80px">
                <el-select v-model="model.categories" placeholder="请选择" multiple>
                    <el-option v-for="item in categories" :key="item._id" :value="item._id" :label="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题" label-width="80px">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="详情" label-width="80px">
                <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存更改</el-button>
            </el-form-item>
        </el-form>
    </div>    
</template>
<script>
import { VueEditor } from "vue2-editor";
/* eslint-disable */
export default {
    props:{
        id:{}
    },
    components: {
        VueEditor
    },
    data(){
        return {
            model:{
                title:'',
                body:'',
                categories:[]
            },
            categories:[]
        }
    },
    methods:{
        async save(){        
            let res    
            if(this.id){
                const res=await this.$http.put('rest/articles/'+this.id,this.model);
            }
            else{
                const res=await this.$http.post('rest/articles',this.model);
            }
            
            this.$message({
                type:'success',
                message:'保存成功'
            })
            this.$router.push('/articles/list')
        },
        async fetch(){
            const res=await this.$http.get(`rest/articles/${this.id}`);
            this.model=res.data;
        },
        async fetchCategories(){
            const res=await this.$http.get('rest/categories')
            this.categories=res.data;
        },
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData();
            formData.append("file", file);
            const res=await this.$http.post('upload',formData);
            let url = res.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
        }
    },
    created(){
        this.id && this.fetch()
        this.fetchCategories();
    },
}
</script>