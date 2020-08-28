<template>
    <main>
        <router-view></router-view>
        <ul class="frist_ul">
            <li v-for="(item,index) in list" class="frist_li">
                <router-link :to="item.path" class="one">
                    <img :src="item.src" alt="" class='src'>
                    <img :src="item.pic" alt="" class="pic">
                    <p class="pp">{{item.con}}</p>
                </router-link>    
            </li>
            
            
        </ul>
        
    </main>
</template>

<script>
    export default{
        data(){
            return{
                list:[
                    {
                        con:'首页',
                        path:'/homepage',
                        src:'./src/assets/images/home.png',
                        pic:'./src/assets/images/home1.png'
                        
                    },
                    {
                        con:'分类',
                        path:'/type',
                        src:'./src/assets/images/type.png',
                        pic:'./src/assets/images/type1.png'
                        
                    },
                    {
                        con:'购物车',
                        path:'/cars',
                        src:'./src/assets/images/cars.png',
                        pic:'./src/assets/images/cars1.png'
                        
                    },
                    {
                        con:'我的',
                        path:'/my',
                        src:'./src/assets/images/my.png',
                        pic:'./src/assets/images/my1.png'
                        
                    }
                ]
            }
        }
    }
</script>
    
<style>
    .frist_ul{
        position: fixed;
        width: 100%;
        left: 0px;
        bottom: 0px;
        background-color: white;
    }
    .frist_li{
        float: left;
        width: 25%;
        text-align: center;
    }
    .frist_li img{
        width: 30%;
    }
    .frist_ul p{
        font-size: 12px;
        color: black;
    }
    
    .one{
        text-decoration: none;
    }
    .src{
        display: none;
    }
    .pic{
        display: inline-block;
    }
    .router-link-active .src{
        display: inline-block;
    }
    .router-link-active .pic{
        display: none;
    }
    .frist_ul .pp{
        color: #B3B3B3;
    }
    .router-link-active .pp{
        color: #FC5E2E;
    }
</style>