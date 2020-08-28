<template>
    <div class="t_body">
    <!-- 顶部固定搜索框 -->
    <div class="t_header">
            
        <p class="t_sousuo">
            <b><img src="../assets/images/sousuo.png" alt=""></b>

            <router-link :to="'/sousuo'">
                <input type="text" value="" placeholder="OPPO K7">
            </router-link>

        </p>
            
    </div>
    <div class="top"></div>
    
    <div>
        <section>


            <!-- v-for遍历li @click设置点击事件 设置change()方法名 :class改变类的css-->
            <ul class="t_ul">
                <li v-for="(item,index) in list" @click="change(index)" :class="{current:index==num}">{{item.con}}</li>
            </ul>
            <main class="content">
                <!-- v-show显示标签 遍历的li的下标是多少就显示哪个标签（右边的内容）-->
                <div v-show="num==a1">

                    <div class="tp1_div">
                        <img src="src/assets/images/TP1.jpg" alt="">
                    </div>

                    <h1>热门推荐</h1>
                    
                    <ul class="tone_ul">
                        
                        <li v-for="(item,index) in list1" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>    
                                <h5 class="tpie">{{item.con}}</h5>
                                <div class="tone_div2">
                                    <span class="tpie1">{{item.price1}}</span>
                                    <span class="tpie2">{{item.price2}}</span>
                                </div>
                            
                            
                        </li>
                        
                    </ul>
                    <!-- <p v-for="(item,index) in list1"></p> -->
                </div>
                
                <div v-show="num==a2">
                    <div v-for="(item,index) in list2" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a3">
                    <div v-for="(item,index) in list3" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a4">
                    <div v-for="(item,index) in list2" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a5">
                    <div v-for="(item,index) in list3" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a6">
                    <div v-for="(item,index) in list2" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a7">
                    <div v-for="(item,index) in list3" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a8">
                    <div v-for="(item,index) in list2" class="ttwo_div">
                        <router-link :to="'/details/'+item.id">
                        <div class="timg_div">
                            <img :src="item.src" alt="">
                        </div>
                        </router-link>
                        <div class="tright_div">
                            <div>{{item.con}}</div>
                            <div class="youshi">{{item.youshi}}</div>
                            <div>
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="num==a9">
                    <h1>专属配件</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list4" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a10">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH2.png" alt="">
                    </div>
                    <h1>智能穿戴</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list5" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a11">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH3.png" alt="">
                    </div>
                    <h1>耳机影视</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list6" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a12">
                    
                    <h1>充电必备</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list7" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a13">
                    <h1>智能家居</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list8" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a14">
                    
                    <h1>手机配件</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list9" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a15">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH7.png" alt="">
                    </div>
                    <h1>生活电器</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list14" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a16">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH8.png" alt="">
                    </div>
                    <h1>车载出行</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list15" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a17">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH9.pNg" alt="">
                    </div>
                    <h1>个人健康</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list16" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a18">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH10.png" alt="">
                    </div>
                    <h1>数码周边</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list17" class="tone_li" >
                             <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-show="num==a19">
                    <div class="tp1_div">
                        <img src="src/assets/images/TH100.png" alt="">
                    </div>
                    <h1>日用百货</h1>
                    <ul class="tone_ul">
                        <li v-for="(item,index) in list18" class="tone_li" >
                            <router-link :to="'/details/'+item.id">
                                <div class="tone_div1">
                                    <img :src="item.src" alt="">
                                </div>
                            </router-link>
                            <h5 class="tpie">{{item.con}}</h5>
                            <div class="tone_div2">
                                <span class="tpie1">{{item.price1}}</span>
                                <span class="tpie2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </main>
        </section>
    </div>
    
   
</div>
    
</template>

