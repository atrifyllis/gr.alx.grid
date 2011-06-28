
// create closure
(function($){

    //###### plugin definition ######
    $.fn.experimentalGrid = function(opts){
    
    
    
        //maintain chainability by returning 'this'
        return this.each(function(){
        
            // Extend our default options with those provided.
            // Note that the first arg to extend is an empty object -
            // this is to keep from overriding our "defaults" object.
            if (opts) {
                var options = $.extend({}, $.fn.experimentalGrid.defaults, opts);
            }
            var gridElement = this;
            
            // the grid plugin will work only for an html table element.
            if (!gridElement.isTable()) {
                return false;
            }
            // get the initial data for the grid
            var pageData = getDataFromUrl(options);
            
            options.pageData = pageData;
            // set options like total records, total pages etc.
            options = setGridPagingOptions(options);
            
            //calculate dimensions like scrolling div height, cell height, scrollTop etc.
            options = calculateGridDimensions(options);
            
            var grid = {};
            grid.options = options;
            
            // create elements like outer divs etc.
            var grid = createGridElements(grid);
            
            // insert all grid rows in table
            grid = populateGrid(grid, pageData);
            
            // set scroll cursor to correct position
            grid = scrollToPosition(grid);
            
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
    
    function getDataFromUrl(options){
        var url = options.url;
        var data = options.requestData;
        $().ajax({
            url: url,
            data: data,
			dataType:json,
            success: function(response){
                return response;
            }
        });
    }
    
    //Keep the jqGrid data model  to minimize changes in a possible transition.
    function setGridPagingOptions(options){
    	var pageData = options.pageData;
    	options.totalRecords = pageData.records;
    	options.totalPages = pageData.total;
    	options.page = pageData.page;
        return options;
    }
    
    function calculateGridDimensions(options){
    	options.outerDivHeight = options.totalRecords * options.PageSize;
    	//TODO: implement rest of dimensions
        return options;
    }
    
    function createGridElements(options){
        //TODO: implement
        var grid;
        return grid;
    }
    
	function populateGrid(grid, pageData){
		//TODO: implement
		return grid;
	}
	
	function scrollToPosition(grid){
		//TODO: implement
		return grid;
	}
    
	
	
    //###### plugin defaults - added as a property on our plugin function ######
    $.fn.experimentalGrid.defaults = {
        pageSize: 100,
        totalRecords: 0,
        totalPages:0,
        page:0,
        pageData:null,
        pageSize:0
        outerDivHeight:0
    };
    
    
    
})(jQuery);
