// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node, newarray) {
  newarray = newarray || [];
  node = node || document.body;

  // for (var i = 0; i < node.children.length; i++)
  if (node.classList.contains(className)) {
  	newarray.push(node);
  };
  if (node.children !== undefined) {
	  for (var i = 0; i < node.children.length; i++) {
	  	getElementsByClassName(className, node.children[i],newarray);
	  };
  };
  return newarray;
};
