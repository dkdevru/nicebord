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
           this.$elem.on('mouseenter', $.proxy(this.toggleModal, this));
           // this.element.bind('mouseenter', $.proxy(this.toggleModal, this));
           // return this;
        },
        
        toggleModal: function() {
        	//console.log('toggle' + this.defaults.container);
        	 this.$elem.children().fadeIn();
        	//return false;
        },
        
        _build: function() {
        	//console.log('other' + this.defaults.container);
            //var structure = '<section id="' + this.defaults.container.replace('#', '') + '">sadf</section>';
            
        	 var structure = '<section>sadf</section>';
        	$(structure).appendTo(this.$elem).hide();
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