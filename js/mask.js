$(function(){
	$("#phone-user").mask("+375 (99) 999-99-99",{ completed:function(){
		setTimeout(function(){
			alert("Вы ввели номер: "+this.val());
		},5000);
	}});
});
