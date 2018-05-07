<template>
  
  <el-container>
    <head>
      <title>home page</title>
      <link rel="shortcut icon" type="image/x-icon" href="../assets/logo1.jpg" />
    </head>
    <v-header></v-header>
    <el-main>
      
      
        <!-- 图片 -->
        <div class="block-index">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in images" :key="item">
              <div style="height:auto;">
                <img :src="item" class="image-banner">
              </div>
              
            </el-carousel-item>
          </el-carousel>
          <div class="search-blcok">
            <el-popover
              placement="bottom-start"
              width="40%"
              trigger="focus">
              
              <div style="text-align:left;">
                <el-row>
                  <el-col   :span="18"><div class="grid-content bg-purple"><span>{{$t("searchHistory")}}：</span></div></el-col>
                  <el-col   :span="6"><div class="grid-content bg-purple" style="text-align:right:"><i  class="el-icon-delete"></i></div></el-col>
                </el-row>
               <el-row>
                  <el-col   :span="4"><div class="grid-content bg-purple"><span>{{$t("city")}}</span></div></el-col>
                  <el-col   :span="20">
                    <div class="grid-content bg-purple">
                      <span @click="onSearch('伦敦')" value="伦敦">伦敦</span>
                      <span @click="onSearch('伯明翰')" value="伯明翰">伯明翰</span>
                      <span @click="onSearch('格拉斯哥')" value="格拉斯哥">格拉斯哥</span>
                     
                      <span @click="onSearch('利物浦')" value="利物浦">利物浦</span>
                      <span @click="onSearch('伯明翰')" value="伯明翰">伯明翰</span>
                      <span @click="onSearch('谢菲尔德')" value="谢菲尔德">谢菲尔德</span>
                      <span @click="onSearch('哈德斯菲尔德')" value="哈德斯菲尔德">哈德斯菲尔德</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col   :span="4">
                    <div class="grid-content bg-purple">
                      <span>{{$t("university")}}</span>
                    </div>
                  </el-col>
                  <el-col   :span="20">
                    <div class="grid-content bg-purple">
                      <span @click="onSearch('利物浦大学')" value="利物浦大学">利物浦大学</span>
                      <span @click="onSearch('伯明翰大学')" value="伯明翰大学">伯明翰大学</span>
                      <span @click="onSearch('谢菲尔德大学')" value="谢菲尔德大学">谢菲尔德大学</span>
                      <span @click="onSearch('诺丁汉大学')" value="诺丁汉大学">诺丁汉大学</span>

                    </div>
                  </el-col>
                </el-row>
              </div>
          
              <el-input slot="reference" v-if="language == 'en'" placeholder = "Search/City/University/House" v-model="searchInput" class="input-with-select">
                
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                <el-button slot="append"  @click="onSearch(searchInput)">{{ $t("search")}}</el-button>
              </el-input>
              <el-input slot="reference" v-if="language == 'zh'" placeholder = "搜索/城市/大学/公寓" v-model="searchInput" class="input-with-select">
                
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                <el-button slot="append"  @click="onSearch(searchInput)">{{ $t("search")}}</el-button>
              </el-input>
            </el-popover>
            
            
          </div>
        </div>
        
          <!-- 热门城市 -->
          <div class="city-block">
            <div>
              <el-row>
                <div class="grid-content bg-purple block-title">
                  <span>{{ $t("hotHouseCity") }} </span>
                </div>
                 <div class="grid-content bg-purple">
                  <span>{{ $t("hotCityTitleDesc")}}</span>
                </div>
              </el-row>
              <el-row v-for="rowItems in cityList" :key="rowItems.index">
               <el-col  v-for="item in rowItems" :key="item.index"  :span="6">
                 <div class="city-grid-content" @click="onSearchByCity(item)">
                   <img :src="item.url" class="city-img-grid" >
                   <div class="grid-content-label" v-if="language == 'zh'">{{item.nameCn}}</div>
                   <div class="grid-content-label" v-if="language == 'en'">{{item.nameEn}}</div>
                 </div></el-col>
                
              </el-row>
            </div>
          </div>
          
          <!-- 热租特价公寓 -->
          <div class="city-block">
            <div>
              <el-row>
                <div class="grid-content bg-purple block-title">
                  <span>{{$t("hotHouseTitle")}}</span>
                </div>
                 <div class="grid-content bg-purple">
                  <span>{{ $t("hotHouseTitleDesc") }}</span>
                </div>
                
              </el-row>
              <el-row>
                
                <el-carousel trigger="click" height="340px">
                  <el-carousel-item v-for="itempages in hotHouseList" :key="itempages.index">
                  
                    <el-row>
                      <el-col v-for="itemcol in itempages" :key="itemcol.index" :span="8">
                        <div class="house-grid-content"  @click="openDetailPage(itemcol.houseId)" >
                          <img :src="itemcol.thumbnails"  class="house-img-grid"  >
                          <div class="house-img-grid-desc">
                            <div v-if="language == 'zh'">{{itemcol.titlecn}}</div>
                            <div v-if="language == 'en'">{{itemcol.titleen}}</div>
                            <div> <span class="hot-house-price">{{itemcol.pricemin}}</span>{{$t('least')}}/{{$t('week')}}</div>
                          </div>
                          
                        </div>
                      </el-col>
                    </el-row>
                  </el-carousel-item>
                </el-carousel>
              </el-row>
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

        
      </div>
      <div class="common-foot">
        <el-row class="footer">
          <el-col :span="8" >
            <img src="../assets/logo.png" class="img-logo" @click="toAboutUs">
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <!--首页    |   关于我们   |    联系我们   |   加入我们   |    隐私条款    |    商务合作-->
            </div>
            <div class="grid-content bg-purple-dark">
              {{$t("copyRight")}}
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <!--首页    |   关于我们   |    联系我们   |   加入我们   |    隐私条款    |    商务合作-->
            </div>
            <div class="grid-content bg-purple-dark">
              {{$t("copyRight")}}
            </div>
          </el-col>
        </el-row>

      </div>
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
      cityList: [
        [
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/london2.jpg",
            cityId: "10000",
            nameEn: "London",
            nameCn: "伦敦"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/lst.jpg",
            cityId: "10010",
            nameEn: "Leicester ",
            nameCn: "莱斯特"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/lwp.jpg",
            cityId: "10001",
            nameEn: "Liverpool",
            nameCn: "利物浦"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/kwc.jpg",
            cityId: "10008",
            nameEn: "Coventry ",
            nameCn: "考文垂"
          }
        ],
        [
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/blst.jpg",
            cityId: "10009",
            nameEn: "Bristol",
            nameCn: "布里斯托"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/lizi.jpg",
            cityId: "10011",
            nameEn: "Leeds",
            nameCn: "利兹"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/nks.jpg",
            cityId: "10012",
            nameEn: "Newcastle ",
            nameCn: "纽卡斯尔"
          },
          {
            url: "https://hotcity.oss-cn-shanghai.aliyuncs.com/ndh.jpg",
            cityId: "10005",
            nameEn: "Nottingham",
            nameCn: "诺丁汉"
          }
        ]
      ],
        openDetailPage(houseId){
            console.log(houseId);
            this.$router.push("/houseDetail/" + houseId + "");
        },
      hotHouseList: [],
      restaurants: [],
      state4: "",
      timeout: null,
      searchInput: "",
      isSearchResult: true,
      searchResult: [],
      searchResultSize: [],
      currentPage: 1,
      pageSize: 10,
      showwxorderImg: false,
      images:[
        "https://hotcity.oss-cn-shanghai.aliyuncs.com/hd1.jpg",
        "https://hotcity.oss-cn-shanghai.aliyuncs.com/hd2.jpg"
      ]
      
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
    toAboutUs(){
      console.log("to about us");
      this.$router.push("/aboutUs" );
    },
    onShowWxOrderImg() {
      console.log(this.showwxorderImg);
      this.showwxorderImg = !this.showwxorderImgOle;
      console.log(this.showwxorderImg);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    onSearch(param) {
      //let self = this;
     // let param = param;
      console.log("=========");
      console.log(param);
      console.log("=======++==");
      this.$router.push("/houseList/" + param + "");
      /*let reqUrl = SERVER_ROOT_URL + "/house/client/get_house_list?param="+self.searchInput+"&page="+self.currentPage+"&pageSize="+self.pageSize;

              this.$ajax.get(reqUrl).then(response => {
                console.log("获取查询结果列表");
                console.log(response.data.data);
                self.searchResult = response.data.data.list;
                self.searchResultSize = response.data.data.size;
                self.isSearchResult = true; 

              }).catch(e => {
                  console.log(e);
              })*/
    },
    onSearchByCity(item) {
      //let self = this;
     // let param = param;
      console.log("=========");
      console.log(item);
      console.log("=======++==");
      let param = this.language == 'zh'?item.nameCn : item.nameEn;
      this.$router.push("/houseList/" + param + "");
      /*let reqUrl = SERVER_ROOT_URL + "/house/client/get_house_list?param="+self.searchInput+"&page="+self.currentPage+"&pageSize="+self.pageSize;

              this.$ajax.get(reqUrl).then(response => {
                console.log("获取查询结果列表");
                console.log(response.data.data);
                self.searchResult = response.data.data.list;
                self.searchResultSize = response.data.data.size;
                self.isSearchResult = true; 

              }).catch(e => {
                  console.log(e);
              })*/
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
          let list = response.data.data;  
          let arrTemp = [];  
          let index = 0;  
          let sectionCount = 3;  
          for (let i = 0; i < list.length; i++) {  
              index = parseInt(i / sectionCount);  
              if (arrTemp.length <= index) {  
                 arrTemp.push([]);  
              }  
              arrTemp[index].push(list[i]);  
          }  
          self.hotHouseList = arrTemp;
        })
        .catch(e => {
          console.log(e);
        });
    }
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
      return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
  },
  handleSelect(item) {
    console.log(item);
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
.common-foot{
  background-color: #fff;
}
.footer-common{
  background-color: #fff;
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
  padding: 0px;
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
.footer {
  height: 100%;
  font-size: 1.1rem;
  width: 900px; /*元素的宽度*/
  padding: 30px 150px;
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
  .image-banner{
    width: 100%;
    height: 540px ;
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
  .image-banner{
    width: 100%;
    height: 300px;
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
  padding: 50px;
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