'use strict';

import Tool from '../utils/tool';
export default {
    showPicker (params) {
        var pickerArr = [];
        $.each(params, function(index, value) {
            var myPicker = myApp.picker({
                input: params[index].input,
                cols: params[index].cols,
                onClose: function () {
                    Tool.setQuery();
                }
            });
            pickerArr.push(myPicker);
        })
        return pickerArr;
    }
}    
