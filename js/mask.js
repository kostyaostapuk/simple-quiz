$(function() {
  $("#phone-user").mask("+375 (99) 999-99-99", {
    completed: function() {
			var phone=this.val();
      setTimeout(function() {
        alert("Вы ввели номер: " + phone);
      }, 500);
    }
  });
});
