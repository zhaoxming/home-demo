<template>
  
  <el-container>

    <v-header></v-header>
    <el-main>
        <!-- 图片 -->
        <div class="block-index">
          <img src="../assets/about-us-banner.jpg" class="about-us-banner">
          <div class="search-blcok">
          </div>
        </div>
          
          <!-- 热门城市 -->
          <div class="city-block">
            <div class="team-block-title">
                <span >About Us</span>
            </div>
           
           <el-row>
             <el-col :span="24">
                <span class="about-us-desc">
英窝窝（Innwowo）是一家专注服务于海外国际留学生并提供一站式综合服务互联网平台，总部位于英国Middlesbrough，在中国南京设有办公室。
                </span>
                
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="24">
              <span class="about-us-desc">
              为了满足全球40万的国际留学生解决在英国的基本生活需求，Innwowo致力于为每一个在英国留学生打造一个租房、出行、点餐一站式生活服务平台，
              用最周到的咨询与最便捷最有效的预定服务，为在英留学生的英国之旅添上最有利的助力。
           </span>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="24">
                <span class="about-us-desc">
                  Innwowo整合全英50多个城市、150多所大学拥有超过300000多间优质公寓房源，来满足全球40万的国际留学生解决在英国的租房需求。
                </span>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="24">
                <span class="about-us-desc">
                    Innwowo团队成员主要是由专业海归顾问组成，团队里的每一位成员都是值得信赖的80、90后英国留学生，他们有丰富的留学经验，
                    深度了解英国的社会文化与在英国有关学习生活的一切。Innwowo覆盖的英国区域，Innwowo将提供最好的信息与服务给你，用最周到的咨询与最便捷有效的预定，为你的英国之旅添上最有利的助力。

                </span>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="24">
                <span class="about-us-desc">
                    一家专属于在英留学生的生活服务平台，一个让每一个留学生温暖的小窝，一个让每一个留学生与家长信任的服务体系。
                </span>
             </el-col>
           </el-row>


            
          </div>
          
          <!-- 热租特价公寓 -->
          <div class="hidden-blcok">
            <div>
                <span style="border: 1px #999 solid;padding:10px;" @click="show3 = !show3">收起内容</span>
                
                <div style="margin-top: 20px;">
                  
                  <div v-show="show3">
                      <div class="team-block-title">
                        <span>Our Team</span>
                      </div>
                      <div class="team-block">
                        <span class="team-block-text">Nanjing,China</span>
                        <img src="../assets/about-us-1.jpg" class="team-img">  
                      </div>
                      
                      <div class="team-block">
                        <span class="team-block-text">London,British</span>
                        <img src="../assets/about-us-1.jpg" class="team-img">
                      </div>
                      <div>
                        <span class="team-block-title">Business Partners</span>
                        <el-row style="margin-top:20px;">
                          <el-col :span="3">
                              <img src="../assets/corp_icons/2.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/3.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/4.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/5.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/6.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/7.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/8.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/9.png" class="corp-icon">
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/10.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/11.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/12.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/13.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/14.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/1.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/1.png" class="corp-icon">
                          </el-col>
                          <el-col :span="3">
                              <img src="../assets/corp_icons/1.png" class="corp-icon">
                          </el-col>
                        </el-row>
                      </div>
                   
                    </div>
                 
                </div>
              </div>
          </div>
    </el-main>
    <el-footer>
      <div >
        <el-row class="common-footer">
          <div class="footer-content">
            <el-col :span="6" >
              <div  class="img-logo">
                <img src="../assets/logo.png" @click="toAboutUs">
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-row>
                  <el-col :span="12">
                      <div class="common-footer-item-desc">英窝窝|Innwowo</div>
                      <div class="common-footer-item-desc">关于我们</div>
                      <div class="common-footer-item-desc">联系我们</div>
                  </el-col>
                  <el-col :span="12">
                      <div class="common-footer-item-desc">服务指南</div>
                      <div class="common-footer-item-desc">网站协议</div>
                      <div class="common-footer-item-desc">常见问题</div>
                  </el-col>
                </el-row>
              </div>
              
            </el-col>
            <el-col :span="6">
              <el-row>
                <div class="common-footer-item-desc-tel">国内客服</div>
                <span>400-090-0035</span>
              </el-row>
              <el-row>
                <div class="common-footer-item-desc-tel">国外客服</div>
                <div>400-090-0035</div>
              </el-row>
            </el-col>
          </div>

        </el-row>
        <el-row class="footer-desc">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              {{$t("copyRight")}}
            </div>
          </el-col>
        </el-row>
      </div>
    </el-footer>
  </el-container>

</template>
<script>
  import VHeader from '../components/common/header.vue';

