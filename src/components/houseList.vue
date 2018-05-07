<template>
 
  <el-container>
    <v-header></v-header>
    <el-main>
        <!-- 图片 -->
        <div class="block">
          <el-row>
            <el-col :span="20">
                 <!-- <router-link to="/index"><span>首页</span></router-link><i class="el-icon-arrow-right"></i><span /><span>{{searchInput}}公寓</span> -->
                <div>
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">{{ $t("home") }}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{searchInput}} {{ $t("house")}}</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
            </el-col>
            <el-col :span="4">
                <span style="color:red">{{searchResultSize}}</span> {{ $t("suits")}}{{$t("nearby")}}{{ $t("house")}}
            </el-col>
          </el-row>
         
        </div>
        <div v-if="isSearchResult">
          <div class="house-item-block">
            <el-row v-for="item in searchResult" :key="item">
              <!-- 房源列表图片 -->
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img :src="item.thumbnails" class="house-item-img-grid">
                </div>
              </el-col>
              <!-- 简介 -->
              <el-col :span="16" class="house-item-desc">
                <div class="grid-content">
                  <el-row>
                    <el-col :span="16">
                      <div class="grid-content">
                        <div class="grid-content title-desc">
                          {{item.titlecn}}
                          <div>
                            <img class="img-star" src="../assets/star.png" >
                            <img class="img-star" src="../assets/star.png" >
                            <img class="img-star" src="../assets/star.png" >
                            <img class="img-star" src="../assets/star.png" >
                            <img class="img-star" src="../assets/star.png" >
                          </div>
                        </div>
                        <div class="content-block">
                          <div class="grid-content bg-purple house-desc">
                          {{item.rentstatus}}
                          </div>
                          <div class="grid-content bg-purple house-desc" v-on:click="toMap(item.id)">
                            
                            <img class="img-star" src="../assets/map.png" >
                            <span>{{("map")}}</span>
                          </div>

                          <div class="grid-content bg-purple house-desc" v-if="item.schoolList[0]">
                            <span>{{$t("go")}}{{item.schoolList[0].schoolname}}：</span>
                            <img class="img-star" src="../assets/car.png" >
                            <span>{{item.schoolList[0].taxitime}}{{$t("minute")}}</span>
                            <img class="img-star" src="../assets/bus.png" >
                            <span>{{item.schoolList[0].bustime}}{{$t("minute")}}</span>
                            <img class="img-star" src="../assets/bike.png" >
                            <span>{{item.schoolList[0].biketime}}{{$t("minute")}}</span>
                            <img class="img-star" src="../assets/walk.png" >
                            <span>{{item.schoolList[0].walktime}}{{$t("minute")}}</span>
                          </div>
                        </div>
                        
                       
                      </div>
                    </el-col>
                    <!-- 操作 -->
                    <el-col :span="8">
                      <div class="grid-content detail-colect">
                        <div class="grid-content bg-purple">
                          <el-row>
                            <el-col :span="16">
                              <div class="grid-content">
                                {{ $t("weeklyPrice")}}
                              </div>
                              <div><span class="price">{{item.pricemin}}</span>{{$t("least")}}</div>
                            </el-col>
                            <el-col :span="8">
                              <div class="grid-content">
                                <!-- <img class="house-item-desc-img" src="../assets/Heart.png" > -->
                              </div>
                            </el-col>
                          </el-row>
                          
                        </div>
                        <div class="grid-content bg-purple detail-button">
                          <el-button size="medium" class="detail-button-desc" @click="openDetailPage(item.id)" >
                            {{$t("moreDetail")}}
                          </el-button>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  
                </div>
              </el-col>
              
            </el-row>
            <div class="page-block">
              <!-- <span class="demonstration">完整功能</span> -->
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="searchResultSize">
              </el-pagination>
            </div>
          </div>
      </div>
    </el-main>
   <!--  <v-footer></v-footer> -->
  </el-container>

</template>
<script>

  import VHeader from '../components/common/header.vue';
  import VFooter from '../components/common/footer.vue';
export default {
  name: "index",
  data() {
    return {
      restaurants: [],
      state4: "",
      timeout: null,
      searchInput: "",
      isSearchResult: true,
      searchResult: [],
      searchResultSize: 0,
      currentPage: 1,
      pageSize: 10
    };
  },
  computed:{
    language:function(){
      return this.$store.state.language;
    }
  },
  components: {
     VHeader,
     VFooter
  },
  mounted() {
    this.searchInput =  this.$route.params.queryStr;
    console.log(this.searchInput);
    this.onSearch();
    console.log("===============");
    //this.restaurants = this.loadAll();
    console.log(this.hotHouseList);
    this.$i18n.locale = this.$store.state.language;
  },
  methods: {
    toMap(houseId){
      console.log("toMap");
      console.log(houseId);
      this.$router.push("/houseDetail/" + houseId + "#map");
      console.log("toMap===end");
      
    },
    handleSizeChange(val) {
//      console.log(`每页 ${val} 条`);
      this.pageSize = parseInt(val);
        this.onSearch();
    },
    handleCurrentChange(val) {
//      console.log(`当前页: ${val}`);
      this.currentPage = parseInt(val);
        this.onSearch();
    },
    onSearch() {
      console.log("根据条件查询房源列表");
      let self = this;
      let reqUrl =
        SERVER_ROOT_URL +
        "/house/client/get_house_list?param=" +
        self.searchInput +
        "&page=" +
        self.currentPage +
        "&pageSize=" +
        self.pageSize;

      this.$ajax
        .get(reqUrl)
        .then(response => {
          console.log("获取查询结果列表");
          console.log(response.data.data);
          self.searchResult = response.data.data.list;
          self.searchResultSize = response.data.data.total;
          self.isSearchResult = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getHotHouseList() {
      let self = this;
      let reqUrl = SERVER_ROOT_URL + "/house/client/get_hot_house_list";

      this.$ajax
        .get(reqUrl)
        .then(response => {
          console.log("获取热租公寓");
          console.log(response.data.data);
          //self.hotHouseList = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    openDetailPage(houseId){
      console.log(houseId);
      this.$router.push("/houseDetail/" + houseId + "");
    },

    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>


<style>


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
.block{
  width: 900px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  background: #fff;
  text-align: left;
}
.page-block{
    width: 900px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  background: #fff;
  text-align: center;
  padding: 30px 0px; 
}
.content-block{
  margin-top: 35px;
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
  border-top:1px solid #94979c; 
  padding-top: 30px;
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
.grid-content {
  border-radius: 4px;
  min-height: 34px;
}
.city-grid-content {
  border-radius: 4px;
  min-height: 36px;
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

.house-item-img-grid {
  width: 100%;
  height: 200px;
}

.house-item-block {
  width: 900px;
  height: 100%;
  left: 50%;
  margin-left: -600px;
  position: relative;
  padding: 30px 150px;
}
.house-item-desc {
  border-top: 1px solid #b1aeae;
  border-right: 1px solid #b1aeae;
  border-bottom: 1px solid #b1aeae;
  text-align: left;
  padding: 0px 20px 5px 20px;
}
.house-item-desc-img {
  padding-right: 20px;
  width: 22px;
  height: 22px;
}
.title-desc {
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 16px;
}
.house-desc {
  font-size: 12px;
}
.price {
  color: #f10e0e;
  font-size: 20px;
  padding-right: 5px;
}
.detail-colect {
  padding: 20px 0px 30px 20px;
  text-align: right;
  font-size: 12px;
}
.detail-button {
  padding-top: 50px;
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
</style>