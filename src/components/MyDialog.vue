<template>
    <div>
<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="日期" :label-width="formLabelWidth">
      <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      >
    </el-date-picker>
    </el-form-item>
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancelfn">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </div>
</el-dialog>
    </div>
</template>
<script>

export default {
    name:"MyDialog",
    props:[
        "form",
        "formLabelWidth",
        "dialogFormVisible"
    ],
    methods:{
        confirm(){
            // 事件名
          this.$emit("confirm_my") 
         
        },
         cancelfn(){
             this.$emit("my_cancel") 
         }
    }
}
</script>