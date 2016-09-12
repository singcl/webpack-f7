import './main.less';

import Xhr from '../utils/xhr';
import mainHtml from './main.tpl.html';
import Tool from '../utils/tool';
import Constant from '../utils/constant';
import Picker from '../components/picker';

export default {
    init(data) {
        var that = this;
        //下面的初始化函数必须按一定顺序。即必须先有dom文档
        this.renderMainTpl(data);
        this.setAvatar(Constant.AVATAR);
        Tool.setQuery(data);
        this.showPicker(data);
        this.exitCurrent();
    },

    renderMainTpl(data) {
        var html = Tool.renderTpl(mainHtml, data);
        $('.main-page .page-content').html(html);
    },

    showPicker(data) {
        var defaults = [
            {
                input: '#picker-device',
                cols: [
                    {
                        textAlign: 'center',
                        values: ['2015-2016', '2016-2017']
                    }
                ]
            },
            {
                input: '#picker-device-2',
                cols: [
                    {
                        textAlign: 'center',
                        values: ['第一学期', '第二学期']
                    }
                ]
            }
        ]
        Picker.showPicker(defaults, data);
    },

    setAvatar(pic){
        var _avatarElm = $('.avatar img');
        _avatarElm.attr('src', pic);
    },

    exitCurrent() {
        $('.main-page .exit').on('click', function () {
            document.addEventListener('deviceready', function() {
                cordova.exec(function(result) {
                    console.log('退出轻应用成');
                }, function(error) { 
                    console.log('退出轻应用失败');
               }, 'WorkPlus_WebView', 'exit', []);
            }, false)
        })
    }
};