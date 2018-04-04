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
            size: 3,
            pos: 'top,right,bottom,left',
            speed : 200,
            direction: false
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
        	var size = this.options.size;
        	var direction = this.options.direction;
        	
        	this.$elem.children().each(function(){
        		if ($(this).attr('rel') == 'bord')
    			{
        			
        			switch ($(this).attr('class')) 
        			{
	        		    case 'bord_top':
	        		    	
	        		    	var result_top = $.grep(pos, function(e){ return e == 'top'; });
	        		    	
	        		    	if (result_top.length == 1 && direction === false){
	        		    		$(this).stop().animate({opacity:'1',width:'100%'},speed_in);
	        		    	}else if(result_top.length == 1 && direction === true){
	        		    		$(this).stop().animate({opacity:'1',height:size+'px'},speed_in);
	        		    	}
	        		        break;
	        		    case 'bord_right':
	        		    	var result_right = $.grep(pos, function(e){ return e == 'right'; });
	        		    	if (result_right.length == 1 && direction === false){
	        		    		$(this).stop().animate({opacity:'1',height:'100%'},speed_in);
	        		    	}else if(result_right.length == 1 && direction === true){
	        		    		$(this).stop().animate({opacity:'1',width:size+'px'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		    case 'bord_bottom':
	        		    	var result_bottom = $.grep(pos, function(e){ return e == 'bottom'; });
	        		    	if (result_bottom.length == 1 && direction === false){
	        		    		$(this).stop().animate({opacity:'1',width:'100%'},speed_in);
	        		    	}else if(result_bottom.length == 1 && direction === true){
	        		    		$(this).stop().animate({opacity:'1',height:size+'px'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		    case 'bord_left':
	        		    	var result_left = $.grep(pos, function(e){ return e == 'left'; });
	        		    	if (result_left.length == 1 && direction === false){
	        		    		$(this).stop().animate({opacity:'1',height:'100%'},speed_in);
	        		    	}else if(result_left.length == 1 && direction === true){
	        		    		$(this).stop().animate({opacity:'1',width:size+'px'},speed_in);
	        		    	}
	        		    	break;
	        		        
	        		}
    			}
        	});
        	
        },
        
        fadeout_bord: function(options) {
        	
        	var speed_in = this.options.speed;
        	var direction = this.options.direction;
        	
        	this.$elem.children().each(function(){
        		if ($(this).attr('rel') == 'bord')
    			{
        			switch ($(this).attr('class')) 
        			{
        			case 'bord_right':
        				if (direction === false){
        				$(this).stop().animate({opacity:'0',height:'0%'},speed_in);
        				}else if(direction === true){
        		    		$(this).stop().animate({opacity:'0',width:'0px'},speed_in);
        		    	}
        		    	break;
	        		case 'bord_top':
	        			if (direction === false){
        		    	$(this).stop().animate({opacity:'0',width:'0%'},speed_in);
        				}else if(direction === true){
        					$(this).stop().animate({opacity:'0',height:'0px'},speed_in);
        				}
	        		    break;
	        		        
	        		 case 'bord_bottom':
	        			 if (direction === false){
	         		    	$(this).stop().animate({opacity:'0',width:'0%'},speed_in);
	         				}else if(direction === true){
	         					$(this).stop().animate({opacity:'0',height:'0px'},speed_in);
	         				}
	        		        break;
	        		 case 'bord_left':
	        			 if (direction === false){
	         				$(this).stop().animate({opacity:'0',height:'0%'},speed_in);
	         				}else if(direction === true){
	         		    		$(this).stop().animate({opacity:'0',width:'0px'},speed_in);
	         		    	}
	        		        break;
	        		    
	        		}
    			}
        	});
        	
        	 
        },
        
        _build: function() {
        	
        	switch (this.options.orientation) 
			{
			
			case 'ckw':
				if (this.options.direction === false){
        	var bord_top = '<div class="bord_top" rel="bord" style="height:' + this.options.size + 'px;left:0px;background-color:' + this.options.color + '"></div><div class="bord_right" rel="bord" style="width:' + this.options.size + 'px;top:0px;background-color:' + this.options.color + '"></div><div class="bord_bottom" rel="bord" style="height:' + this.options.size + 'px;right:0px;background-color:' + this.options.color + '"></div><div class="bord_left" rel="bord" style="width:' + this.options.size + 'px;bottom:0px;background-color:' + this.options.color + '"></div>';
				}
				else if( this.options.direction === true ){
					var bord_top = '<div class="bord_top" rel="bord" style="width:100%;height:0px;left:0px;background-color:' + this.options.color + '"></div><div class="bord_right" rel="bord" style="width:0px;height:100%;top:0px;background-color:' + this.options.color + '"></div><div class="bord_bottom" rel="bord" style="height:0px;width:100%;right:0px;background-color:' + this.options.color + '"></div><div class="bord_left" rel="bord" style="width:0px;height:100%;bottom:0px;background-color:' + this.options.color + '"></div>';
					}
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