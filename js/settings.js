$(function(){
	var qstnCounter= $(".question-counter").text();
	var qstnTitle= $(".question-title").text();

	//Настройки QUIZ
	question=[

		//Вопрос 1
		{
			title: "1. Заголовок вопроса",
			answers: {
				answr:  {body: "Ответ №1", img: "img/typeProduct/question-1/1.jpg"},
				answr2: {body: "Ответ №2", img: "img/typeProduct/question-1/2.jpg"},
				answr3: {body: "Ответ №3", img: "img/typeProduct/question-1/3.jpg"},
				answr4: {body: "Ответ №4", img: "img/typeProduct/question-1/4.jpg"}
			}
		},
		//Вопрос 2
		{
			title: "2. Заголовок вопроса",
			answers: {
				answr:  {body: "Ответ №1", img: "img/typeProduct/question-2/1.jpg"},
				answr2: {body: "Ответ №2", img: "img/typeProduct/question-2/2.jpg"},
				answr3: {body: "Ответ №3", img: "img/typeProduct/question-2/3.jpg"},
				answr4: {body: "Ответ №4", img: "img/typeProduct/question-2/4.jpg"}
			}
		},
		//Вопрос 3
		{
			title: "3. Заголовок вопроса",
			answers: {
				answr:  {body: "Ответ №1", img: "img/typeProduct/question-3/1.jpg"},
				answr2: {body: "Ответ №2", img: "img/typeProduct/question-3/2.jpg"},
				answr3: {body: "Ответ №3", img: "img/typeProduct/question-3/3.jpg"},
				answr4: {body: "Ответ №4", img: "img/typeProduct/question-3/4.jpg"}
			}
		},
		//Вопрос 4
		{
			title: "4. Заголовок вопроса",
			answers: {
				answr:  {body: "Ответ №1", img: "img/typeProduct/question-4/1.jpg"},
				answr2: {body: "Ответ №2", img: "img/typeProduct/question-4/2.jpg"},
				answr3: {body: "Ответ №3", img: "img/typeProduct/question-4/3.jpg"},
				answr4: {body: "Ответ №4", img: "img/typeProduct/question-4/4.jpg"}
			}
		}
	];
});
