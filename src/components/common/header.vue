<template>
    <el-header>
      <title>home page</title>
      <link rel="shortcut icon" type="image/x-icon" href="../../assets/logo1.jpg" />
      <el-row class="header">

        <el-col :span="8"><div class="grid-content bg-purple logo"><img src="../../assets/logo.png" class="img-logo"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple hiddern" >帮助</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple hiddern" >登录 | 注册</div></el-col>
        <el-col :span="3" >
          
          <el-popover
            ref="popover4"
            width="180"
            placement="bottom-start"
            trigger="hover">
            <div style="text-align:center;margin-top:20px;">
                <img src="../../assets/wx-order-qrcode.png" style="width:160px;height:160px;">
                <div class="wx-order-desc">{{ $t("wxScanOrder") }}</div>
            </div>
           
          </el-popover>

          <div v-popover:popover4><img src="../../assets/wxorder.png" class="wx-order-img">{{ $t("wxOrder") }}</div>
         
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple lang-nav" >
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ $t("language") }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">
                  中文
                </el-dropdown-item>
                <el-dropdown-item command="en">
                  English
                </el-dropdown-item>
               
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      
      </el-row>
     
    </el-header>
</template>
<script>
export default {
  data(){
    return{
      options: [{
          value: '0',
          label: '中文'
        }, {
          value: '1',
          label: 'English'
      }]
    }
    
  },
  mounted(){
    if(this.$store.state.language){
      this.$i18n.locale = this.$store.state.language;
    }else{
      this.$store.state.language = this.$i18n.locale;
    }
  },
  methods:{
    handleCommand (command) {
        if (command === 'en') {
          this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
          this.$store.state.language = this.$i18n.locale;
        } else {
          this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en';
          this.$store.state.language = this.$i18n.locale;
        }
    }
  }

}
</script>
<style>

.wx-order-img {
  padding-top: 20px;
  opacity: 0.6;
  padding-right: 5px;
}

.lang-nav{
  padding: 20px;
  font-size: 16px;
}
</style>

