'use strict';

import './detail.less';

import Xhr from '../utils/xhr';
import detailTpl from './detail.tpl.html';
import Tool from '../utils/tool';
import Modal from '../components/modal';
import {showActionSheet} from '../components/action-sheet';
import {showPhotoBrowser} from '../components/photo-browser';
import Loading from '../components/loading';

export default {
    init(page){
        var QU = page.query;
        this.getPersonDetail(QU);
        this.bindEvent();
        this.setDetailTitle(QU);
    },
    getPersonDetail(QU) {
        Loading.show();
        var params = {
            term: QU.term,
            year: QU.year,
            success: (res) => {
                console.log(res);
                Loading.hide();
                var data = res.result;
                var html = Tool.renderTpl(detailTpl, data);
                //或者这样 var html = Template7.compile(detailTpl)(res);
                $('.detail-page').append(html);
            },
            error: (err) => {
                console.log(err);
            }
        };
        Xhr.getDetailByYT(params);
    },
    
    bindEvent(){
        var events = [
            {
                element: '.detail-page',
                target: 'li.comment-list',
                event: 'click',
                handler: this.showActionSheet
            },{
                element: '.detail-page',
                target: '.markdown-text img',
                event: 'click',
                handler: this.showPhotoBrowser
            }
        ];
        Tool.bindEvents(events);
    },

    setDetailTitle(QU) {
        $('.yt-title').html(QU.year + '学年第' + QU.term + '学期');
    }
};