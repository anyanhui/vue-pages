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
      <ul>
        <li><a href="app1/child1">这是app1下的第一个子页面</a></li>
      </ul>
    </div>
    <p>段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111段落1111111111111111111111111111111111</p>
    <p>段落2222222222222222222222222222</p>
    <p>段落3333333333333333333333333333333</p>
    <pre>
      function(){
        alert("11");
      }
    </pre>
    <code>
      function(){<br/>
          alert("11");<br/>
      }
    </code>
    <code v-text="childMsg"></code>
  </div>
  <hello v-ref:hello></hello>
</template>

<script>
  import hello from '../../components/Hello';
  export default {
    data : function() {
        return {
            msg: 'app1'
        }
    },
    components : {
      hello : hello
    },
    computed : {
        childMsg : function(){
          return this.$refs.hello.showMsg;
        }
    }
  }
</script>
