//randomiser v2
function loadJSON(callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");

	xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return 
				// a value but simply returns undefined in asynchronous mode
				callback(xobj.responseText);
			} else {
				callback("[{\"Nothing\"}]");
			}
		};

	xobj.open('GET', '../../data/data.json', true);
	// Maybe you require use of an unknown origin.
	/*xobj.setRequestHeader("Access-Control-Allow-Origin","*");*/
	xobj.send(null);  
};


function load(){
	loadJSON(function(response){
		
	});
}