<style src="../../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style>
  .app-content {
    width : 100px;
    height : 100px;
    background: #d58512;
    transition : .6s cubic-bezier(0.42,0,1,1);
    position : relative;
    top : 50px;
    left : 50px;
    float : left;
    margin-left : 15px;
  }
  .app-content:hover {
    width : 200px;
    height : 200px;
    top : 0px;
    left : 0px;
    z-index : 1000;
  }
</style>
<template>
    <div id="app">
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
</template>

<script>

import Hello from '../components/Hello'
console.log("app main");
export default {
  components: {

  }
}
</script>

