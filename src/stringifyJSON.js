// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
  var arrFunction = function(obj){
  	var result = obj.map(stringifyJSON).join(',');
  	return "[" + result + "]";
  };

  var objFunction = function(obj) {

	var result = [];
	for (var key in obj) {
		if (typeof obj[key] === 'function'){
			continue;
		}
		else if (obj[key] === undefined){
			continue;
		}
		  result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
	}
  	return "{" + result.join(',') + "}";
 };

var stringifyJSON = function (obj) {
  if (typeof obj === 'number') {
  	return obj + "";
 }
  else if (obj === null) {
  	return 'null';
  }
  else if (typeof obj === 'boolean') {
  	return obj + "";
  }
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  else if (obj instanceof Array) {
  	return arrFunction(obj);
  }
  else if (typeof obj === 'object') {
  	return objFunction(obj);
  }



};
