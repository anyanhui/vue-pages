<style lang="less">
    .hello {
      h1 {
        color : red;
      }
    }
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <button class="btn btn-primary" @click="msg='改变后的'">改变MSG</button>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed : {
    showMsg : function(){
      return this.msg;
    }
  }
}
</script>
