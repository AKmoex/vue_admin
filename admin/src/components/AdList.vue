<template>
    <div>
        
        <h1>广告管理</h1>
        <el-table :data="items">
            <el-table-column prop="_id" label="ID" width="240">
            </el-table-column>
            <el-table-column prop="name" label="广告名称">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push('/ads/edit/'+scope.row._id)">
                        编辑
                    </el-button>
                    <el-button @click="deleteCategory(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    methods:{
        async fetch(){
            const res=await this.$http.get('rest/ads')            
            this.items=res.data;
        },
        async deleteCategory(row){
            this.$confirm(`是否确定要删除广告${row.name}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(async () => {
                const res=await this.$http.delete(`rest/ads/${row._id}`)
                this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.fetch();
        })      
        }
    },
    created(){
        this.fetch();
    }
}
</script>