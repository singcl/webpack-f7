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
    setQuery(data) {
        var value1 = $('#picker-device').val();
        var value2 = $('#picker-device-2').val();
        if (value1 && value2) {
            var year = {'2015-2016': '2016', '2016-2017': '2017'}[value1];
            var term = {'第一学期': '1', '第二学期': '2'}[value2];
            var query = 'user_id=' + data.user_id + '&year='+ year + '&term=' + term;
            $('#go-to-detail').attr('href','page/detail.html?' + query);
        } 
    },

    transformData(params) {
        $.each(params, function(index, value) {
            $.each(value, function(key, val) {
                if (val = "") {val == "-"};
            })
        })
        return params;
    }
};