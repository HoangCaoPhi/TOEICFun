function nextTopic() {
	var index = document.getElementById("list-topic").selectedIndex;
	var tag = document.getElementById("list-topic").options;
	if (index + 1 <= 23) {
		window.location = tag[index+1].value+".html";
	}
}
function previousTopic() {
	var index = document.getElementById("list-topic").selectedIndex;
	var tag = document.getElementById("list-topic").options;
	if (index - 1 >= 0) {
		window.location = tag[index-1].value +".html";
	}
}

function handleSelect(elm){
	topicNow = elm.value;
	window.location = elm.value+".html";
}
