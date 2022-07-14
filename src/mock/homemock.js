let Mock = require("mockjs")
// 拦截aa
let arr = ['a','h','f','y'] 
//         /\/api\/aa/
Mock.mock("/api/aa","get",(options)=>{
    return arr
})

Mock.mock("/api/ab","post",(options)=>{
    console.log(options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})