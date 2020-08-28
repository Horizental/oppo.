<template>
    <div>
        <div class="sone_div">
            <img src="src/assets/images/返回.png" alt="" class="img1" @click="back()">
            <b><img src="src/assets/images/sousuo.png" alt="" class="img2"></b>
            <input type="text" placeholder="OPPO K7">
            <span>搜索</span>
        </div>
        <p class="stj_p">热门推荐</p>
        <div class="stwo_div">
            <p>
                <span>5G爆品 K7</span>
                <span>A92s</span>
                <span>Reno4系列</span>
            </p>
            <p>
                <span>千元好机 A72</span>
                <span>Find X2系列</span>
                <span>realme专区</span>
            </p>
            <p>
                <span>W51真无线降噪耳机</span>
                <span>网易云定制版W31蓝牙耳机</span>
            </p>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
            

        }

    }
</script>


<style scoped>
    .img1{
        width: 7%;
        float: left;
        margin-left: 4%;
    }
    .img2{
        width: 50%;
        margin-top: 8px;
    }
    .sone_div{
        overflow: hidden;
        display: flex; /*所有子元素block或inline都变成行内块元素的样式*/
        align-items: center;         /*子元素中线居中*/
        /* justify-content: flex-end;       子元素靠右 */
        margin-top: 2%;
    }
    .sone_div b{
        width: 30px;
        height: 30px;
        display: inline-block;
        text-align: center;
        background-color: #F8F9FA;
    }
    .sone_div input{
        width: 65%;
        /* margin-left: 5px; */
        height: 30px;
        background-color: #F8F9FA;
        border: 0px;
        outline: none;
    }
    .sone_div span{
        margin-left: 5px;
    }
    .stj_p{
        margin-left: 4%;
        margin-top: 10%;
        font-size: 12px;
        color: #666;
    }
    .stwo_div{
        margin-left: 4%;
    }
    p{
        margin: 5% 0;
    }
    .stwo_div span{
        margin-right: 4%;
        font-size: 12px;
        color: #666;
        background: #f7f8fa;
        line-height: 25px;
        display: inline-block;
        height: 25px;
    }
</style>