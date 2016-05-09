import Vue from 'vue';
import page from 'page';
import appHeader from './components/appHeader';
import appMenu from './components/menu';
import apps from './appConfig';

//动态载入所需要的组件
let apps = apps,components={};
//默认加载./apps下的组件，如果需要加载其他路径下的，只需要在上面的apps中加一个 base属性，值为该组件的相对路径
apps.forEach(function(app){
  components[app.name] = function (resolve) {
    var base = app.base || './apps/';
    require([base+app.path], resolve);
  };
});
let app = new Vue({
    el: 'body',

    mixins : [], //继承一些通用的组件，如消息提醒 弹框等

    data : function () {
        return {
            view    : "home",//主视图
            page    : "",//保存page对象
            appData : {} //保存url相关信息
        };
    },

   /* components: {
        home: function (resolve) {
          require(['./App'], resolve)
        },
      /!*app1: function (resolve) {
          require(['./apps/app1'], resolve)
        }*!/
    },*/

    components : Object.assign({
        appHeader : appHeader,
        appMenu   : appMenu
    },components),

    ready  : function() {
      page.start({ dispatch :true });
    },

    created : function(){
        var self = this,
          baseUrl = '/';
        /*page.base(baseUrl);*/
        page('/:app/:any*', this.router);
        this.page = page;
        console.log(appMenu.menus);
    },

    methods : {
        router : function (ctx) {
          console.log("xxxxxxxxxxxxaax");
          var app = ctx.params.app;
          var any = ctx.params.any;
          if(app) {
              if(app !== this.view) {
                console.log(app);
                /*require(['apps/' + app], function(conf) {
                  console.log(conf);
                  Vue.component(app, conf.default);
                  this.view = app;
                  this.appData.uri = any;
                  this.appData.queryString = ctx.querystring;
                  this.$broadcast("setAppView",any);
                }.bind(this));*/
                this.view = app;
                this.appData.uri = any;
                this.appData.queryString = ctx.querystring;
              }else{
                //this.$destroy();
                //if(app != any){
                this.$broadcast("setAppView",any);
                //}
              }

              this.appData.uri = any;
              this.appData.queryString = ctx.querystring;
            }
        }
    }
});

export default app;
