'use strict';

import 'framework7';
import 'framework7.material.css';
import 'framework7.material.color.css';
import '../assets/app.less';

import mainModule from './main/main';
import Router from './router';
import Loading from './components/loading';

var app = {
    init(){
        var that = this;
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            // Enable Material theme
            material: true,
        });
        myApp.addView('.view-main', {
            domCache: true
        });
    
        Router.init();
    },
    
    //如果需要调用cordova 需要在deviceReady后 调用 mainModule.init()
    deviceReady() {
        document.addEventListener('deviceready', function() {
            Loading.show();
            app.getUserInfo();
        }, false);
    },
    
    getUserInfo() {
        cordova.exec(function(result) {
            Loading.hide();
            var data = {
                user_id: result.user_id,
                name: result.name,
                avatar: result.avatar
            }
            console.log('获取数据成功：' + result);
            mainModule.init(data);
        }, function(error) { 
            alert('失败');
        }, 'WorkPlus_Contact', 'getUserInfo', []);
    }
};

//初始化基本设置
app.init();
//设备就绪后开始初始化主页
app.deviceReady();
/*
var data = {
   'user_id': 'w332q44442ewrdsvvgdrgrgdv32323',
    'name': 'xxxxx',
    'avatar': null
}
mainModule.init(data);
*/
