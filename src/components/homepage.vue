<template>
    <div class="body">
        <!-- 头部搜索、登录 -->
        <div class="header">
            
            <p class="sousuo">
                <b><img src="../assets/images/sousuo.png" alt=""></b>
                <router-link :to="'/sousuo'">
                    <input type="text" value="" placeholder="OPPO K7">
                </router-link>
                <router-link :to="'/login'">
                    <span class="login">登录</span>
                </router-link>
           </p>
            
        </div>
        <!-- 轮播图 -->
        <div class="lbt">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../assets/images/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/2.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/3.png" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/4.jpg" alt="">
                </mt-swipe-item>
                
            </mt-swipe>
        </div>
        
        <div class="one_div">
            <ul class="one_ul">
                <li v-for="(item,index) in list" class="one_li">
                    {{item.con}}
                </li> 
            </ul>
        </div>
        <div class="two_div">
            <ul class="two_ul">
                <li v-for="(item,index) in list1" class="two_li">
                    <img :src="item.src" alt="">
                    <p class="two_p">{{item.con}}</p>
                </li>
                
            </ul>
        </div>
        <div class="three_div">
            <img src="src/assets/images/oppok7.png" alt="" class="three_img">
        </div>
        <div class="four_div">
            <ul class="four_ul">
                <li v-for="(item,index) in list2" class="four_li">
                    
                        <img :src="item.src" alt="">
                    
                </li>
            </ul>
        </div>
        <div class="five_div">  
            <ul class="five_ul">
                <li v-for="(item,index) in list3" class="five_li">
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <div class="six_div">
            <div class="six_div1">今日必抢</div>
            <div class="six_div2">更多></div>
        </div>

        <!-- 横向滑动图 -->
        <div class="seven_div">
            <ul class="seven_ul">
                <li v-for="(item,index) in list4" class="seven_li">
                    <div class="seven_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="con">{{item.con}}</p>
                    <p class="price1">{{item.price1}}</p>
                    <p class="price2">{{item.price2}}</p>
                    
                </li>
                <!-- <li class="li_right">
                    <div class="seven_div2">更多图片</div>
                    <div class="seven_div3">></div>
                </li> -->
            </ul>
        </div>

        <!-- 以下都是各种专区 -->
        <div class="eight_div">
            <span class="span_left">手机专区</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H1.jpg" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list5" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">智能声学</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H2.jpg" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list6" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">智能穿戴</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H3.jpg" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list7" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">手机配件</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H4.jpg" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list8" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">智能家居专区</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H5.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list9" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">数码周边</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H6.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list10" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">生活家电</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H7.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list11" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">个人健康</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H8.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list12" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">车载出行</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H9.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list13" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>
        <div class="eight_div">
            <span class="span_left">日用百货</span>
            <span class="span_right">更多></span>
        </div>
        <div class="night_div">
            <img src="src/assets/images/H10.png" alt="">
        </div>
        <div class="ten_div">
            <ul class="ten_ul">
                <li v-for="(item,index) in list14" class="ten_li" >
                    <div class="ten_div1">
                        <img :src="item.src" alt="">
                        <p class="youhui">{{item.youhui}}</p>
                    </div>
                    <p class="pie">{{item.con}}</p>
                    <p class="pie1">{{item.price1}}</p>
                    <p class="pie2">{{item.price2}}</p>
                    
                </li>
            </ul>
        </div>

        <!-- 底部登录 -->
        <div class="bom">
            <div>
                <ul class="bom_ul">
                    
                    <li class="bom_left_li"><img src="src/assets/images/下载APP.png" alt=""><span>下载APP</span></li>
                    <router-link :to="'/login'">
                        <li class="bom_right_li"><img src="src/assets/images/登录账号.png" alt=""><span>登录账号</span></li>
                    </router-link>
                </ul>
                <p class="bom_p1">
                    <span>营业执照</span>
                    <span>个人信息保护政策</span>
                    <span>用户协议</span>
                </p>
                <p class="bom_p2">©2020 欢太商城 版权所有 粤ICP备14056724号-2</p>
            </div>
        </div>
    </div>
    
    