<script>
    export default{
        data(){
            return{
                num:0,
                list:[
                    {
                        con:'热门推荐',
                        id:'rm'
                    },
                    {
                        con:'Find X系列',
                        id:'fix'
                    },
                    {
                        con:'Reno系列',
                        id:'rex'
                    },
                    {
                        con:'Ace系列',
                        id:'acx'
                    },
                    {
                        con:'K系列',
                        id:'kx'
                    },
                    {
                        con:'A系列',
                        id:'ax'
                    },
                    {
                        con:'V系列',
                        id:'vx'
                    },
                    {
                        con:'X系列',
                        id:'xx'
                    },
                    {
                        con:'专属配件',
                        id:'zs'
                    },
                    {
                        con:'智能穿戴',
                        id:'zn1'
                    },
                    {
                        con:'耳机影视',
                        id:'ej'
                    },
                    {
                        con:'充电必备',
                        id:'cd'
                    },
                    {
                        con:'智能家居',
                        id:'zn'
                    },
                    {
                        con:'手机配件',
                        id:'sj'
                    },
                    {
                        con:'生活电器',
                        id:'sh2'
                    },
                    {
                        con:'车载车行',
                        id:'cz'
                    },
                    {
                        con:'个人健康',
                        id:'gr'
                    },
                    {
                        con:'数码周边',
                        id:'sm'
                    },
                    {
                        con:'日用百货',
                        id:'ry'
                    },
                    

                ],
                list1:[
                    {
                        src:'./src/assets/images/T11.png',
                        con:'真我 X50 Pro',
                        price1:'￥3199',
                        price2:'￥3599',
                        id:'0'
                    },
                    {
                        src:'./src/assets/images/T12.png',
                        con:'真我 X50 Pro',
                        price1:'￥3099',
                        price2:'￥3399',
                        id:'1'
                    },
                    {
                        src:'./src/assets/images/T13.png',
                        con:'K7 海夜 8G+128G',
                        price1:'￥1999',
                        id:'2'
                    },
                    {
                        src:'./src/assets/images/T14.png',
                        con:'Reno4 Pro 艺术家限定版',
                        price1:'￥4299',
                        id:'3'
                    },
                    {
                        src:'./src/assets/images/T15.png',
                        con:'OPPO手环 静夜黑',
                        price1:'￥199',
                        id:'4'
                    },
                    {
                        src:'./src/assets/images/T16.png',
                        con:'OPPO Enco W31 真无线耳机 被表「白」',
                        price1:'￥299',
                        id:'5'
                    },
                    {
                        src:'./src/assets/images/T17.png',
                        con:'OPPO Enco W51 降噪耳机 绒白',
                        price1:'￥499',
                        id:'6'
                    },
                    {
                        src:'./src/assets/images/T18.png',
                        con:'18W快充移动电源2 黑色',
                        price1:'￥99',
                        id:'7'
                    },
                    {
                        src:'./src/assets/images/T19.png',
                        con:'OPPO Enco Q1',
                        price1:'￥599',
                        id:'8'
                    },
                    {
                        src:'./src/assets/images/T110.png',
                        con:'OPPO Watch',
                        price1:'￥1499',
                        id:'9'
                    },
                    {
                        src:'./src/assets/images/T111.png',
                        con:'OPPO 蓝牙音箱 绿色',
                        price1:'￥129',
                        id:'10'
                    },
                    {
                        src:'./src/assets/images/T112.png',
                        con:'乐心体脂秤S11',
                        price1:'￥209',
                        id:'11'
                    },
                ],
                list2:[
                    {
                        src:'./src/assets/images/FX1.png',
                        con:'Find X2 Pro 兰博基尼',
                        price1:'￥12999',
                        id:'12'
                    },
                    {
                        src:'./src/assets/images/FX2.png',
                        con:'Find X2 夜海',
                        youshi:'超感官5G旗舰手机',
                        price1:'￥4499',
                        price2:'￥4999',
                        id:'13'
                    },
                ],
                list3:[
                    {
                        src:'./src/assets/images/REXL1.png',
                        con:'Reno4 Pro 晶钻蓝',
                        youshi:'超级夜景视频',
                        price1:'￥3799',
                        id:'14'
                    },
                    {
                        src:'./src/assets/images/REXL2.png',
                        con:'Reno4 香芋紫',
                        youshi:'超级夜景视频',
                        price1:'￥2999',
                        id:'15'
                    },
                    {
                        src:'./src/assets/images/REXL3.png',
                        con:'Reno3 Pro 月夜黑',
                        youshi:'5G视频手机',
                        price1:'￥3699',
                        price2:'￥3999',
                        id:'16'
                    },
                    {
                        src:'./src/assets/images/REXL4.png',
                        con:'Reno3 蓝色星夜',
                        youshi:'一体化双模5G',
                        price1:'￥2699',
                        price2:'￥3399',
                        id:'17'
                    },
                ],
                list4:[
                    {
                        src:'./src/assets/images/ZSPJ1.png',
                        con:'realme 30W移动电源',
                        price1:'￥199',
                        id:'18'
                    },
                    {
                        src:'./src/assets/images/ZSPJ2.png',
                        con:'realme 30W移动电源',
                        price1:'￥199',
                        id:'19'
                    },
                    {
                        src:'./src/assets/images/ZSPJ3.png',
                        con:'realme 65W闪充套装',
                        price1:'￥149',
                        price2:'￥169',
                        id:'20'

                    },
                ],
                list5:[
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'21'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'22'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'23'

                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'24'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'25'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'26'

                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'27'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'28'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'29'
                    },
                    {
                        src:'./src/assets/images/TH21.png',
                        con:'OPPO手环',
                        price1:'￥199',
                        price2:'￥219',
                        id:'30'
                    },
                ],
                list6:[
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'31'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'32'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'33'

                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'34'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'35'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'36'

                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'37'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'38'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'39'
                    },
                    {
                        src:'./src/assets/images/TH31.png',
                        con:'realme 原耳耳机',
                        price1:'￥49',
                        price2:'￥59',
                        id:'40'
                    },
                ],
                list7:[
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'41'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'42'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'43'

                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'44'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'45'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'46'

                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'47'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'48'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'49'
                    },
                    {
                        src:'./src/assets/images/TH41.png',
                        con:'40W AirVOOC',
                        price1:'￥249',
                        price2:'￥259',
                        id:'50'
                    },
                ],
                list8:[
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'51'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'52'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'53'

                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'54'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'55'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'56'

                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'57'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'58'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'59'
                    },
                    {
                        src:'./src/assets/images/TH51.png',
                        con:'5G CPE移动路由器',
                        price1:'￥1499',
                        price2:'￥1599',
                        id:'60'
                    },
                ],
                list18:[
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'61'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'62'
                        
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        price2:'￥159',
                        id:'63'


                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'64'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'65'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'66'

                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'67'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'68'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'69'
                    },
                    {
                        src:'./src/assets/images/TH181.png',
                        con:'realme 真我潮玩双肩包 黑色',
                        price1:'￥149',
                        price2:'￥159',
                        id:'70'
                    },
                ],
                list17:[
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'71'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'72'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'73'

                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'74'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'75'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'76'

                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'77'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'78'
                    },
                    {
                        src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'79'
                    },
                    {
                       src:'./src/assets/images/TH171.png',
                        con:'魔爪手持云台 黑色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'80'
                    },
                ],
                list16:[
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'81'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'82'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'83'

                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'84'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'85'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'86'

                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'87'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'88'
                    },
                    {
                        src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'89'
                    },
                    {
                       src:'./src/assets/images/TH161.png',
                        con:'nimova 深度肌肉筋膜枪 红色',
                        price1:'￥399',
                        price2:'￥499',
                        id:'90'
                    },
                ],
                list15:[
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'91'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'92'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'93'

                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'94'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'95'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'96'

                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'97'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'98'
                    },
                    {
                        src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'99'
                    },
                    {
                       src:'./src/assets/images/TH151.png',
                        con:'绿联 临时停车牌 双号码款',
                        price1:'￥39',
                        price2:'￥49',
                        id:'100'
                    },
                ],
                list14:[
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'101'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'102'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'103'

                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'104'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'105'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'106'

                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'107'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'108'
                    },
                    {
                        src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'109'
                    },
                    {
                       src:'./src/assets/images/TH141.png',
                        con:'圈厨绿色小烤箱 绿色',
                        price1:'￥139',
                        price2:'￥149',
                        id:'110'
                    },
                ],
                list9:[
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'111'
                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'112'
                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'113'

                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'114'
                    },
                    {
                       src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'115'
                    },
                    {
                       src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'116'

                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'117'
                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'118'
                    },
                    {
                        src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'119'
                    },
                    {
                       src:'./src/assets/images/TH91.png',
                        con:'Find X2 Pro保护壳',
                        price1:'￥139',
                        price2:'￥149',
                        id:'120'
                    },
                ],
                
                a1:0,a2:1,a3:2,a4:3,a5:4,a6:5,a7:6,a8:7,a9:8,a10:9,a11:10,a12:11,a13:12,a14:13,a15:14,a16:15,a17:16,a18:17,a19:18
            }
        },
        // 形参a实际上是index下标赋值给num，实现左右两边联系起来
        methods:{
            change(a){
                this.num=a;
            }
        }
    }
