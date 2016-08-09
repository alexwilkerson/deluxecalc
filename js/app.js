$(document).ready(function(){

  var screenText = "0";
  var previousText = "0";
  var operation = "";
  updateScreen();

  $("#btn-c").click(function() {
    screenText = "0";
    previousText = "0";
    updateScreen();
  });

  $("#btn-ce").click(function() {
    screenText = previousText;
    updateScreen();
  });

  $("#btn-point").click(function() {
    if (screenText.valueOf() == 0 || operation === "equaled") {
      if (operation === "equaled") {
        operation = "";
        previousText = "0";
      }
      screenText = "0.";
    } else if (screenText.indexOf(".") === -1) {
      screenText += ".";
    }
    updateScreen();
  });

  $("#btn-0").click(function() {
    inputNum("0");
  });

  $("#btn-1").click(function() {
    inputNum("1");
  });

  $("#btn-2").click(function() {
    inputNum("2");
  });

  $("#btn-3").click(function() {
    inputNum("3");
  });

  $("#btn-4").click(function() {
    inputNum("4");
  });

  $("#btn-5").click(function() {
    inputNum("5");
  });

  $("#btn-6").click(function() {
    inputNum("6");
  });

  $("#btn-7").click(function() {
    inputNum("7");
  });

  $("#btn-8").click(function() {
    inputNum("8");
  });

  $("#btn-9").click(function() {
    inputNum("9");
  });

  $("#btn-plus").click(function() {
    previousText = screenText;
    screenText = "0";
    updateScreen();
    operation = "add";
  });

  $("#btn-subtract").click(function() {
    previousText = screenText;
    screenText = "0";
    updateScreen();
    operation = "subtract";
  });

  $("#btn-multiply").click(function() {
    previousText = screenText;
    screenText = "0";
    updateScreen();
    operation = "multiply";
  });
  
  $("#btn-divide").click(function() {
    previousText = screenText;
    screenText = "0";
    updateScreen();
    operation = "divide";
  });

  $("#btn-equals").click(function() {
    switch(operation) {
      case "add": 
        screenText = (+screenText + +previousText).toString();
        operation = "equaled";
        updateScreen();
        break;
      case "subtract":
        screenText = (+previousText - +screenText).toString();
        operation = "equaled";
        updateScreen();
        break;
      case "multiply": 
        screenText = (+previousText * +screenText).toString();
        operation = "equaled";
        updateScreen();
        break;
      case "divide": 
        screenText = (+previousText / +screenText).toString();
        operation = "equaled";
        updateScreen();
        break;
    }
  });

  function updateScreen(){
    $("#screenText").text(screenText);
  }

  function inputNum(num) {
    if (screenText === "0" || operation === "equaled") {
      if (operation === "equaled") {
        operation = "";
        previousText = "0";
      }
      screenText = num;
    } else if (screenText.length < 9){
      screenText += num;
    }
    updateScreen();
  }

});
