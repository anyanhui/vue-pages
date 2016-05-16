<script>
  /**
   *  此处定义
   */
    export default {
      apps : [
          {
            name : "home",
            path : "home"
          },
          {
            name : "app1",
            path : "app1/app1"
          }
      ],
      init : function() {
          var components = {};
          //默认加载./apps下的组件，如果需要加载其他路径下的，只需要在上面的apps中加一个 base属性，值为该组件的相对路径
          this.apps.forEach(function(app){
              components[app.name] = function (resolve) {
                var base = app.base || './apps/';
                require([base+app.path], resolve);
              };
          });
          return components;
      }
  }
</script>
