/*
 *  Project: jQuery plugin
 *  Author: Dmitriy Kozlov
 *  License: MIT License
 */

;(function ($, window, document, undefined) {

    var pluginName = "nicebord",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {
    
        this.element = element;
        this.$elem = $(element);
        
        this.options = {
            color: '#999',
            orientation: 'ckw',
            size: 1,
            pos: 'top,right,bottom,left',
            speed : 500
        };
        
        this.init(options);
    };

    Plugin.prototype = {
    		
    		init: function (options) {
        	
            $.extend(this.options, options);
            
            this.element.css({
                'position': 'relative'
            });
            
            
           this._build();
           this.$elem.on('mouseenter', $.proxy(this.fadein_bord, this));
           this.$elem.on('mouseleave', $.proxy(this.fadeout_bord, this));
        },
        
        fadein_bord: function(options) {
        	
        	
        	var pos = this.options.pos.split(",");
        	var speed_in = this.options.speed;
        	
        	this.$elem.children().each(function(){
        		if ($(this).attr('rel') == 'bord')
    			{
        			
        			switch ($(this).attr('class')) 
        			{
	        		    case 'bord_top':
	        		    	
	        		    	var result_top = $.grep(pos, function(e){ return e == 'top'; });
	        		    	if (result_top.length == 1)
	        		    	{
	        		    		$(this).stop().animate({opacity:'1',width:'100%'},speed_in);
	        		    	}
	        		        break;
	        		    case 'bord_right':
	        		    	var result_right = $.grep(pos, function(e){ return e == 'right'; });
	        		    	if (result_right.length == 1)
	        		    	{
	        		    		$(this).stop().animate({opacity:'1',height:'100%'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		    case 'bord_bottom':
	        		    	var result_bottom = $.grep(pos, function(e){ return e == 'bottom'; });
	        		    	if (result_bottom.length == 1)
	        		    	{
	        		    		$(this).stop().animate({opacity:'1',width:'100%'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		    case 'bord_left':
	        		    	var result_left = $.grep(pos, function(e){ return e == 'left'; });
	        		    	if (result_left.length == 1)
	        		    	{
	        		    		$(this).stop().animate({opacity:'1',height:'100%'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		}
    			}
        	});
        	
        },
        
        fadeout_bord: function(options) {
        	
        	var speed_in = this.options.speed;
        	
        	this.$elem.children().each(function(){
        		if ($(this).attr('rel') == 'bord')
    			{
        			switch ($(this).attr('class')) 
        			{
        			case 'bord_right':
        		    	$(this).stop().animate({opacity:'0',height:'0%'},speed_in);
        		    	break;
	        		case 'bord_top':
	        		    	$(this).stop().animate({opacity:'0',width:'0%'},speed_in);
	        		        break;
	        		        
	        		 case 'bord_bottom':
	        		    	$(this).stop().animate({opacity:'0',width:'0%'},speed_in);
	        		        break;
	        		 case 'bord_left':
	        		    	$(this).stop().animate({opacity:'0',height:'0%'},speed_in);
	        		        break;
	        		    
	        		}
    			}
        	});
        	
        	 
        },
        
        _build: function() {
        	
        	switch (this.options.orientation) 
			{
			
			case 'ckw':
        	var bord_top = '<div class="bord_top" rel="bord" style="height:' + this.options.size + 'px;left:0px;background-color:' + this.options.color + '"></div><div class="bord_right" rel="bord" style="width:' + this.options.size + 'px;top:0px;background-color:' + this.options.color + '"></div><div class="bord_bottom" rel="bord" style="height:' + this.options.size + 'px;right:0px;background-color:' + this.options.color + '"></div><div class="bord_left" rel="bord" style="width:' + this.options.size + 'px;bottom:0px;background-color:' + this.options.color + '"></div>';
        	break;
        	
			case 'ackw':
	        	var bord_top = '<div class="bord_top" rel="bord" style="height:' + this.options.size + 'px;right:0px;background-color:' + this.options.color + '"></div><div class="bord_right" rel="bord" style="width:' + this.options.size + 'px;bottom:0px;background-color:' + this.options.color + '"></div><div class="bord_bottom" rel="bord" style="height:' + this.options.size + 'px;left:0px;background-color:' + this.options.color + '"></div><div class="bord_left" rel="bord" style="width:' + this.options.size + 'px;top:0px;background-color:' + this.options.color + '"></div>';
	        	break;
        	
			}
        	$(bord_top).appendTo(this.$elem);
        },
        
    };

    $.fn[pluginName] = function (options) {

    	 return this.each(function()
    			    {
    			        var elem = $(this);

    			        var plugin = elem.data(dataKey);

    			        if (plugin instanceof Plugin) {
    			            // if have options arguments, call plugin.init() again
    			            if (typeof options !== 'undefined') {
    			                plugin.init(options);
    			            }
    			        } else {
    			            plugin = new Plugin(elem, options);
    			            elem.data(dataKey, plugin);
    			        }
    			        
    			    });
    };

}(jQuery, window, document));