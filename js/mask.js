$(function(){
	$("#phone-user").mask("+375 (99) 999-99-99",{ completed:function(){
		alert("Вы ввели номер: "+this.val());
	}});
});
