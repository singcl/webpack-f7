'use strict';

export default {
    bindEvents(events){
        for (let i = 0, l = events.length; i < l; i++) {
            if (!events[i].element) {
                $(events[i].target).on(events[i].event, events[i].handler)
            } else {
                $(events[i].element).on(events[i].event, events[i].target, events[i].handler)
            }
        }
    },
    renderTpl(tpl, data){
        return Template7.compile(tpl)(data);
    },
    publishTime(date){
        var _date = new Date(date),
			_m = _date.getMonth() + 1,
			_d = _date.getDate(),
			_h = _date.getHours(),
			_s = _date.getMinutes();
		return _m + '月' + _d + '日 ' + _h + ':' + _s;
    },
    setQuery() {
        var term, year, query;
        var value1 = $('#picker-device').attr('value');
        var value2 = $('#picker-device-2').attr('value');
        if (value1) {
            switch (value1) {
                case '2015-2016':
                    year = 2016;
                    break;
                case '2016-2017':
                    year = 2017;
                    break;
                default:
                    break;             
            }
        }
        if (value2) {
            switch (value2) {
                case '第一学期':
                    term = 1;
                    break;
                case '第二学期':
                    term = 2;
                    break;
                default:
                    break;        
            }
        }
        if (value1 && value2) {
            query = 'yera=&'+ year + 'term=' + term;
        }
        $('#go-to-detail').attr('href','page/detail.html?' + query);
    }
};