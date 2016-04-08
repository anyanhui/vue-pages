<style src="../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<template>
  <div id="app" class="container">
      home
      <div class="row">
        <div class="col-xs-2">
          left
        </div>
        <div class="col-xs-10">
            <table class="table">
              <tr>
                <td>aaa</td>
                <td>aa</td>
              </tr>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
console.log("app main");
export default {
  components: {

  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

</style>

