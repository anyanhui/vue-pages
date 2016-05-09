<script>
  /**
   *  定义菜单数据，目前为整个项目拥有一套菜单，如果将来会扩展到多个app，
   *  每个app都有自己独立的菜单，则可以在此处进行扩展
   *  id： 菜单项唯一标识
   *  path：浏览器地址栏显示的url
   *  name：菜单名称，用于显示
   *  selected：是否选中并进行高亮
   **/
    export default {
        data : [
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
        ]

    }
</script>
