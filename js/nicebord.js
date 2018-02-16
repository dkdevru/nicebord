/*
 *  Project: jQuery plugin
 *  Author: Dmitriy Kozlov
 *  License: Unlicense
 */

;(function ($, window, document, undefined) {

    var pluginName = "nicebord",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {
    
        this.element = element;
        
        /*for global events*/
        this.$elem = $(element);
        
        this.options = {
            background: '#dedede',
            color: '#999'
        };
        
        this.init(options);
    };

    Plugin.prototype = {
        
    		/*defaults: {
                container: '#pageModal'
            },*/
    		
    		init: function (options) {
        	
        	
            $.extend(this.options,/*this.defaults,*/ options);
            
            //console.log(this.defaults.container);
            
            this.element.css({
                'color': this.options.color,
                'background-color': this.options.background,
                'position': 'relative'
            });
            
            
            this._build();
            /*if(!$(this.defaults.container).length) {
                this._build();
            }*/
            
           //this.$elem.on('mouseenter', this.toggleModal);
           this.$elem.on('mouseenter', $.proxy(this.fadein_bord, this));
           this.$elem.on('mouseleave', $.proxy(this.fadeout_bord, this));
           // this.element.bind('mouseenter', $.proxy(this.toggleModal, this));
           // return this;
        },
        
        fadein_bord: function() {
        	 //this.$elem.children().stop().animate({opacity:'1'},500);
        	
        	console.log(this.$elem.children());
        	
        	this.$elem.children().each(function(e,f){
        		if ($(this).attr('rel') == 'bord')
    			{
        			switch ($(this).attr('class')) 
        			{
	        		    case 'bord_top':
	        		        //day = "Sunday";
	        		    	$(this).stop().animate({opacity:'1',width:'100%'},500);
	        		        break;
	        		    case 'bord_right':
	        		    	$(this).stop().animate({opacity:'1',height:'100%'},500);
	        		    	console.log('right');
	        		        break;
	        		        
	        		    case 'bord_bottom':
	        		    	$(this).stop().animate({opacity:'1',width:'100%'},500);
	        		        break;
	        		        
	        		    case 'bord_left':
	        		    	$(this).stop().animate({opacity:'1',height:'100%'},500);
	        		        break;
	        		        
	        		}
        			//$(this).stop().animate({opacity:'1'},500);
    			}
        	});
        	
        	//return false;
        },
        
        fadeout_bord: function() {
        	//console.log('toggle' + this.defaults.container);
        	// this.$elem.children().stop().animate({opacity:'0'},200);
        	//return false;
        	
        	this.$elem.children().each(function(e,f){
        		if ($(this).attr('rel') == 'bord')
    			{
        			switch ($(this).attr('class')) 
        			{
        			case 'bord_right':
        		    	$(this).stop().animate({opacity:'0',height:'0%'},500);
        		    	break;
	        		case 'bord_top':
	        		    	$(this).stop().animate({opacity:'0',width:'0%'},500);
	        		        break;
	        		        
	        		 case 'bord_bottom':
	        		    	$(this).stop().animate({opacity:'0',width:'0%'},500);
	        		        break;
	        		 case 'bord_left':
	        		    	$(this).stop().animate({opacity:'0',height:'0%'},500);
	        		        break;
	        		    
	        		}
        			//$(this).stop().animate({opacity:'1'},500);
    			}
        	});
        	
        	 
        },
        
        _build: function() {
        	var bord_top = '<div class="bord_top" rel="bord"></div><div class="bord_right" rel="bord"></div><div class="bord_bottom" rel="bord"></div><div class="bord_left" rel="bord"></div>';
        	//$(bord_top).appendTo(this.$elem).hide();
        	$(bord_top).appendTo(this.$elem);
        },
        /*,
        
        color: function (color) {
            this.options.color = color;
            this.element.css('color', color);
        },
        
        background: function (color) {
            this.options.background = color;
            this.element.css('background-color', color);
        }*/
    };

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
        
        return plugin;
    };

}(jQuery, window, document));