export default {
  name: "index",
  data() {
    return {
      show3: true
      
    };
  },
  components: {
     VHeader
  },
  computed:{
    language:function(){
      return this.$store.state.language;
    }
  },
  mounted() {
    this.isSearchResult = false;
    this.getHotHouseList();
    console.log("===============");
    //this.restaurants = this.loadAll();
    console.log(this.hotHouseList);
    this.$i18n.locale = this.$store.state.language;
  },
  
  methods: {
    
  }
};
</script>



<style>
.common-footer-item-desc{
  padding: 20px;
}
.common-footer-item-desc-tel{
  padding: 30px 0px 0px 20px;
}
.common-footer{
  border-bottom: 1px #999 solid;
  border-top: 1px #999 solid;
  font-weight: 600;
}
.corp-icon{
  width: 100%;
  height: 60px;
}
.hidden-blcok{
  padding: 40px 0px;
}
.about-us-desc{
  float: left;
  text-align: left;
}
.team-block-title{
  margin: 40px 0px;
  font-size: 40px;
  font-weight: 700;
}
.team-block{
  margin: 20px 0px;
}
.team-block-text{
  font-size: 20px;
  font-weight: 700;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  font-size: 18px;
}
.header{
  width: 1000px;
  position: relative;
  left: 50%;
  margin-left: -600px;
}
.el-footer {
  color: #333;
  text-align: center;
  height: auto !important;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.hiddern {
  visibility: hidden;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
  background-color: #e9eef3;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.img-logo {
  padding: 20%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
.el-autocomplete {
  position: absolute;
  display: inline-block;
  top: 450px;
  z-index: 20;
  width: 20%;
  left: 45%;
}
/* .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }*/
.footer-content {
  height: 100%;
  font-size: 1.1rem;
  width: 900px; /*元素的宽度*/
  padding: 0px 150px;
  left: 50%;
  margin-left: -600px;
  position: relative;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.block-index{
  height: 100%;
}
.image {
  width: 100%;
  display: block;
  padding-top: 30px;
}
@media screen and (min-width:1367px){
  .team-img{
    width: 100%;
    height: 940px ;
    margin-top: 20px;
  }

}
@media screen and (max-width:1366px){
  .team-img{
    width: 100%;
    height: 700px;
    margin-top: 20px;
  }

}

@media screen and (min-width:1367px){
  .about-us-banner{
    width: 100%;
    height: 740px ;
  }
  .el-carousel__container {
      position: relative;
      height: 540px;
  }
  .search-blcok {
    top: 400px;
    position: absolute;
    z-index: 2;
    width: 40%;
    padding: 0px 30%;
  }
}
@media screen and (max-width:1366px){
  .about-us-banner{
    width: 100%;
    height: 500px;
    objec-fit: cover;
  }
  .el-carousel__container {
      position: relative;
      height: 300px;
  }
  .search-blcok {
    top: 280px;
    position: absolute;
    z-index: 2;
    width: 40%;
    padding: 0px 30%;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-card {
  background-color: #fff;
}
.footer-desc {
  padding: 20px;
}
.city-block {
  width: 900px; /*元素的宽度*/
  padding: 0px 150px;
  left: 50%; /*配合margin-left的负值实现水平居中*/
  margin-left: -600px; /*值的大小等于元素宽度的一半*/
  position: relative;
}
.block-title {
  font-weight: 600;
  font-size: 30px;
  padding: 30px 0px 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  padding: 10px;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.city-grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}

.grid-content-label {
  top: 20px;
  position: absolute;
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  margin: 60px 75px;
}

.house-grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: auto;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.city-img-grid {
  width: 95%;
  min-width: 150px;
  height: 180px;
  border-radius: 10px;
}
.house-img-grid {
  border-radius: 10px;
  width: 95%;
  height: 188px;
}
.house-img-grid-desc {
  text-align: left;
  height: 100px;
  font-weight: 700;
  padding: 20px;
}
.el-input__prefix,
.el-input__suffix {
  color: #e01144;
}
.el-input-group__append,
.el-input-group__prepend {
  background-color: #e21807;
  color: #fff;
}


.title-desc {
  margin-bottom: 5px;
  margin-top: 20px;
  font-size: 16px;
}
.price {
  color: #f10e0e;
}

.detail-button {
  padding-top: 40%;
  padding-right: 20px;
}
.detail-button-desc {
  background-color: #f10e0e;
  color: #fff;
}
.wx-order {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}

.wx-order-desc {
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  margin-left: 5px;
  font-weight: 700;
}

.logo {
  text-align: right;
}
.hot-house-price{
  color: #f10e0e;
}
</style>