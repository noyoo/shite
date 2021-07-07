let timetoreturn = 5000;

window.addEventListener('onWidgetLoad', function (obj) {
const fieldData = obj.detail.fieldData;
timetoreturn = fieldData.timetoreturn;
});

window.addEventListener('onEventReceived', function (obj) {
	const listener = obj.detail.listener;
  	const type = listener.replace("-latest","");
 /* if (type != "follower"){
    const amount = obj.detail.event.amount;
  }*/ 														//do progów, zrobię póżniej
  	switch (type) {
      case "follower":
        document.getElementById("main-container").style.filter = "hue-rotate(60deg)";
        break;
      case "subscriber":
        document.getElementById("main-container").style.filter = "hue-rotate(120deg)";
        break;
      case "cheer":
        document.getElementById("main-container").style.filter = "hue-rotate(180deg)";
        break;
      case "raid":
        document.getElementById("main-container").style.filter = "hue-rotate(240deg)";
        break;
      case "host":
        document.getElementById("main-container").style.filter = "hue-rotate(320deg)";
        break;
      default:
    } 
  setTimeout(reset, timetoreturn);
});

function reset(){
document.getElementById("main-container").style.filter = "hue-rotate() saturate()";
}
