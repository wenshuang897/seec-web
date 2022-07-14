<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <!-- 菜单 -->
        <el-row class="tac">
          <el-col >
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="rgb(48,65,86)"
              text-color="rgb(191,203,217)"
              :collapse="iscollapse"
              router
            >
               <el-menu-item index="/home/1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/home/2">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>
              <el-menu-item index="/home/3">
                <i class="el-icon-document"></i>
                <span slot="title">引导页</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限测试页</span>
                </template>
                <el-menu-item index="4-1">页面权限</el-menu-item>
                <el-menu-item index="4-2">指令权限</el-menu-item>
                <el-menu-item index="4-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>组件</span>
                </template>
                <el-menu-item index="5-1">页面权限</el-menu-item>
                <el-menu-item index="5-2">指令权限</el-menu-item>
                <el-menu-item index="5-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>图表</span>
                </template>
                <el-menu-item index="6-1">页面权限</el-menu-item>
                <el-menu-item index="6-2">指令权限</el-menu-item>
                <el-menu-item index="6-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>路由跳转</span>
                </template>
                <el-menu-item index="7-1">页面权限</el-menu-item>
                <el-menu-item index="7-2">指令权限</el-menu-item>
                <el-menu-item index="7-3">角色权限</el-menu-item>
              </el-submenu>
            </el-menu>
            
          </el-col>
        </el-row>
      </el-aside>
      <!-- 路由pu -->
       <router-view> 
      <el-container>
      
           
      
             <el-header>Header</el-header>
            <el-main>Main</el-main>
      
      </el-container>
       </router-view>
    </el-container> 
  
    
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data(){
    return{
        iscollapse:false  //aside是否折叠
    }
  },
  created() {},
  methods:{

    handleOpen(){},
    handleClose(){}
  }
};
</script>
<style lang="scss" scoped>
    .home{
        .aside{
            margin:0;
            padding:0;
            .el-menu-vertical-demo{
                height:100vh;
                .el-menu-item:hover{
                  background-color: #303133 !important;
                }
                .el-submenu_title:hover{
                  background-color:rgb(190, 61, 22) !important;
                }
            }

        }
    }
</style>