</template>

<script>

    export default{
        
        data(){
            return{
                
                list:[
                    {
                        con:'官方正品'
                    },
                    {
                        con:'满69元包邮'
                    },
                    {
                        con:'1年全国联保'
                    },
                    {
                        con:'30天换货'
                    }
                ],
                list1:[
                    {
                        src:'./src/assets/images/yjhx.png',
                        con:'以旧换新',
                        
                    },
                    {
                        src:'./src/assets/images/jf.png',
                        con:'积分抵现'
                    },
                    {
                        src:'./src/assets/images/xrfl.png',
                        con:'新人福利'
                    },
                    {
                        src:'./src/assets/images/peijian.png',
                        con:'配件馆'
                    },
                    {
                        src:'./src/assets/images/下载.png',
                        con:'下载APP'
                    },
                ],
                list2:[
                    {
                        src:'./src/assets/images/four6.png',
                    },
                    {
                        src:'./src/assets/images/four2.png',
                    },
                    {
                        src:'./src/assets/images/four3.png',
                    },
                    {
                        src:'./src/assets/images/four4.png',
                    },
                    {
                        src:'./src/assets/images/four5.png',
                    },
                    {
                        src:'./src/assets/images/four1.png',
                    },
                ],
                list3:[
                    {
                        src:'./src/assets/images/five1.png',
                    },
                    {
                        src:'./src/assets/images/five2.png',
                    },
                    {
                        src:'./src/assets/images/five3.png',
                    },
                    {
                        src:'./src/assets/images/five4.png',
                    }
                ],
                list4:[
                    {
                        src:'./src/assets/images/seven1.png',
                        con:'闪充 USB 数据线',
                        price1:'￥19.90',
                        price2:'￥29'
                    },
                    {
                        src:'./src/assets/images/seven2.png',
                        con:'游戏手柄 百战「白」胜',
                        price1:'￥279',
                        price2:'￥279',
                        youhui:'积分可抵50%'
                    },
                    {
                        src:'./src/assets/images/seven3.png',
                        con:' OPPO Enco Q1 无线降噪耳机 极夜黑 ',
                        price1:'￥599',
                        price2:'￥599',
                        youhui:'积分可抵90%'
                    },
                    {
                        src:'./src/assets/images/seven4.png',
                        con:' O-Fresh立体声耳机 雅致灰 3.5mm接口 ',
                        price1:'￥99',
                        price2:'￥129'
                    },
                     {
                        src:'./src/assets/images/seven5.png',
                        con:' 41mm 雅黑氟橡胶表带 ',
                        price1:'￥79',
                        price2:'￥129'
                    },
                     {
                        src:'./src/assets/images/seven6.png',
                        con:' 46mm 雅黑氟橡胶表带 ',
                        price1:'￥79',
                        price2:'￥129'
                    },
                     {
                        src:'./src/assets/images/seven7.png',
                        con:' 普通充电套装 ',
                        price1:'￥39',
                        price2:'￥48'
                    },
                     {
                        src:'./src/assets/images/seven8.png',
                        con:' 20W 闪充USB套装 ',
                        price1:'￥99',
                        price2:'￥108'
                    }
                ],
                list5:[
                    {
                        src:'./src/assets/images/H11.png',
                        con:' Reno4 Pro 晶钻蓝 ',
                        price1:'￥3799',
                        youhui:'赠送音箱'
                        
                    },
                    {
                        src:'./src/assets/images/H12.png',
                        con:' Reno4 香芋紫 ',
                        price1:'￥2999',
                        youhui:'赠送音箱'
                    },
                    {
                        src:'./src/assets/images/H13.png',
                        con:' 真我 X50 Pro ',
                        price1:'￥3199',
                        price2:'￥3599',
                        youhui:'优惠400'
                    },
                    {
                        src:'./src/assets/images/H14.png',
                        con:' A11 湖光绿 ',
                        price1:'￥1099',
                        price2:'￥1299',
                        youhui:'优惠400'
                    },
                     {
                        src:'./src/assets/images/H15.png',
                        con:' A92s 九十度黑 ',
                        price1:'￥1999',
                        price2:'￥2199',
                        youhui:'12期免息'
                    },
                     {
                        src:'./src/assets/images/H16.png',
                        con:' A8 秘夜黑 ',
                        price1:'￥1199',
                        youhui:'赠送耳机'
                    },
                     {
                        src:'./src/assets/images/H17.png',
                        con:' X50 Pro 玩家版 ',
                        price1:'￥3399',
                        price2:'￥3699',
                        youhui:'优惠300'
                    },
                     {
                        src:'./src/assets/images/H18.png',
                        con:' Find X2 Pro 茶橘 ',
                        price1:'￥5999',
                        price2:'￥6999'
                    },
                    {
                        src:'./src/assets/images/H19.png',
                        con:' A52 凝光紫 ',
                        price1:'￥1599',
                        youhui:'赠送耳机'
                    }
                ],
                list6:[
                    {
                        src:'./src/assets/images/H21.png',
                        con:' OPPO Enco W51降噪耳机 ',
                        price1:'￥499',
                        youhui:'立减30'
                        
                    },
                    {
                        src:'./src/assets/images/H22.png',
                        con:' OPPO Enco W31 真无线耳机 ',
                        price1:'￥299',
                        youhui:'立减30'
                    },
                    {
                        src:'./src/assets/images/H23.jpg',
                        con:'  realme Buds Q ',
                        price1:'￥129',
                        price2:'￥149',
                        youhui:'立减20'
                    },
                    {
                        src:'./src/assets/images/H24.png',
                        con:' OPPO Enco M31 无线耳机 ',
                        price1:'￥299',
                        
                        youhui:'3期免息'
                    },
                     {
                        src:'./src/assets/images/H25.png',
                        con:' realme 原耳 橙色 ',
                        price1:'￥49',
                        youhui:'优惠20'
                    },
                     {
                        src:'./src/assets/images/H26.png',
                        con:' O-Fresh耳机 3.5mm接口 ',
                        price1:'￥129',
                        youhui:'立减10元'
                    },
                     {
                        src:'./src/assets/images/H27.png',
                        con:' 半入耳式耳机3.5mm接口 ',
                        price1:'￥59',
                        youhui:'立减4元'
                    },
                     {
                        src:'./src/assets/images/H28.png',
                        con:' O-Fresh耳机 Type-C接口 ',
                        price1:'￥129',
                        youhui:'立减10元'
                    },
                    {
                        src:'./src/assets/images/H29.png',
                        con:' 半入耳式耳机 Type-C接口 ',
                        price1:'￥69',
                        youhui:'积分抵现'
                    }
                ],
                list7:[
                    
                    {
                        src:'./src/assets/images/H32.png',
                        con:' OPPO Watch 41mm ',
                        price1:'￥1499',
                        youhui:'12期免息'
                    },
                    {
                        src:'./src/assets/images/H33.png',
                        con:' OPPO手环 静夜黑 ',
                        price1:'￥199',
                        youhui:'立减20'
                    },
                    {
                        src:'./src/assets/images/H34.png',
                        con:' OPPO手环 时尚版 星空黑 ',
                        price1:'￥249',
                        
                        youhui:'立减30'
                    },
                    {
                        src:'./src/assets/images/H31.png',
                        con:' OPPO Watch 精钢版 ',
                        price1:'￥2499',
                        youhui:'12期免息'
                        
                    },
                     {
                        src:'./src/assets/images/H35.png',
                        con:' 46mm 意大利小牛皮表带 ',
                        price1:'￥1999',
                        youhui:'积分抵现'
                    },
                     {
                        src:'./src/assets/images/H36.png',
                        con:' 41mm 氟橡胶表带 ',
                        price1:'￥129',
                        youhui:'积分抵现'
                    },
                    
                ],
                list8:[
                    {
                        src:'./src/assets/images/H41.png',
                        con:' 18W快充移动电源 ',
                        price1:'￥99',
                    },
                    {
                        src:'./src/assets/images/H42.png',
                        con:' 20W 闪充电源适配器 ',
                        price1:'￥79',
                    },
                    {
                        src:'./src/assets/images/H43.png',
                        con:' 65W 超闪电源适配器 ',
                        price1:'￥199',
                    },
                    {
                        src:'./src/assets/images/H44.png',
                        con:' 闪充 Type-C 数据线 ',
                        price1:'￥49',               
                    },
                     {
                        src:'./src/assets/images/H45.png',
                        con:' 30W VOOC闪充套装 ',
                        price1:'￥129',
                        youhui:'立减30'
                    },
                     {
                        src:'./src/assets/images/H46.png',
                        con:' 普通USB接口 数据线 ',
                        price1:'￥19',
                    },
                     {
                        src:'./src/assets/images/H47.png',
                        con:' 游戏手柄 百战「白」胜 ',
                        price1:'￥279',
                        youhui:'积分抵现'
                    },
                     {
                        src:'./src/assets/images/H48.png',
                        con:' Find X2凯夫拉保护壳 ',
                        price1:'￥149',
                    },
                    {
                        src:'./src/assets/images/H49.png',
                        con:' 三脚架蓝牙自拍杆 ',
                        price1:'￥119',
                        youhui:'立减20'
                    }
                ],
                list9:[
                    {
                        src:'./src/assets/images/H51.png',
                        con:' 乐心 智能体脂秤 ',
                        price1:'￥209',
                        youhui:'可抵95%'
                    },
                    {
                        src:'./src/assets/images/H52.png',
                        con:' OPPO 蓝牙音箱 ',
                        price1:'￥129',
                    },
                    {
                        src:'./src/assets/images/H53.png',
                        con:' Sleepace 睡眠纽扣 ',
                        price1:'￥119',
                        youhui:'可抵60%'
                    },
                    {
                        src:'./src/assets/images/H54.png',
                        con:' Sleepace 助眠香薰机 ',
                        price1:'￥289', 
                        youhui:'可抵60%'              
                    },
                     {
                        src:'./src/assets/images/H55.png',
                        con:' 5G CPE 移动路由器 ',
                        price1:'￥1999',
                    },
                     {
                        src:'./src/assets/images/H56.png',
                        con:' Sleepace 享睡香薰助眠灯 ',
                        price1:'￥329',
                        youhui:'可抵60%' 
                    }
                ],
                list10:[
                    {
                        src:'./src/assets/images/H61.png',
                        con:' ROCK Type-C弯头数据线 ',
                        price1:'￥49',
                        youhui:'可抵30%'
                    },
                    {
                        src:'./src/assets/images/H62.png',
                        con:' 绿联 床头可调节懒人支架 ',
                        price1:'￥49.90',
                        youhui:'可抵30%'
                    },
                    {
                        src:'./src/assets/images/H63.png',
                        con:' ROCK G1磁吸编织数据线 ',
                        price1:'￥59',
                        youhui:'可抵30%'
                    },
                    {
                        src:'./src/assets/images/H64.png',
                        con:' 摩米士3A弯头编织数据线 ',
                        price1:'￥29',
                        youhui:'可抵30%'               
                    },
                     {
                        src:'./src/assets/images/H65.png',
                        con:' 桌面手机折叠支架 ',
                        price1:'￥59',
                        youhui:'可抵30%' 
                    },
                     {
                        src:'./src/assets/images/H66.png',
                        con:' ROCK 5A弯头编织数据线 ',
                        price1:'￥29',
                    },
                     {
                        src:'./src/assets/images/H67.png',
                        con:' ROCK G3伸缩一拖三数据线 ',
                        price1:'￥45',
                        youhui:'可抵30%'
                    },
                     {
                        src:'./src/assets/images/H610.png',
                        con:' 闪充 Type-C 数据线 ',
                        price1:'￥49',
                    },
                    {
                        src:'./src/assets/images/H69.png',
                        con:' 洛斐DOT圆点机械键盘 ',
                        price1:'￥388',
                        youhui:'新品'
                    }
                ],
                list11:[
                    {
                        src:'./src/assets/images/H71.png',
                        con:' 摩飞 无线榨汁杯 ',
                        price1:'￥169',
                        price2:'￥209',
                        youhui:'直降40元'
                    },
                    {
                        src:'./src/assets/images/H72.png',
                        con:' 圈厨 小Q饭煲升级款 白色 ',
                        price1:'￥219',
                        price2:'￥249',
                        youhui:'直降30元'
                    },
                    {
                        src:'./src/assets/images/H73.png',
                        con:' 小水怪U1智能降温杯 黑色 ',
                        price1:'￥157',
                        price2:'￥167',
                        youhui:'直降60元'
                    },
                    {
                        src:'./src/assets/images/H74.png',
                        con:' 博的 便携果汁杯 ',
                        price1:'￥89',
                        youhui:'可抵30%'               
                    },
                     {
                        src:'./src/assets/images/H75.png',
                        con:' 圈厨 复古MINI烤箱 ',
                        price1:'￥189',
                        youhui:'可抵30%' 
                    },
                     {
                        src:'./src/assets/images/H76.png',
                        con:' 圈厨 复古电热水壶 ',
                        price1:'￥159',
                        price1:'￥189',
                        youhui:'直降30元'
                    },
                     {
                        src:'./src/assets/images/H77.png',
                        con:' 圈厨小方电陶炉 ',
                        price1:'￥179',
                        youhui:'新品'
                        
                    },
                     {
                        src:'./src/assets/images/H78.png',
                        con:' 摩飞 便携电热水壶 ',
                        price1:'￥189',
                        youhui:'新品'
                    },
                    {
                        src:'./src/assets/images/H79.png',
                        con:' 圈厨 迷你果汁机 ',
                        price1:'￥99',
                        youhui:'可抵30%'
                    }
                ],
                list12:[
                    {
                        src:'./src/assets/images/H81.png',
                        con:' nimova 肌肉按摩筋膜枪 ',
                        price1:'￥339',
                        price2:'￥399',
                        youhui:'直降60元'
                    },
                    {
                        src:'./src/assets/images/H82.png',
                        con:' SKG 颈椎按摩仪 ',
                        price1:'￥369',
                        price2:'￥469',
                        youhui:'直降10元'
                    },
                    {
                        src:'./src/assets/images/H83.png',
                        con:' Reepro 迷你电吹风 ',
                        price1:'￥99',
                        
                        youhui:'可抵50%'
                    },
                    {
                        src:'./src/assets/images/H84.png',
                        con:' 固特 超声波眼镜清洗机 ',
                        price1:'￥229',
                        price2:'￥249',
                        youhui:'直降20元'               
                    },
                     {
                        src:'./src/assets/images/H85.png',
                        con:' 和正 乳胶按摩枕 ',
                        price1:'￥99',
                        youhui:'可抵30%' 
                    },
                     {
                        src:'./src/assets/images/H86.png',
                        con:' AMIRO 补水仪 ',
                        price1:'￥159',
                        price1:'￥189',
                        youhui:'直降40元'
                    },
                     {
                        src:'./src/assets/images/H87.png',
                        con:' 须眉 防水剃须刀 ',
                        price1:'￥199',
                        youhui:'可抵95%'
                        
                    },
                     {
                        src:'./src/assets/images/H88.png',
                        con:' 直白 无线洁牙器 ',
                        price1:'￥159',
                        price1:'￥199',
                        youhui:'直降40元'
                    },
                    {
                        src:'./src/assets/images/H89.png',
                        con:' 素乐 发热眼罩 ',
                        price1:'￥129',
                    }
                ],
                list13:[
                    {
                        src:'./src/assets/images/H91.png',
                        con:' 大事件 临时停车牌 ',
                        price1:'￥29',
                        youhui:'新品'
                    },
                    {
                        src:'./src/assets/images/H92.png',
                        con:' ROCK 移车号码牌 ',
                        price1:'￥59',
                        youhui:'可抵30%'
                    },
                    {
                        src:'./src/assets/images/H93.png',
                        con:' ROCK 重力车载出风口支架 ',
                        price1:'￥59',
                        
                        youhui:'可抵95%'
                    },
                    {
                        src:'./src/assets/images/H94.png',
                        con:' Auto Bot 两用车载香薰 ',
                        price1:'￥69',
                        youhui:'可抵50%'               
                    },
                     {
                        src:'./src/assets/images/H95.png',
                        con:' 绿联 临时停车牌 ',
                        price1:'￥32.80',
                        youhui:'可抵30%' 
                    },
                     {
                        src:'./src/assets/images/H96.png',
                        con:' 绿联 出风口重力感应支架 星空灰 ',
                        price1:'￥39.90',
                        youhui:'可抵30%'
                    },
                ],
                list14:[
                    {
                        src:'./src/assets/images/H101.png',
                        con:' 向物 仙人掌灭蚊灯 ',
                        price1:'￥59',
                        price2:'￥69',
                        youhui:'直降10元'
                    },
                    {
                        src:'./src/assets/images/H102.png',
                        con:' 朗菲 手持蒸汽刷 ',
                        price1:'￥199',
                        price2:'￥259',
                        youhui:'直降60元'
                    },
                    {
                        src:'./src/assets/images/H103.png',
                        con:' realme 真我潮玩双肩包 ',
                        price1:'￥149',
                        
                        youhui:'新品'
                    },
                    {
                        src:'./src/assets/images/H104.png',
                        con:' 卡拉羊 极光系列儿童书包 ',
                        price1:'￥129',
                        price2:'￥159',
                        youhui:'直降30元'               
                    },
                     {
                        src:'./src/assets/images/H105.png',
                        con:' 几素 粘毛器 ',
                        price1:'￥29',
                        youhui:'可抵30%' 
                    },
                     {
                        src:'./src/assets/images/H106.png',
                        con:' 几素 毛球修剪器 ',
                        price1:'￥69',
                        youhui:'可抵30%'
                    },
                     {
                        src:'./src/assets/images/H107.png',
                        con:' 好视力护眼台灯 ',
                        price1:'￥89',
                        youhui:'可抵30%'
                        
                    },
                     {
                        src:'./src/assets/images/H108.png',
                        con:' 铠尔瑞小蛮腰螺丝刀22件组 黄色 ',
                        price1:'￥49',
                        youhui:'可抵30%'
                    },
                    {
                        src:'./src/assets/images/H109.png',
                        con:' 素乐F5台式风扇 素米白 ',
                        price1:'￥99',
                    }
                ]
            }
        }
    }
