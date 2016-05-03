import Vue from 'vue';
import page from 'page';
import appHeader from './components/appHeader';

//动态载入所需要的组件
let apps = ["home","app1"],components={};
apps.forEach(function(app){
  components[app] = function (resolve) {
    require(['./apps/'+app], resolve)
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
        appHeader : appHeader
    },components),

    ready  : function() {
      page.start({ dispatch :true });
    },

    created : function(){
        var self = this,
          baseUrl = '/';
        /*page.base(baseUrl);*/
        page('/home', function () {
            self.view = 'home';
        });
      page('/app1', function () {
        self.view = 'app1';
      });
        /*page('/:app/:any*', this.router);*/


    },

    methods : {
        router : function (ctx) {
          console.log("xxxxxxxxxxxxaax");
          var app = ctx.params.app;
          var any = ctx.params.any;
         /* if(app) {
              if(app !== this.view) {
                console.log(app);
                /!*require(['apps/' + app], function(conf) {
                  console.log(conf);
                  Vue.component(app, conf.default);
                  this.view = app;
                  this.appData.uri = any;
                  this.appData.queryString = ctx.querystring;
                  this.$broadcast("setAppView",any);
                }.bind(this));*!/
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
            }*/
        }
    }
});

export default app;
