$(function(){
	var qstnTitle= $(".question-title");
	var qstnCounterBox=$("#question-counter");
	var answerBox=$(".answer-box");

	//===============================
	//========Настройки QUIZ=========
	//===============================
	//Начальный размер скидки
	var startDiscount=350;
	//Количество всех вопросов
	//
	//===============================


	question=[
		//Вопрос 1
		{
  		title: "1. Заголовок вопроса",
  		answers: [
				"Ответ №1 вопроса 1",
			  "Ответ №2 вопроса 1",
				"Ответ №3 вопроса 1",
				"Ответ №4 вопроса 1"],
  		img: [
    		"img/typeProduct/question-1/1.jpg",
    		"img/typeProduct/question-1/2.jpg",
    		"img/typeProduct/question-1/3.jpg",
    		"img/typeProduct/question-1/4.jpg"
  		],
  		type: "grid"
		},
		// //Вопрос 2
		// {
  	// 	title: "2. Заголовок вопроса",
  	// 	answers: [
		// 		"Ответ №1 вопроса 2",
		// 	  "Ответ №2 вопроса 2",
		// 		"Ответ №3 вопроса 2",
		// 		"Ответ №4 вопроса 2"],
  	// 	img: [
    // 		"img/typeProduct/question-2/1.jpg",
    // 		"img/typeProduct/question-2/2.jpg",
    // 		"img/typeProduct/question-2/3.jpg",
    // 		"img/typeProduct/question-2/4.jpg"
  	// 	],
  	// 	type: "grid"
		// },
		// //Вопрос 3
		// {
  	// 	title: "3. Заголовок вопроса",
  	// 	answers: [
		// 		"Ответ №1 вопроса 3",
		// 	  "Ответ №2 вопроса 3",
		// 		"Ответ №3 вопроса 3",
		// 		"Ответ №4 вопроса 3"],
  	// 	img: [
    // 		"img/typeProduct/question-3/1.jpg",
    // 		"img/typeProduct/question-3/2.jpg",
    // 		"img/typeProduct/question-3/3.jpg",
    // 		"img/typeProduct/question-3/4.jpg"
  	// 	],
  	// 	type: "list"
		// },
		// //Вопрос 4
		// {
  	// 	title: "4. Заголовок вопроса",
  	// 	answers: [
		// 		"Ответ №1 вопроса 1",
		// 	  "Ответ №2 вопроса 1",
		// 		"Ответ №3 вопроса 1",
		// 		"Ответ №4 вопроса 1"],
  	// 	img: [
    // 		"img/typeProduct/question-4/1.jpg",
    // 		"img/typeProduct/question-4/2.jpg",
    // 		"img/typeProduct/question-4/3.jpg",
    // 		"img/typeProduct/question-4/4.jpg"
  	// 	],
  	// 	type: "list"
		// }
	];

	//Generated Values for Quiz
	$.each(question, function(key, value){
		console.log(value.title);
		for (var i = 0; i < value.answers.length; i++) {
			var sizeCol=0;
			switch (counter()) {
				case 1:
					sizeCol=3;
				break;
				case 2:
					sizeCol=6;
				break;
				case 3:
					sizeCol=4;
				break;
				case 4:
					sizeCol=4;
				break;
				case 5:
					sizeCol=2;
				break;
				case 6:
					sizeCol=2;
				break;
			}

			qstnTitle.text(value.title);
			var bodyAnswer="<div class='col-md-"+sizeCol+" text-center'>"+
			value.answers[i]+
			"<br><img class='img-responsive' src="+value.img[i]+"><br>"+
			"<input name='answer' value='question"+i+"' type='radio'>"+
			"<div class='row'><div class='col-md-12'>"+
			"<div id='place-btn'></div>"+
			"</div></div></div>";
			answerBox.append(bodyAnswer);
		}
	});

	//Counter Questions
	function counter(){
		var count=0;
		for(var key in question){
			count++;
		}
		return count;
	}
	qstnCounterBox.text(counter());

	//Handler event click on ipnut
	$("input").on("click", function(){
		var bodyBtn="<button id='next' class='btn btn-success'>Следующий вопрос</button>";
		$("#place-btn").html(bodyBtn);
	});

});
