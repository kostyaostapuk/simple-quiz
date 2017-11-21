var time=1;
var deprive=5;
var discountBox=$("#discount");
var startDiscount = 350;
var currency = "руб.";
function Display(){
	discountBox.text(startDiscount);
	discountBox.append("<span id='currency'>" + currency + "</span>");
}
Display();
function CountDown() {
	var timeInterval=time*1000;

	function changeValue(){
			startDiscount-=deprive;
			Display();
			if (startDiscount==0) {
				clearInterval(timer);
			}
	}
  var timer=setInterval(changeValue, timeInterval);
}
CountDown();
