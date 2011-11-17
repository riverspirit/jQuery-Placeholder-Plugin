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
            placeholderProperty : 'placeholder', // Input property containing placeholder text
            opacity : '0.5'
        };
        
        if (options) {
            $.extend(settings, options);
        }
        
        var actualOpacity = $(this).css('opacity');
        var actualOpacityIE = $(this).css('filter');
        var opacityIE = "alpha(opacity="+(settings.opacity * 100)+")";
     
        // Detecting HTML5 placeholder support in browser
        var input = document.createElement('input');
        
        if ('placeholder' in input && settings.placeholderProperty == 'placeholder' && settings.defaultValue == '')
        {
            return this;
        }
        else
        {
            // All the working is done here!
            
            if (settings.defaultValue == '') {
                var defaultVal = this.attr(settings.placeholderProperty);
            }
            else {
                var defaultVal = settings.defaultValue;
            }
            
            $(this).val(defaultVal);
            $(this).css('opacity', settings.opacity);
            $(this).css('filter', opacityIE);
    
            this.click(function(){
                if ($(this).val() == defaultVal)
                {
                    $(this).val("");
                    $(this).css('opacity', actualOpacity);
                    $(this).css('filter', actualOpacityIE);
                }
            });
            
            this.blur(function(){
                if ($(this).val() == '')
                {
                    $(this).val(defaultVal);
                    $(this).css('opacity', settings.opacity);
                }
            });
            
            return this;
        }
    };
}) (jQuery)
