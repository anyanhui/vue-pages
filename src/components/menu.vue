<style lang="less">
  .navbar-nav {
      .v-dropdown {
          .btn-group {
              >a {
                 line-height: 50px;
                 color : #9d9d9d;
                 text-decoration : none;
                 background-color : transparent;
               }
              >a:focus {
                  color : #FFFFFF;
                  background : none;
               }
               >a:hover {
                  color : #FFFFFF;
               }
          }
      }
  }
</style>
<template>
  <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
          <li class="active"><a href="home">主页</a></li>
          <li><a href="app1">APP1</a></li>
          <li class="v-dropdown">
              <dropdown>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" >Dropdown <span class="caret"></span></a>
                  <ul name="dropdown-menu" class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                  </ul>
              </dropdown>
          </li>
      </ul>
  </div>
</template>

<script>
  import { dropdown } from 'vue-strap'
  export default {
    components : {
      dropdown
    },
    data : function(){
      return {
        menus : []
      }
    },
    created : function(){

    },
    methods : function() {

    }
  }
</script>
