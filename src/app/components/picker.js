'use strict';

import Tool from '../utils/tool';
export default {
    showPicker (params, data) {
        var pickerArr = [];
        $.each(params, function(index, value) {
            var myPicker = myApp.picker({
                input: params[index].input,
                cols: params[index].cols,
                toolbarCloseText:'完成',
                onClose: function () {
                    Tool.setQuery(data);
                }
            });
            pickerArr.push(myPicker);
        })
        return pickerArr;
    }
}    
