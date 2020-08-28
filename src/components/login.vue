<template>
    <div>
        <div class="lheader">
            <p class="lheader_p1">简体中文
                <span>
                <img src="src/assets/images/简体中文箭头.png" alt="">
                </span>
            </p>
            <p class="lheader_p2">帮助中心</p>
        </div>
        <div class="llogo">
            <img src="src/assets/images/oppologo.png" alt="">
        </div>
        <ul class="llogin_ul">
            <li v-for="(item,index) in list" @click="change(index)" :class="{current:index==num}">{{item.con}}</li>
            
        </ul>
        <div v-show="num==0">
            <div class="lsjhm">
                <input type="text" placeholder="请输入手机号码">
            </div>
            <div class="lyzm">
                <input type="text"  placeholder="请输入验证码">
                <div class="lhqyzm">获取验证码</div>
            </div>
        </div>
        <div v-show="num==1">
            <div class="lsjhm1">
                <input type="text" placeholder="请输入手机号码或邮箱">
            </div>
            <div class="lpasswd">
                <input type="text" placeholder="请输入密码">
            </div>
            <p class="lwjmm">忘记密码</p>
        </div>
        <div class="ldenglu">
            <button>登录</button>
        </div>
        <p class="lzhuce">注册账号</p>
        <div class="lbottom">
            <p class="lyszc">隐私政策</p>
            <div class="lbtm">
                <p>© 2005 - 2020 广东欢太 版权所有 粤ICP备 </p>
                <p>14056724 号-2联系方式：4001-666-888</p>
                
            </div>
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
                        con:'短信密码登录',
                    },
                    {
                        con:'密码登录'
                    }
                ]
            }
        },
        methods:{
            change(a){
                this.num=a;
            }
        }
    }
</script>
<style></style>
<style scoped>
    /* p{
        font-size: 14px;
    } */
    .llogin_ul .current{
        color: black;
    }
    .lheader{
        overflow: hidden;
        margin: 5%;
    }
    .lheader_p1,.lheader_p2{
        float: right;
    }
    .lheader_p2{
        margin-right: 10%;
    }
    .llogo{
        text-align: center;
    }
    .llogin_ul{
        text-align: center;
        overflow: hidden;
    }
    .llogin_ul li{
        float: left;
        width: 50%;
        color: #B3B3B3;
    }
    .lsjhm{
        width: 80%;
        margin-top: 10%;
        margin-left: 10%;
        
    }
    .lsjhm input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 0;
        outline: none;
        background-color: #F7F7F7;
        font-size: 12px;
    }
    .lyzm{
        width: 80%;
        margin-top: 5%;
        margin-left: 10%;
    }
    .lyzm input{
        width: 70%;
        height: 40px;
        border-radius: 10px;
        border: 0;
        outline: none;
        background-color: #F7F7F7;
        font-size: 12px;
    }
    .lhqyzm{
        width: 27%;
        display: inline-block;
        font-size: 12px;
        line-height: 40px;
        text-align: center;
        background-color: #D9D9D9;
        border-radius: 10px;
    }
    .lsjhm1{
        width: 80%;
        margin-top: 10%;
        margin-left: 10%;
        
    }
    .lsjhm1 input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 0;
        outline: none;
        background-color: #F7F7F7;
        font-size: 12px;
    }
    .lpasswd{
        width: 80%;
        margin-top: 5%;
        margin-left: 10%;
    }
    .lpasswd input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 0;
        outline: none;
        background-color: #F7F7F7;
        font-size: 12px;
    }
    .lwjmm{
        margin-left: 10%;
        font-size: 12px;
        margin-top: 5%;
        color: #5A6E97;
    }
    .ldenglu{
        width: 80%;
        margin-top: 10%;
        margin-left: 10%;
    }
    .ldenglu button{
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 10px;
        color: white;
        background-color: #2AD181;
    }
    .lzhuce{
        margin-top: 5%;
        font-size: 14px;
        text-align: center;
        color: #2AD181;
    }
    .lyszc{
        text-align: center;
        font-size: 14px;
        color: #5A6E97;
    }
    .lbtm{
        margin-top: 5%;
        text-align: center;
        font-size: 12px;
    }
    .lbottom{
        position: absolute;
        bottom: 5%;
        left: 18.5%;
        right: 18.5%;
    }
    
</style>

