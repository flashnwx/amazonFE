<template>
<!--  v-model="active"  -->
    <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="newspaper-o" to="/goodsList">列表页</van-tabbar-item>
        <van-tabbar-item icon="logistics" to="/goodsCar">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    
</template>   

<script lang="ts"> 
    import {Options,Vue } from "vue-class-component"  
    import {useRoute} from "vue-router"
    // 安装 vue-property-decorator
    // cnpm i vue-property-decorator --save
    import {Prop} from "vue-property-decorator"
    @Options({})
    export default class AboutView extends Vue{ 
        @Prop(Number)
        private active;
    }
</script>