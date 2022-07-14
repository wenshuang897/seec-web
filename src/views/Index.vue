<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column align="center" label="日期" width="100px" prop="date">
      </el-table-column>
      <el-table-column label="姓名" width="100px" align="center" prop="name">
      </el-table-column>
      <el-table-column 
      label="地址" 
      width="400px" align="center" 
      prop="address">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" 
          size="mini" 
          placeholder="输入关键字搜索"
          @blur="keywordfn"
           />
        </template>
      </el-table-column>
      
      <el-table-column label="修改" 
      width="300px" 
      align="right" 
      >
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini" 
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-button @click="addfn">增加新用户</el-button>
    <!-- 表单 -->
   <MyDialog 
   :form="form" 
   :dialogFormVisible="dialogFormVisible" 
   :formLabelWidth="formLabelWidth"
   @confirm_my="confirm"
   @my_cancel="cancelfn"
   />
<!-- <button @click="getkan">数据有无修改</button> -->
<!-- 增加弹窗 -->
 <AddDialog 
 :addform="addform"
  :formLabelWidth="formLabelWidth"
  :incrementform="incrementform"
  @my_addconfirm="addconfirm"
  @my_addcancel="addcancelfn"
   />
  </div>
</template>
<script>
import MyDialog from "@/components/MyDialog.vue"
import AddDialog from "@/components/AddDialog.vue"
import instance from "@/api/api"
import dayjs from "dayjs"
export default {
  name: "Index",
   props: {
    value1: {
      type: String,
      // required: true,
    },
  },

  data() {
    return {
      tableData: [],
      search: "",
      dialogFormVisible:false,
      form:{
        index:0,
        date:null, 
        name:"",
        address:"",
        newdate:"",
      },
      addform:{
        date:null,
        name:"",
        addre:""
      },
      formLabelWidth:"120px",
      incrementform:false
     
    }
  },
  methods:{
    async keywordfn(){
      let {data} = await instance.get("/all")
      console.log(data.data.tableData)
      let word = this.search
      let keyarr=[]
       data.data.tableData.find((item,index)=>{
         console.log(item)
        if(item.name === word){
           keyarr.push(item)
          return keyarr
        }
      })
      this.tableData = keyarr
    },
    cancelfn(){
       this.dialogFormVisible = false
    },
    handleDelete(a,b){
        this.$confirm('确定删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.deletefn(a).then(()=>{
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
           })
        })
      .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
    },
    async deletefn(index){
        // 删除业务
        // let {data} = await instance.delete("/delete?index="+index)
        let {data} = await instance.delete("/delete",{params:{index}})
        console.log(data)
        this.getAll()
    },
    async getAll(){
        let {data} = await instance.get("/all")
        this.tableData = data.data.tableData
    },
    handleEdit(a,b){
        // console.log(a,b)
        this.dialogFormVisible = true
        this.form = b
        console.log(this.form)
        //  this.form.date = this.value1
         this.form.index = a
         
    },
    // 修改业务
    async updatefn(){
      let {date,name,address,index} = this.form
      console.log(index)
       let {data} = await instance.put("/update",{params:{date,name,address,index}})
       console.log(data)
    },
    // 修改用户行为
   confirm(){
    this.dialogFormVisible = false
    this.form.date = dayjs(new Date(this.form.date)).format("YYYY-MM-DD")
    this.updatefn()
   },
  //  getkan(){
  //   instance.get("/all").then(res=>console.log(res))
  //  },
   addfn(){
    // 用户行为
    this.incrementform = true
    //  this.getAll()
   },
  //  增加业务
  async incrementfn(){
    let {date,address,name} = this.addform
    let {data} = await instance.post("/add",{date,address,name})
    console.log(data)
  },
  addcancelfn(){
   this.incrementform = false
  },
  addconfirm(){
    this.incrementfn().then(()=>{
      this.$message({
        type:"success",
        message:"添加成功",
        duration:3000,
        onClose:()=>{
          this.incrementform = false
          this.getAll()
        }
      })
    }).catch(()=>{

    })
   
  }

  },
  created(){
    this.getAll();
    
    },
    mounted(){
     
  },
  computed:{
   
  },
  components:{
   MyDialog,
   AddDialog
  }
  
};
</script>
