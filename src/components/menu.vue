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
              .child-active {
                background : #000000;
                color : #ffffff;
              }
          }
      }
      .active {
        color : red!important;
      }

  }
</style>
<template>
  <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
          <li v-for="menu in menus" :class="{'v-dropdown':menu.children}">
              <a href="/{{menu.path}}" v-text="menu.name" v-if="!menu.children" :class="{active:menu.selected}" @click="selected(menu)"></a>
              <dropdown v-else>
                <a href="#" class="dropdown-toggle" :class="{active:menu.selected}" data-toggle="dropdown" role="button" > {{menu.name}}<span class="caret"></span></a>
                <ul name="dropdown-menu" class="dropdown-menu">
                  <li v-for="child in menu.children">
                    <a href="/{{child.path}}" :class="{'child-active':child.selected}" v-text="child.name" @click="selected(child)"></a>
                  </li>
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
        this.menus = [
          {
              id : "home",
              path : "home",
              name : "主页",
              selected : true
          },
          {
            id : "app1",
            path : "app1",
            name : "APP1",
            selected : false
          },
          {
            id : "dropdown",
            path : "dropdown",
            name : "下拉菜单",
            selected : false,
            children : [
              {
                id : "dropdown1",
                path : "dropdown1",
                name : "下拉菜单1",
                selected : false,
                parent : "dropdown"
              },
              {
                  id : "dropdown2",
                  path : "dropdown2",
                  name : "下拉菜单2",
                  selected : false,
                  parent : "dropdown"
              }
            ]
          }
        ];
    },
    methods :  {
        clearSelected : function(menus){
          var self = this;
          menus.forEach(function(menu){
            menu.selected = false;
            if(menu.children){
              self.clearSelected(menu.children);
            }
          });
        },
        selected : function(menu){
          this.clearSelected(this.menus);
          if(menu.parent){
              var parent = this.getParent(menu.parent);
              parent.selected = true;
          }
          menu.selected = true;

        },
        getParent : function(parentId){
          for(var i=0;i<this.menus.length;i++){
            if(this.menus[i].id == parentId){
              return this.menus[i];
            }
          }
          return null;
        }
    }
  }
</script>
