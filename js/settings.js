$(function() {
  var qstnTitle = $(".question-title");

  var answerBox = $(".answer-box");
  var progressBar = $(".progress-bar");
  var discountBox = $("#discount");
  var daysBox = $("#days");
  var suffixBox = $("#days-suffix");
  var discriptBox = $(".discription");
  var listGroupBox = $(".list-group");
	var templateTitleBox=$(".template-title");
	var qstnStartBox=$("#question-start");
	var qstnEndBox = $("#question-end");
	var btnBox=$(".btn-box");
  //===============================
  //========Настройки QUIZ=========
  //===============================
  //Начальный размер скидки
	var title="Благодарим за ваши ответы!";
  var days = 31;
  var discript = "на любую вашу сделку";
  //Количество всех вопросов
  //
  //===============================

	ChangeValuesTemplate();
  function changeSuffix(value) {
    if (value == 1) {
      return "день";
    } else if (value == 2 || value == 3 || value == 22 || value == 23 || value == 24) {
      return "дня";
    } else if (value > 31 || value == 31) {
      daysBox.text(1);
      return "месяца";
    } else {
      return "дней";
    }
  }
	function ChangeValuesTemplate(){
		templateTitleBox.text(title);
	  discriptBox.text(discript);
		daysBox.text(days);
	  suffixBox.text(changeSuffix(days));
	}

  var endTemplate = {
    title: "Благодарим за ответы!",
    days: 15,
    subtitle: "Оставьте свой e-mail и получите:",
    advantages: [{
        title: "20 биткоинов на ваш счёт",
        icon: "fa fa-btc"
      },
      {
        title: "Крутой грузовик",
        icon: "fa fa-truck"
      },
      {
        title: "Бомбическое настроение",
        icon: "fa fa-bomb"
      }
    ]
  };
  question = [
    //Вопрос 1
    {
      title: "1. Заголовок вопроса",
      answers: [
        "Ответ №1 вопроса 1",
        "Ответ №2 вопроса 1",
        "Ответ №3 вопроса 1",
        "Ответ №4 вопроса 1"
      ],
      img: [
        "img/typeProduct/question-1/1.jpg",
        "img/typeProduct/question-1/2.jpg",
        "img/typeProduct/question-1/3.jpg",
        "img/typeProduct/question-1/4.jpg"
      ],
      type: "grid"
    },
    //Вопрос 2
    {
      title: "2. Заголовок вопроса",
      answers: [
        "Ответ №1 вопроса 2",
        "Ответ №2 вопроса 2",
        "Ответ №3 вопроса 2",
        "Ответ №4 вопроса 2"
      ],
      img: [
        "img/typeProduct/question-2/1.jpg",
        "img/typeProduct/question-2/2.jpg",
        "img/typeProduct/question-2/3.jpg",
        "img/typeProduct/question-2/4.jpg"
      ],
      type: "grid"
    },
    //Вопрос 3
    {
      title: "3. Заголовок вопроса",
      answers: [
        "Ответ №1 вопроса 3",
        "Ответ №2 вопроса 3",
        "Ответ №3 вопроса 3",
        "Ответ №4 вопроса 3"
      ],
      img: [
        "img/typeProduct/question-3/1.jpg",
        "img/typeProduct/question-3/2.jpg",
        "img/typeProduct/question-3/3.jpg",
        "img/typeProduct/question-3/4.jpg"
      ],
      type: "list"
    },
    //Вопрос 4
    {
      title: "4. Заголовок вопроса",
      answers: [
        "Ответ №1 вопроса 4",
        "Ответ №2 вопроса 4",
        "Ответ №3 вопроса 4",
        "Ответ №4 вопроса 4"
      ],
      img: [
        "img/typeProduct/question-4/1.jpg",
        "img/typeProduct/question-4/2.jpg",
        "img/typeProduct/question-4/3.jpg",
        "img/typeProduct/question-4/4.jpg"
      ],
      type: "list"
    }
  ];

  //Generated Answer-Box for Quiz
  var currentQuestion = 0;
	var startQuestion=1;

  function Generated() {
    var answersLength = question[currentQuestion].answers.length;
    var qstnCount = question.length;
    var title = question[currentQuestion].title;
    console.log(answersLength);
    var choice;
    for (var i = 0; i < answersLength; i++) {
      var sizeCol = 0;
      switch (counter()) {
        case 1:
          sizeCol = 12;
          break;
        case 2:
          sizeCol = 6;
          break;
        case 3:
          sizeCol = 4;
          break;
        case 4:
          sizeCol = 3;
          break;
        case 5:
          sizeCol = 2;
          break;
        case 6:
          sizeCol = 2;
          break;
      }
      choice = question[currentQuestion].answers[i];
      console.log(choice);
      img = question[currentQuestion].img[i];
      qstnTitle.text(title);
      var bodyAnswer = "<div class='col-md-" + sizeCol + " text-center'>" +
        choice +
        "<br><img class='img-responsive rounded' src=" + img + "><br>" +
        "<input class='radio-btn' name='answer' value='question" + i + "' type='radio'>" +
        "</div>";
      answerBox.append(bodyAnswer);
    }
  }
  Generated();

  function Template() {
		$.each(endTemplate.advantages, function(key, value){
			listGroupBox.append("<li class='list-group-item'><i class='"+value.icon+"'></i> "+value.title+"</li>");
		});

  }
  Template();

  //Counter Questions
  function counter() {
    var count = 0;
    for (var key in question) {
      count++;
    }
    return count;
  }

	qstnStartBox.text(startQuestion);
	qstnEndBox.text(counter());


  //Revome Question
  function Clear() {

    qstnTitle.empty();
    answerBox.empty();
  }
  //Add values in progress-bar
  var step = Math.round((100 / question.length));
  var valBar=step;
	progressBar.css("width",valBar+"%");

  function Up() {
		valBar+=step;
    progressBar.css("width",valBar+"%");
		progressBar.attr("aria-valuenow", valBar);
		$(".progress-bar").text(valBar+"%");

		//change question-start
		startQuestion+=1;
		qstnStartBox.text(startQuestion);
  }

  //Handler event click on ipnut
  $(document).on("click",".radio-btn",function() {
			$(".btn-box").show();
  });
  $(document).on("click",".btn-next",
    function() {
			$(".btn-box").hide();
      Clear();
      currentQuestion++;
      Generated();
			Up();
    }
  );
});