</script>


<style>
    .lbt img{
        width: 100%;
    }
    .lbt .mint-swipe-items-wrap{
        
        padding-bottom:55.55%;
    }
    /* .lbt{
        margin-top: 2%;
    } */
</style>

<style scoped>
    .body{
        background-color: #F7F8FA;
        overflow: hidden;
        
    }
    p{
        font-size: 12px;
    }
    .header{
        width: 100%;
        height: 40px;
        padding-top: 2%;
        background-color: white;
        padding-left: 5%;

    }
    .bom{
        width: 100%;
        height: 200px;
        padding-bottom: 0;
        background-color: white;

    }
    .sousuo input{
        height: 30px;
        width: 70%;
        /* border-radius: 15px;  */
        background:#F8F9FA;

        border:0px;
        outline: none;
        float: left;
        
        
        
    }
    .sousuo{
        width: 100%;
        height: 30px;
        /* margin-left: 30px; */
        position: relative;
        overflow: hidden;
        
        
    }
    .login{
        float: left;
        font-size: 14px;
        margin-left: 5px;
        margin-top: 5px;
        display: inline-block;
    }

    .sousuo b{
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
    .lbt img{
        width: 100%;
    }
    .lbt .mint-swipe-items-wrap{
        
        padding-bottom:55.55%;
    }
    /* .lbt{
        margin-top: 2%;
    } */
    .one_li{
        float: left;
        width: 25%;
        font-size: 12px;
        text-align: center;
    }
    .one_div{
        margin-top: 10px;
        overflow: hidden;
        
    }
    .two_li{
        float: left;
        width: 20%;
        text-align: center;
        
    }
    .two_li img{
        width: 80%;
    }
    .two_p{
        text-align: center;
    }
    .two_ul{
        overflow: hidden;
    }
    .two_div{
        margin-top: 10px;
        background-color: white;
    }
    .three_div{
        margin-top: 20px;
        text-align: center;
        background-color: #F7F8FA;
    }
    .three_div img{
        width: 95%;
    }
    .four_li{
        float: left;
        width: 45.5%;

        margin-left: 3%;

    }
    .four_li img{
        width: 100%;
    }
    .four_ul{
        overflow: hidden;
        margin-top: 4%;
        background-color: white;
    }
    .five_div{
        margin-top: 2%;
    }
    .five_li{
        float: left;
        width: 21.3%;
        margin-left: 3%; 
        
    }
    .five_li img{
        width: 100%;
    }
    .five_ul{
        overflow: hidden;
    }
    .six_div2{
        float: right;
        font-size: 12px;
    }
    .six_div>div{
        display: inline-block;
    }
    .six_div{
        overflow: hidden;
        margin: 10px;
        
    }
    .seven_div{
        width: 100%;
        overflow:auto;
        
        
    }
    .seven_ul{
        width: 300%;
        background-color: white;
        margin-left: 10px;
        overflow: hidden;
        border-radius: 10px;
        
    }
    .seven_li{
        float: left;
        width: 12.5%;
        
    }

    .seven_li img{
        width: 100%;
        
    }
    .seven_div1{
        position: relative;
    }
    .youhui{
        position: absolute;
        bottom: 5px;
        color: white;
        background: linear-gradient(228deg,#ff6363,#ff9339)
    }
    .con{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        font-size: 14px;
    }
    .price1{
        float: left;
        margin-left: 20px;
        font-size: 14px;
        color: #F63434;
    }
    .price2{
        float: left;
        text-decoration:line-through;
        color: 	#D3D3D3;
    }
    .li_right{
        float: left;
        border: 1px solid #BEBEBE;
        width: 75px;
        height: 125px;
        margin-top: 20px;
        border-radius: 10px;
        
    }
    /* .seven_div2{
        margin-top: 30px;
        text-align: center;
    }
    .seven_div3{
        width: 25px;
        height: 25px;
        margin-top: 10px;
        text-align: center;
        border-radius: 50%;
        margin-left: 25px;
        background-color: #F7F8FA;
    } */
    .eight_div{
        margin: 10px;
    }
    .span_right{
        float: right;
        font-size: 12px;
        line-height: 20px;
        
    }
    .night_div{
        text-align: center;
        overflow: hidden;
        
    }
    .night_div img{
        width: 95%;
        
        
    }
    .ten_div1{
        position: relative;
    }
    .ten_li{
        float: left;
        width: 33.3%;
        height: 100%;

        overflow: hidden;
    }
    .ten_li img{
        width: 100%;
        
    }
    .ten_ul{
        height: 100%;
        overflow: hidden;
        background-color: white;
        margin: 10px 10px;
        /* margin-top: 20px; */
    }
    .pie{
        height: 42px;
    }
    .pie1{
        display: inline-block;
        float: left;
        font-size: 12px;
        color: #F63434;
    }
    .pie2{
        float: left;
        font-size: 12px;
        text-decoration: line-through;
        color: #D3D3D3;  
    }
    .bom_ul{
        overflow: hidden;
        margin-top: 20px;

    }
    .bom_ul li{
        float: left;
        margin-left: 10%;
        margin-top: 20px;
        
    }
    .bom_ul .bom_right_li{
        float: right;
        margin-right: 10%;
    }
    .bom_ul img{
        width: 25%;
        float: left;
    }
    
    .bom_p1{
        text-align: center;
        margin-top: 20px;
    }
    .bom_p1 span{
        margin-left: 10px;
    }
    .bom_p2{
        text-align: center;
        margin-top: 20px;
    }
    .bom_left_li img{
        width: 21%;
    }
    span{
        color: black;
    }
</style>