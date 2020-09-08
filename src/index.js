//TODO: Write content
$( document ).ready(function() { // This calls when the whole html has loaded. This ensures there isn't any problem trying to access unloaded elements
	$.get( "/example", function( data ) { // This is the frontend calling our example get request. We can use this in the future to get data from the backend dynamically
		console.log(data);
	});
});