</script>


<style scoped>
    p{
        
    }
    .t_body{
        background-color: #F7F8FA;
        overflow: hidden;
        height: 100vh;
    }
    .current{
                border-left:2px solid red;
                
            }
    .top{
        width: 100%;
        height: 60px;
    }
    .t_header{
        width: 100%;
        height: 40px;
        padding-top: 2%;
        background-color: white;
        position: fixed;;

    }
    .t_sousuo input{
        height: 30px;
        width: 80%;
        background:#F8F9FA;

        border:0px;
        outline: none;
        float: left;
    }
    .t_sousuo{
        height: 30px;
        margin-left: 10%;
        text-align: center;
        overflow: hidden;
        
        
    }
    .t_sousuo b{
        width: 30px;
        height: 30px;
        display: inline-block;
        float:left;
        background-color: #F8F9FA;
        text-align: center;
    }
    b>img{
        width: 50%;
        margin-top: 8px;
    }
    .t_ul{
        width: 23%;
        float: left;
        height: calc(100vh - 50px);
        overflow: auto;
        background-color: white;
    }
    .t_ul li{
        text-align: center;
        margin-bottom: 50%;
    }
    .t_ul li:last-of-type{
        margin-bottom: 80px;
    }
    .content{
        width: 75%;
        float: right;
        height: calc(100vh - 50px);
        overflow: auto;
    }
    img{
        width: 100%;
    }
    h1{
        text-align: center;
        margin: 10px 0;
    }
    .tone_li{
        float: left;
        width: 49%;
        background-color: white;
    }
    .tone_ul{
        overflow: hidden;
        margin-bottom: 60px;
    }
    .tpie{
        text-align: center;
        height: 34px;
        font-size: 13px;
    }
    .tone_div2{
        text-align: center;
    }
    
    .tpie1{
        color: #F63434;
        font-size: 13px;
    }
    .tpie2{
        text-decoration: line-through;
        font-size: 12px;
    }
    .timg_div{
        display: inline-block;
        float: left;
    }
    .timg_div{
        width: 40%;
    }
    .tright_div{
        float: left;
        margin-top: 25px;
    }
    .ttwo_div{
        overflow: hidden;
        background-color: white;
    }
    .youshi{
        font-size: 10px;
        color: #707070;
    }
    
</style>