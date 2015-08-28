;(function($){
	'use strict';

	var Request =  {};
	/**
	 * @type {{get: Function, post: Function, put: Function, delete: Function}}
	 */
	Request.http = {
	        _get: function(options){
	            options.type = "GET";
	            return sendServer(options);
	        },
	        _post: function(options){
	            options.type = "POST";
	            return sendServer(options);
	        },
	        _put: function(options){
	            options.type = "PUT";
	            return sendServer(options);
	        },
	        _delete: function(options){
	            options.type = "DELETE";
	            return sendServer(options);
	        }
	    };

	var sendServer = function(options){
	    var opts = $.extend({
	        type: "GET",
	        dataType: "json"
	    },options);

	    var ajaxObj = $.ajax(opts)
	    return ajaxObj;
	};
})(jQuery)