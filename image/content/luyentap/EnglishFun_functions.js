var count = -1;
var diem = 0;
function render(){
	if(count == (questions.length -1) ){
		document.getElementById("end").innerHTML = "Bạn đã hoàn thành bài luyện tập";
		return true;
	}
	count++;
	document.getElementById("demo").innerHTML = " ";
	document.getElementById("a").checked = false;
	document.getElementById("b").checked = false;
	document.getElementById("c").checked = false;
	document.getElementById("d").checked = false;

	document.getElementById("h-typeOfQuestions").innerHTML = typeOfQuestions[count];
	if(typeOfQuestions[count] == "Chọn từ miêu tả hình ảnh"){
		document.getElementById("h-questions").innerHTML = " ";
        document.getElementById("anh").style.display = "inline-block";
		document.getElementById("anh").src = questions[count];
		document.getElementById("anh").width = "200";
		document.getElementById("anh").height = "300";

    } else if(typeOfQuestions[count] == "Điền từ tiếng anh phù hợp với nghĩa cho trước"){
        document.getElementById("h-questions").innerHTML = questions[count];
    	document.getElementById("blank").style.display = "inline-block";
        document.getElementById("submit").style.display = "inline-block";
        document.getElementById("a").style.display = "none";
    	document.getElementById("b").style.display = "none";
    	document.getElementById("c").style.display = "none";
    	document.getElementById("d").style.display = "none";
        document.getElementById("0").innerHTML = " ";
        document.getElementById("1").innerHTML = " ";
        document.getElementById("2").innerHTML = " ";
        document.getElementById("3").innerHTML = " ";
        
        document.getElementById("anh").style.display = "none";


        document.getElementById("cauthu").innerHTML = count + 1 + "/" + questions.length;

        return true;

        
    }else {
		document.getElementById("h-questions").innerHTML = questions[count];
        document.getElementById("anh").style.display = "none";

	} 
    document.getElementById("blank").style.display = "none";
    document.getElementById("submit").style.display = "none";
    
    document.getElementById("a").style.display = "inline-block";
    document.getElementById("b").style.display = "inline-block";
	document.getElementById("c").style.display = "inline-block";
    document.getElementById("d").style.display = "inline-block";
    
	document.getElementById("a").disabled = false;
	document.getElementById("b").disabled = false;
	document.getElementById("c").disabled = false;
	document.getElementById("d").disabled = false;

	document.getElementById("0").innerHTML = choices[count][0];
	document.getElementById("1").innerHTML = choices[count][1];
	document.getElementById("2").innerHTML = choices[count][2];
	document.getElementById("3").innerHTML = choices[count][3];

	document.getElementById("a").value = choices[count][0];
	document.getElementById("b").value = choices[count][1];
	document.getElementById("c").value = choices[count][2];
	document.getElementById("d").value = choices[count][3];
    
console.log("fb");
	document.getElementById("cauthu").innerHTML = count + 1 + "/" + questions.length;
	if(document.getElementById("a").checked = false) {
		alert("ht");
	}
}

function submitAnswer(){
	var c;
	useranswers = document.getElementsByName("gender");
	//
	for(var i =0;i< useranswers.length; i++){
		if(useranswers[i].checked){
			c = useranswers[i].value;
		} else {
			useranswers[i].disabled = true;
		}
	}
		//kiem tra ket qua cua cau tr loi
		if(c == answers[count]){
			console.log("helpp");
			document.getElementById("demo").innerHTML = "Đúng rồi bạn. Giỏi quá!!";
			document.getElementById("demo").style.color = "green";
			document.getElementById("demo").style.fontSize= "xx-large";

			console.log(diem);
			diem = diem + 1;
			document.getElementById("diem").innerHTML = diem;
		} 
		else{
			document.getElementById("demo").innerHTML = "Ồ..sai rồi kiểm tra lại nhé! <br> Đáp án đúng là: " + answers[count];
			document.getElementById("demo").style.color = "red";
			document.getElementById("demo").style.fontSize = 'xx-large';
		}
}

// function render2(){
// 	if(count == (questions.length -1) ){
// 		document.getElementById("end").innerHTML = "Bạn đã hoàn thành khóa học";
// 		return true;
// 	}

// 	count++;
// 	document.getElementById("demo").innerHTML = " ";

// 	document.getElementById("h-typeOfQuestions").innerHTML = typeOfQuestions[count];
// 	document.getElementById("h-questions").innerHTML = questions[count];
// 	document.getElementById("cauthu").innerHTML = count + 1 + "/" + questions.length;
	
// }

function submitAnswer2(){
	var c;
	useranswers = document.getElementById("blank");
	
		//kiem tra ket qua cua cau tr loi
		c = useranswers.value;
	
		if(c == answers[count]){
			document.getElementById("demo").innerHTML = "Bạn trả lời đúng rồi!";
			document.getElementById("demo").style.color = "green";
			document.getElementById("demo").style.fontSize= "xx-large";

			diem = diem + 1;
			document.getElementById("diem").innerHTML = diem;
		} 
		else{
			document.getElementById("demo").innerHTML = "Bạn trả lời sai rồi! <br> Đáp án đúng là: " + answers[count];
			document.getElementById("demo").style.color = "red";
			document.getElementById("demo").style.fontSize = 'xx-large';
		}
}



