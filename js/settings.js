$(function() {
  var qstnTitle = $(".question-title");
	var qstnCounter=$(".question-counter");
  var answerBox = $(".answer-box");
  var listAdvantageBox = $("#list-advantage");
  var progressBar = $(".progress-bar");
	var progress=$(".progress");
  var discountBox = $(".discount-info");
	var callbackBox=$(".callback");
  var daysBox = $("#days");
  var suffixBox = $("#days-suffix");
  var discriptBox = $(".discription");
  var templateTitleBox = $(".template-title");
  var qstnStartBox = $("#question-start");
  var qstnEndBox = $("#question-end");
  var btnBox = $(".btn-box");
	var quizBox=$("#quiz-box");

  //===============================
  //========Настройки QUIZ=========
  //===============================
  //Начальный размер скидки
  var title = "Благодарим за ваши ответы!";
  var days = 31;
  var discript = "на любую вашу сделку";
	var discountHide= true;
	var hideCallBack=true;
  //Количество всех вопросов
  //
  //===============================

  ChangeValuesTemplate();
	HideBlocks();

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
	function HideBlocks(){
		if (discountHide===true) {
			discountBox.empty();
		}
		if (hideCallBack===true) {
			callbackBox.empty();
		}
		quizBox.attr("class", "");
		quizBox.attr("class", "col-md-12");
	}
  function ChangeValuesTemplate() {
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
        "Прямая",
        "Угловая",
        "С островом",
        "П-образная"
      ],
      img: [
        "img/typeProduct/question-1/1.jpg",
        "img/typeProduct/question-1/2.jpg",
        "img/typeProduct/question-1/3.jpg",
        "img/typeProduct/question-1/4.jpg"
      ],
      type: "grid",
			template: ""
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
        "",
        "",
        "",
        ""
      ],
      type: "grid",
			template: ""
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
        "",
        "",
        "",
        ""
      ],
      type: "list",
			template: "<div class='col-md-12 text-center'>"+
			"<div class='col-md-4'><input id='user-specialty' type='text' class='form-control text-center' name='phone-user' placeholder='Placeholder content' required></div><div class='answer-block'><input class='checkbox-btn' type='checkbox'>I don't know</div>"+
			"</div>"
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
      type: "list",
			template: ""
    }
  ];

  //Generated Answer-Box for Quiz
  var currentQuestion = 0;
  var startQuestion = 1;

  function ListGenerate() {
    var list = "<div id='list-answer'><ul class='list-group'></ul></div>";
    answerBox.append(list);
  }

  function Generated() {
    var answersLength = question[currentQuestion].answers.length;
    var qstnCount = question.length;
    var title = question[currentQuestion].title;
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
      img = question[currentQuestion].img[i];
			template = question[currentQuestion].template;
      qstnTitle.text(title);



      if (img === "") {
        var bodyAnswer = "<li class='list-group-item'><input class='radio-btn' name='answer' value='question" + i + "' type='radio'>"+choice+
          "</li>";
        $(".list-group").append(bodyAnswer);
      } else {
        var bodyAnswerFull = "<div class='col-md-" + sizeCol + " text-center animated fadeIn'>" +
          "<br><img class='img-responsive rounded' src=" + img + "><br>" +
          "<input class='radio-btn' name='answer' value='question" + i + "' type='radio'>" +
	          choice +"</div>";
        answerBox.append(bodyAnswerFull);
      }
    }
		if(template!=""){
			$(".list-group").empty();
			answerBox.append(template);
		}
  }
  Generated();

  function Template() {
    $.each(endTemplate.advantages, function(key, value) {
      listAdvantageBox.append("<li class='list-group-item animated fadeIn'><i class='" + value.icon + "'></i> " + value.title + "</li>");
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

  var step = Math.round((100 / question.length - 1));
  var valBar = step;

  progressBar.css("width", valBar + "%");

  function Up() {
    valBar += step;
    progressBar.css("width", valBar + "%");
    progressBar.attr("aria-valuenow", valBar);
    $(".progress-bar").text(valBar + "%");

    //change question-start
    startQuestion += 1;
    qstnStartBox.text(startQuestion);
  }

  function progressBarFull() {
    progressBar.css("width", 100 + "%");
    progressBar.attr("aria-valuenow", 100);
    $(".progress-bar").text("100%");
  }
	function CloseQuiz(){
		setTimeout(function(){
			Clear();
			qstnTitle.empty();
			progress.empty();
			qstnCounter.empty();
			$("#quiz").attr("class","animated fadeOut");
			$("#quiz").remove();

		},1500);
	}
	function displayTemplate(){
		setTimeout(function(){
			$("#end").css("display","block");
			$("#end").attr("class", "animated fadeIn");
		},2000);
	}
  //Handler event click on ipnut
  $(document).on("click", ".radio-btn", function() {
		$(".btn-box").show();
  });


	$(document).on("click", ".checkbox-btn", function() {
		if ($(".checkbox-btn").prop("checked")==true) {
			$(".btn-box").show();
		}else {
			$(".btn-box").hide();
		}
		// var checked=false;
		// if(checked==false){
		// 	$(".btn-box").show();
		// 	checked=true;
		// }else{
		// 	$(".btn-box").hide();
		// }

  });
	$(document).on("click", "#user-specialty", function() {
		$("#user-specialty").keyup(function(){
			var body=$("#user-specialty").val();
			if (body.length>5) {
				$(".btn-box").show();
			}
			else{
				$(".btn-box").hide();
			}
		});
  });
  $(document).on("click", ".btn-next",
    function() {
      currentQuestion++;
      if (question.length > currentQuestion) {
        $(".btn-box").hide();
        Clear();
        Up();
        ListGenerate();
        Generated();

      } else {
        progressBarFull();
				CloseQuiz();
				displayTemplate();
      }
    }
  );
});
