<template>
    <div class="body">
        <div class="mblock">
            <router-link :to="'/login'">
            <div class="mone_div">
                <div class="mone_div1">
                    <img src="src/assets/images/mmy.png" alt="">
                </div>
                <div class="mone_div2">
                    <p  class="mlogin_p">登录账号</p>
                    <p>体验更多功能</p>
                </div>
                <button>
                        <span>登录</span>
                </button>
            </div>
        </router-link>
        <div class="mtwo_div">
            <ul>
                <li>
                    <p>--</p>
                    <p>优惠券</p>
                </li>
                <li>
                    <p>--</p>
                    <p>回收代金券</p>
                </li>
                <li>
                    <p>--</p>
                    <p>积分</p>
                </li>
            </ul>
        </div>
        <div>
            <div class="mthree_div">
                <div class="mthree_div1">我的订单</div>
                <div class="mthree_div2">全部订单></div>
            </div>
            <div>
                <ul class="mthree_ul">
                    <li>
                        <img src="src/assets/images/待付款.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="src/assets/images/待发货.png" alt="">
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src="src/assets/images/已发货.png" alt="">
                        <p>已发货</p>
                    </li>
                    <li>
                        <img src="src/assets/images/待评价.png" alt="">
                        <p>待评价</p>
                    </li>
                    <li>
                        <img src="src/assets/images/回收单.png" alt="">
                        <p>回收单</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mfour_div">互动乐园</div>
        <div class="mfive_div">
            <div class="mfive_div1">
                <div class="mfive_div2">
                    <p>幸运锦鲤</p>
                    <p>一人独享礼包</p>
                </div>
                <img src="src/assets/images/幸运锦鲤.png" alt="">
            </div>
        </div>
        <div class="msix_div">常用工具</div>
        <div class="mseven_div">
            <ul class="mseven_ul">
                <li v-for="(item,idex) in list" class="mseven_li">
                    <div>
                        <img :src="item.src" alt="">   
                    </div>
                    <p>{{item.con}}</p>
                </li>
            </ul>
        </div>
        </div>
        


        <div class="bom">
            <div>
                <ul class="bom_ul">
                    <li class="bom_left_li"><img src="src/assets/images/下载APP.png" alt=""><span>下载APP</span></li>
                    <router-link :to="'/login'">
                        <li class="bom_right_li">
                            <img src="src/assets/images/登录账号.png" alt="">
                        
                            <span>登录账号</span>
                           
                        </li>
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
                        src:'./src/assets/images/服务网点.png',
                        con:'服务网点'
                    },
                    {
                        src:'./src/assets/images/保障服务.png',
                        con:'保障服务'
                    },
                    {
                        src:'./src/assets/images/真伪查询.png',
                        con:'真伪查询'
                    },
                    {
                        src:'./src/assets/images/维修服务.png',
                        con:'维修服务'
                    },
                    {
                        src:'./src/assets/images/OPPO售后.png',
                        con:'OPPO售后'
                    },
                    {
                        src:'./src/assets/images/realme售后.png',
                        con:'realme售后'
                    },
                ]
            }
        }
    }
</script>


<style scoped>
    .body{
        background-color: #F7F8FA;
    }
    .mblock{
        background-color:white;
    }
    p{
        font-size: 12px;
        color: black;
    }
    .mone_div{
        overflow: hidden;
        padding-top: 5%;
    }
    .mone_div1{
        float: left;
        overflow: hidden;
        margin-left: 5%;
        width: 15%;
        
    }
    .mone_div1 img{
        width: 100%;
        
    }
    .mone_div2{
        float: left;
        margin-top: 3%;
        margin-left: 2%;

    }
    .mone_div span{
        color: white;
    }
    button{
        
        margin-top: 3%;
        margin-right: 3%;
        float: right;
        width: 15%;
        background-color: red;
        border: none;
        /* color: white; */
        border-radius: 5px;
    }
    .mlogin_p{
        font-size: 15px;
    }
    .mtwo_div{
        margin: 5%;
    }
    .mtwo_div li{
        float: left;
        width: 33.3%;
        text-align: center;
    }
    .mthree_div div{
        display: inline-block;
        margin: 5%;
        overflow: hidden;
    }
    .mthree_div2{
        float: right;
    }
    .mthree_ul{
        overflow: hidden;
    }
    .mthree_ul li{
        float: left;
        width: 20%;
        text-align: center;
    }
    .mthree_ul li img{
        width: 50%;
    }
    .mfour_div{
        margin: 5% 5%;
    }
    .mfive_div{   
        width: 50%;
    }
    .mfive_div1{   
        overflow: hidden;
        margin-left: 10%;
        background: #F7F8FA;
        border-radius: 5px;
    }
    .mfive_div1 img{   
        float: left;
        width: 30%;
        margin-left: 10%;
        
    }
    .mfive_div2{   
        float: left;
        display: inline-block;
        margin: 5% auto;
        text-align: center;
        
    }
    .msix_div{
        margin: 5% 5%;
    }
    .mseven_li{
        float: left;
        width: 25%;
        text-align: center;
    }
    .mseven_li img{
        width: 50%;
    }
    .mseven_ul{
        overflow: hidden;
    }
    .bom{
        width: 100%;
        height: 200px;
        padding-bottom: 0;
        background-color: white;

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
    a{
        text-decoration:none;
    }
    .bom_left_li img{
        width: 21%;
    }
    span{
        color: black;
    }
</style>