<template>
    <div class="body">
        <div class="gheader">
            <h1>购物车</h1>
        </div>
        <div class="gheader1"></div>
        <div class="cone_div">
            <img src="src/assets/images/购物车.png" alt="">
        </div>
        <div class="ctwo_div">购物车空空,该补货了啦</div>
        <div class="cthree_div">看看大家都买了什么</div>
        <div class="cfour_div">
            <ul class="cfour_ul">
                <li v-for="(item,index) in list" class="cfour_li">
                    <div>
                        <img :src="item.src" alt="">
                    </div>
                    <p class="ccon">{{item.con}}</p>
                    <p class="ctedian">{{item.tedian}}</p>
                    <p class="cprice">
                        <span class="cprice1">{{item.price1}}</span>
                        <span class="cprice2">{{item.price2}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
    
    
<script>
    export default{
        data(){
            return{
                list:[
                    {   
                        src:'./src/assets/images/G1.png',
                        con:'OPPO Enco W51 降噪耳机 绒白',
                        tedian:'',
                        price1:'￥499',
                    },
                    {   
                        src:'./src/assets/images/G2.png',
                        con:'Reno4 Pro',
                        tedian:'',
                        price1:'￥3799',
                    },
                    {   
                        src:'./src/assets/images/G3.png',
                        con:'OPPO Enco W31 真无线耳机 被表「白」',
                        tedian:'',
                        price1:'￥299',
                    },
                    {   
                        src:'./src/assets/images/G4.png',
                        con:'A92s 九十度黑',
                        tedian:'',
                        price1:'￥2199',
                    },
                    {   
                        src:'./src/assets/images/G5.png',
                        con:'OPPO Watch',
                        tedian:'',
                        price1:'￥1499',

                    },
                    {   
                        src:'./src/assets/images/G6.png',
                        con:'OPPO Enco W51 降噪耳机 绒白',
                        tedian:'',
                        price1:'￥1399',
                        price2:'￥1499'
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
    .gheader{
        width: 100%;
        height: 40px;
        text-align: center;
        position:fixed;
        border-bottom: 1px solid black;
        background-color: white;
        
    }
    .gheader h1{
        line-height: 40px;
    }
    .gheader1{
        width: 100%;
        height: 40px;
    }
    .cone_div{
        text-align: center;
        margin-top: 20%;
    }
    .cone_div img{
        width: 20%;
    }
    .ctwo_div{
        text-align: center;
        margin-top: 5%;
        color: #BCBCBC;
        font-size: 14px;
    }
    .cthree_div{
        text-align: center;
        margin-top: 15%;
        font-size: 15px;
    }
    .cfour_ul{
        overflow: hidden;
        padding-bottom: 60px;
        background-color: white;
        margin: 0 5%;
        margin-top: 2%;
        border-radius: 10px;
    }
    .cfour_li{
        width: 50%;
        float: left;
    }
    .cfour_li img{
        width: 100%;
    }
    .ccon{
        height: 42px;
        text-align: center;
        font-size: 13px;
        color: #5F5F5F;
    }
    .cprice{
        text-align: center;
        font-size: 13px;
    }
    .cprice1{
        color: #5F5F5F;
    }
    .cprice2{
        color: #BABABA;
        text-decoration: line-through;
    }

</style>