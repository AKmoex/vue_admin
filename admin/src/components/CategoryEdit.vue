<template>
    <div>
        <h1>{{id?'编辑':'新建'}}</h1>
        <el-form @submit.native.prevent="save">
            <el-form-item label="上级分类" label-width="80px">
                <el-select v-model="model.parent" placeholder="请选择">
                    <el-option v-for="item in parents" :key="item._id" :value="item._id" :label="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分类名称" label-width="80px">
                <el-input v-model="model.name"></el-input>
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
            parents:[]
        }
    },
    methods:{
        async save(){        
            let res    
            if(this.id){
                const res=await this.$http.put('rest/categories/'+this.id,this.model);
            }
            else{
                const res=await this.$http.post('rest/categories',this.model);
            }
            
            this.$message({
                type:'success',
                message:'保存成功'
            })
            this.$router.push('/categories/list')
        },
        async fetch(){
            const res=await this.$http.get(`rest/categories/${this.id}`);
            this.model=res.data;
        },
        async fetchParents(){
            const res=await this.$http.get('rest/categories')
            this.parents=res.data;
        }
    },
    created(){
        this.id && this.fetch()
        this.fetchParents();
    },
}
</script>