let Mock = require("mockjs")
let dayjs = require('dayjs')
// 拦截aa
let arr =  {
    tableData: [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "李小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "2016-05-01",
      name: "赵小虎",
      address: "上海市普陀区金沙江路 1519 弄45"
    },
    {
      date: "2016-05-03",
      name: "高小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ]
}
// 请求
Mock.mock("/api/all","get",(options)=>{
    console.log(options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// 删除
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    console.log(options)
    let url = options.url
    let index = url.split("=")[1]
   
    let newarr = arr.tableData.splice(index,1)
    console.log(newarr)  //删除后的数据
    return {
        status:200,
        message:"删除成功",
        data:arr.tableData
    }
})
// 增加
Mock.mock("/api/add","post",(options)=>{
    let body = JSON.parse(options.body)
    console.log(body);
    body.date =  dayjs(new Date(body.date)).format("YYYY-MM-DD")
    // let {date,name,address,index} = body.params
    arr.tableData.push(body)
    return {
        status:200,
        message:"success",
        data:arr.tableData
    }
})
// 修改
Mock.mock("/api/update","put",(options)=>{
  console.log(options)
    let body = JSON.parse(options.body)
    console.log(body)
    
    let {date,name,address,index} = body.params
    console.log(index)
    console.log(arr.tableData)
    arr.tableData[index].date = date
    arr.tableData[index].name = name
    arr.tableData[index].address = address
    console.log('61',body)
    return {
        statdate:200,
        message:"success",
        data:arr.tableData
    }
})