document.body.contentEditable='true';
document.designMode='on';


document.addEventListener('keydown', function(){
	document.execCommand("foreColor", false, "#DE3737");
});

document.addEventListener('mouseup', function(){
	if (window.getSelection().toString().length > 0) {
		document.execCommand("foreColor", false, "#55C91C");
	}
});


