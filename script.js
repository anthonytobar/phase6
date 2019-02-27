var a = document.getElementById("change1");	
var b = document.getElementById("change2");
var c = document.getElementById("change3");

function nextImage(el){
	if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed.png";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/Sick.png";
	} else {
		//do nothing
	}
}

function nextImage1(el){
	if (el.src.match("image/dazed3.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else {
		//do nothing
	}
}

function nextImage2(el){
	if (el.src.match("image/Sick.png")){
		el.src = "image/dazed3.jpg";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/dazed2.jpg";
	} else if (el.src.match("image/dazed2.jpg")){
		el.src = "image/Sick.png";
	} else if (el.src.match("image/Sick.png")){
		el.src = "image/dazed.png";
	} else if (el.src.match("image/dazed3.jpg")){
		el.src = "image/Sick.png";
	} else {
		//do nothing
	}
}