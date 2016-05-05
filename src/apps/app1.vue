<style lang="less">
     .list {
       width : 300px;
       height : 200px;
       border : 1px solid red;
       float : right;
       background: #d58512;
       transition : .6s cubic-bezier(0,1.5,.5,1);
       position : relative;
       top : 0px;
       right : 0px;
     }
     .list:hover {
       -webkit-transform:scale(1.5);
       -moz-transform:scale(1.5);
       -o-transform:scale(1.5);
       transform: scale(1.5);
     }
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="list">
    list
    </div>
    <p>段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111</p>
    <p>段落2222222222222222222222222222</p>
    <p>段落3333333333333333333333333333333</p>
  </div>
</template>

<script>
  console.log("app1");
  export default {
    data () {
    return {
      msg: 'app1'
    }
  }
  }
</script>
