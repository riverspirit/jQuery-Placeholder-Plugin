/**
 * jQuery Placeholder Plugin
 * 
 * Copyright (c) 2011 Saurabh R Nair <saurabh@rebugged.com>
 * Released under GNU GPL V3. See license.txt.
 * 
 * Please keep the above copyright notice intact.
 * 
 * Plugin URL: http://rebugged.com/placeholder/
 * 
 * See http://rebugged.com/placeholder/ or placeholder-demo.html for usage instructions
 *                         
 */
(function($){
    $.fn.placeholder = function(options){
        
        var settings = {
            defaultValue    : '', // If set, will override placeholderAttribute
            placeholderProperty : 'placeholder' // Input property containing placeholder text
        };
        
        if (options)
        {
            $.extend(settings, options);
        }
        
        if (settings.defaultValue == '')
        {
            var defaultVal = this.attr(settings.placeholderProperty);
        }
        else
        {
            var defaultVal = settings.defaultValue;
        }
        
        $(this).val(defaultVal);

        this.click(function(){
            if ($(this).val() == defaultVal)
            {
                $(this).val("");
            }
        });
        
        this.blur(function(){
            if ($(this).val() == '')
            {
                $(this).val(defaultVal);
            }
        });
    };
}) (jQuery)
