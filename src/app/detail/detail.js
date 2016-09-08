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
        var _TM = page.query.terms;
        this.getPersonDetail(_TM);
        this.bindEvent();
    },
    getPersonDetail(terms){
        Loading.show();
        var params = {
            terms: terms,
            success: (res) => {
                console.log(res);
                Loading.hide();
                var html = Tool.renderTpl(detailTpl, res);
                //或者这样 var html = Template7.compile(detailTpl)(res);
                $('.page[data-page="detail"]').append(html);
            },
            error: (err) => {
                console.log(err);
            }
        };
        Xhr.getDetailByTerms(params);
    },
    showActionSheet(){
        var btns = [{
                text:'回复',
                onClick(){
                    Modal.alert('你点击了回复');
                }
            }];
        showActionSheet(btns);
    },
    showPhotoBrowser(){
        var _img = $(this); //注意这个this
        showPhotoBrowser(new Array(1).fill(_img.attr('src')));
        
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
    }
};