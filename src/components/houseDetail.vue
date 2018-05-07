<template>
 
  <el-container>
    <v-header></v-header>  
    <el-main style="text-align: left">
       
      <!-- 图片 -->
      <div class="house-media-block">
        <!-- detail-title  -->
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{$t("home")}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/houseList/'+houseInfo.cityNameCn }" v-if="language == 'zh'">{{houseInfo.cityNameCn}}{{$t("house")}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/houseList/'+houseInfo.cityNameCn }" v-if="language == 'en'">{{houseInfo.cityNameEn}}{{$t("house")}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="language == 'zh'">{{houseInfo.titlecn}}{{$t("houseDetail")}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="language == 'en'">{{houseInfo.titleen}}{{$t("houseDetail")}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <div class="tab-title">
            <span>{{houseInfo.titlecn}}</span>
          </div>
          <div class="house-address">
            <span>
              <i class="el-icon-location"></i>
              {{$t("address")}}：{{houseInfo.address}}
            </span>
          </div>
        </div>
        <el-tabs tab-position="right" style="height: 500px;">
          <el-tab-pane v-for="item in mediaList" :key="item.index" >
            <div slot="label" style="width:50px;height:50px;margin:10px;">
              <img :src="item.medieurl" style="width:90%;height:90%;margin:10px;">
            </div>
            <img :src="item.medieurl" style="width:780px;height:500px;">
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- detai-tabs -->
      <div class="detail-tabs-block">
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="房间类型" name="first">
            
          </el-tab-pane>
          <el-tab-pane label="房源详情" name="second">
           
          </el-tab-pane>
          <el-tab-pane label="配套设施" name="third">
           
          </el-tab-pane>
        </el-tabs> -->

              <!-- 房间类型 -->
            <div class="room-list-block" id="roomType">
               <div class="tab-title">{{$t("roomType")}}</div>
              <el-row v-for="item in roomList" :key="item.roomid" class="room-item">
                
                <el-col :span="3">
                  <div class="grid-content bg-purple">
                    <img :src="item.thumbnails" class="room--item-img-grid">
                  </div>
                </el-col>
                <!-- 简介 -->
                      <el-col :span="12" class="room-desc">
                        <div class="grid-content">
                          <div class="grid-content room-title-desc">
                            {{item.titlecn}}
                            <div>
                              <el-rate
                                v-model="rateValue"
                                disabled
                                show-score
                                text-color="#f10e0e"
                                :colors="['#99A9BF', '#F7BA2A','#f10e0e']"
                                score-template="{value}">
                              </el-rate>
                       
                            </div>
                          </div>
                          <div class="room-content-block">
                            <div class="room-grid-content bg-purple house-desc">
                              <span v-if="item.bedroom"> {{$t("bed")}}：{{item.bedroom}}，</span>
                              <span v-if="item.bedroomsize">{{$t("bedSize")}}：{{item.bedroomsize}},</span>
                              <span v-if="item.rentstart">{{$t("rentTime")}}：{{item.rentstart.substring(0,10)}}</span>
                              
                            </div>
                            <div class="room-grid-content bg-purple house-desc">
                            {{$t("rentdate")}}：{{item.rentdate}}
                            </div>
                           
                          </div>
                          
                        
                        </div>
                      </el-col>
                      <!-- 操作 -->
                      <el-col :span="6">
                        <div class="grid-content detail-colect-consult">
                          <div class="grid-content bg-purple">
                            <el-row>
                              <el-col>
                                
                                <div><span class="price">{{item.rentmoney}}</span>/{{$t("week")}}</div>
                              </el-col>
                          
                            </el-row>
                            
                          </div>
                          <div class="grid-content bg-purple detail-button-consult" >
                            <el-tooltip placement="top">
                              <div slot="content" style="text-align:center;margin-top:20px;">
                                  <img src="../assets/wx-order-qrcode.png" style="width:160px;height:160px;">
                                  <div class="wx-order-desc">{{$t("wxScanOrder")}}</div>
                              </div>
                              <el-button size="medium" class="detail-button-desc">{{$t("consult")}} </el-button>
                            </el-tooltip>
                          </div>
                        </div>
                       
                       
                      </el-col>                
             
              </el-row>
             

                        
            </div>
            <!-- 房源详情 -->
             <div>
              <div class="tab-title">{{$t("houseDetail")}}</div>
              <div class="tab-content" v-if="language == 'zh'">{{houseInfo.tipcn}}</div>
              <div class="tab-content" v-if="language == 'en'">{{houseInfo.tipen}}</div>
            </div>

        <!-- 房源详情 -->
        <div>
          <div class="tab-title">{{$t("facilitiesin")}}</div>
          <div class="tab-content" v-if="language == 'zh'">{{houseInfo.facilitiesincn}}</div>
          <div class="tab-content" v-if="language == 'en'">{{houseInfo.facilitiesinen}}</div>
        </div>

        <!-- 房源详情 -->
        <div>
          <div class="tab-title">{{$t("facilitiesout")}}</div>
          <div class="tab-content" v-if="language == 'zh'">{{houseInfo.facilitiesoutcn}}</div>
          <div class="tab-content" v-if="language == 'en'">{{houseInfo.facilitiesouten}}</div>
        </div>
              <!-- 配套设施 -->

        <div>
          <div  id="map" class="tab-title">{{$t("address")}}</div>
          <mapbox></mapbox>
        </div>
      </div>
      


    </el-main>
    <el-footer>
      <div class="footer">
      <el-row>
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <div class="image">
              <img src="../assets/real-house.png" >
            </div>
            <div style="padding: 14px;">
              <span>100%{{$t("realHouseSource")}}</span>
              
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="image">
              <img src="../assets/one2one.png" >
            </div>
            <div style="padding: 14px;">
              <span>{{$t("oneToOneService")}}</span>
             
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="image">
              <img src="../assets/free-order.png" >
            </div>
            <div style="padding: 14px;">
              <span>{{$t("freeBooking")}}</span>
             
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="footer-desc">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <!--首页    |   关于我们   |    联系我们   |   加入我们   |    隐私条款    |    商务合作-->
          </div>
        </el-col>
      </el-row>
        
      </div>
    </el-footer>
  </el-container>

