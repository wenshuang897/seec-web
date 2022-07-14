let Mock = require("mockjs")
// 拦截aa

Mock.mock("/api/login","post",(config)=>{
    console.log(config)
    let body =  JSON.parse(config.body)
   let username = body.username
   let password = body.password
   if(username==='admin'&&password==='123456'){
    return{
        status:200,
        message:"success",
        data:{username,password,token:"6565665sb"}
       }
   }else{
    return{
        status:501,
        message:"fail",
       
       }
   }
   
})

