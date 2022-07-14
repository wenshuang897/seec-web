let Mock = require("mockjs")
// 拦截aa
let arr = ['a45','hd','f785','yop'] 
//         /\/api\/aa/
Mock.mock("/api/bb","get",(options)=>{
    return arr
})

Mock.mock("/api/acd","post",(options)=>{
    console.log(options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})