</template>
<script>
  import VHeader from '../components/common/header.vue';
  import mapbox from '../components/mapbox.vue';
export default {
  name: "index",
  data() {
    return {
      ak: "wQuORVwGwSzoqb4WsLm62gxy8HsjlNeW",
      point: "",
      roomList: [],
      hotHouseList: [],
      cityInput: true,
      showCitySelect: false,
      houseInfo: {},
      activeName: "first",
      houseId: "",
      mediaList: [],
      rateValue: 4.9,
      facilitiesincnArr:[],
      facilitiesincnArr0:[],
      facilitiesincnArr1:[],
      lon:'',
      lat:''
    };
  },
  components: {
     VHeader,
     mapbox
  },
  created(){
    this.houseId = this.$route.params.houseId;
    this.onSearchDetail(this.houseId);
  },
  mounted() {
   // this.houseId = this.$route.params.houseId;
    //this.onSearchDetail(this.houseId);
    console.log("===============");

    console.log(this.cityList);

  },
  computed:{
    language:function(){
      return this.$store.state.language;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      let selector = "#" + tab.name;
      console.log(selector);
      document.querySelector(selector).scrollIntoView(true);
    },

    // 获取房源详情
    onSearchDetail(houseId) {
      console.log("获取房源详情" + houseId);

      let self = this;
      let reqUrl =
        SERVER_ROOT_URL + "/house/client/get_house_detail?houseId=" + houseId;

      this.$ajax
        .get(reqUrl)
        .then(response => {
          console.log("房源详情");
          console.log(response.data.data);
          self.mediaList = response.data.data.mediaList;
          self.roomList = response.data.data.roomList;
          self.houseInfo = response.data.data;
          let locationarr = response.data.data.location.split(',');
          this.$store.state.lon = locationarr[0];
          this.$store.state.lat = locationarr[1];
          this.$store.state.address = response.data.data.address;
          console.log(this.$store.state);

          console.log(self.mediaList);
          console.log();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>



<style>

.wx-order-img {
  padding-top: 20px;
  opacity: 0.6;
  padding-right: 5px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.house-media-block {
  width: 900px;
  height: 600px;
  left: 50%;
  margin-left: -600px;
  position: relative;
  padding: 30px 150px;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  font-size: 18px;
}
.header {
  width: 1000px;
  position: relative;
  left: 50%;
  margin-left: -600px;
}
.room-content-block {
  margin-top: 10px;
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
  padding: 0px;
  border-top: 1px solid #94979c;
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
  padding-right: 20px;
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

.image {
  width: 100%;
  display: block;
  padding-top: 30px;
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
  padding: 50px;
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
}

.bg-purple-light {
  background: #e5e9f2;
}
.room-grid-content {
  border-radius: 4px;
  min-height: 25px;
}
.city-grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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

.room--item-img-grid {
  width: 100%;
  height: 100px;
}


.room-title-desc {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
}
.house-desc {
  font-size: 16px;
}
.price {
  color: #f10e0e;
  font-size: 20px;
  padding-right: 5px;
}
.detail-colect-consult {
  text-align: right;
  font-size: 12px;
}
.room-banner-imgs {
  width: 100%;
  height: 100%;
}
.detail-button-consult {
  padding-top: 25px;
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

.img-star {
  width: 16px;
  height: 16px;
}
.footer {
  height: 100%;
  font-size: 1.1rem;
  width: 900px; /*元素的宽度*/
  padding: 30px 150px;
  left: 50%;
  margin-left: -600px;
  position: relative;
}
.el-steps--simple {
  padding: 13px 8%;
  border-radius: 4px;
  background: #fff;
}
.detail-tabs-block {
  height: 100%;
  font-size: 1.1rem;
  width: 900px; /*元素的宽度*/
  padding: 30px 150px;
  left: 50%;
  margin-left: -600px;
  position: relative;
  border-top: 1px solid #94979c;
}
.room-item {
  border-bottom: 1px solid #94979c;
}
.room-desc {
  text-align: left;
  padding-left: 20px;
}
.tab-title {
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0px;
  text-align: left;
}

.tab-content {
  font-size: 16px;
  /*font-weight: 300;*/
  margin: 20px 0px;
  text-align: left;
}

.house-address {
  font-size: 14px;
  margin: 20px 0px;
  text-align: left;
}
.facilitiesin-title{
  text-align: left;
  font-size: 16px;
}
.facilities-detail{
  text-align: left;
  margin: 20px;
}
</style>