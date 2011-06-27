
// create closure
(function($){

    //###### plugin definition ######
    $.fn.experimentalGrid = function(options){
    
    
    
        //maintain chainability by returning 'this'
        return this.each(function(){
        
        
            // Extend our default options with those provided.
            // Note that the first arg to extend is an empty object -
            // this is to keep from overriding our "defaults" object.
            if (options) {
                var opts = $.extend({}, $.fn.experimentalGrid.defaults, options);
            }
            
        });
        
        
    };
    
    
    
    //###### public functions ######
    $.fn.experimentalGrid.format = function(txt){
        return '<strong>' + txt + '</strong>';
    };
    
    
    
    //###### private functions ######
    function debug($obj){
        if (window.console && window.console.log) 
            window.console.log('hilight selection count: ' + $obj.size());
    };
    
    
    
    
    //###### plugin defaults - added as a property on our plugin function ######
    $.fn.experimentalGrid.defaults = {
		pageSize: 100
	};
    
    
    
})(jQuery);
