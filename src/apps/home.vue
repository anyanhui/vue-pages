<style src="../../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style lang="less">
  .content {
    height : 300px;
    .app-content {
      width : 100px;
      height : 100px;
      background: #d58512;
      transition : .6s cubic-bezier(0,1.5,.5,1);
      position : relative;
      top : 80px;
      left : 0px;
      float : left;
      margin-left : 15px;
    }
    .app-content:hover {
      -webkit-transform:scale(1.5);
      -moz-transform:scale(1.5);
      -o-transform:scale(1.5);
      transform: scale(1.5);
    }
  }

  #spinner {
    clear : both;
  }
  #spinner img {
    position: absolute;
    border: 1px solid #ccc;
    background: rgba(255,255,255,0.8);
    box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
  }
</style>
<template>
    <div id="app">
        <div class="content">
          <div class="app-content">
            主页
          </div>
          <div class="app-content">
            主页
          </div>
          <div class="app-content">
            主页
          </div>
          <div class="app-content">
            主页
          </div>
          <div class="app-content">
            主页
          </div>
        </div>
      <div id="stage" style="padding-left: 180px; height: 160px;">
        <div id="spinner" style="-webkit-transform-origin: 180px 0 0;">
          <img style="-webkit-transform: rotateY(0deg) translateX(180px); padding: 0 0 0 160px;" src="../../static/images/p1.jpg" width="400" height="160" alt="">
          <img style="-webkit-transform: rotateY(-72deg) translateX(180px); padding: 0 0 0 147px;" src="../../static/images/p2.jpg" width="413" height="160" alt="">
          <img style="-webkit-transform: rotateY(-144deg) translateX(180px); padding: 0 0 0 120px;" src="../../static/images/p3.jpg" width="440" height="160" alt="">
          <img style="-webkit-transform: rotateY(-216deg) translateX(180px); padding: 0 0 0 147px;" src="../../static/images/p4.jpg" width="413" height="160" alt="">
        </div>
      </div>
    </div>

</template>

<script>

import Hello from '../components/Hello'
console.log("app main");
export default {
  components: {

  }
}
</script>

