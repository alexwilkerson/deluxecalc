$(document).ready(function(){

  const ADD = 1;
  const SUBTRACT = 2;
  const MULTIPLY = 3;
  const DIVIDE = 4;
  const EQUALED = 5;
  const NONE = 0;

  var workingNum = "0";
  var previousNum = "0";
  var operation = NONE;

  $("#btn-c").click(function() {
    workingNum = "0";
    previousNum = "0";
    operation = NONE;
    updateDisplay(workingNum);
    updateOperation("");
  });

  $("#btn-invert").click(function() {
    if (operation === EQUALED) {
      workingNum = previousNum;
    }
    if (+workingNum == 0) {
      if (workingNum[0] === "-") {
        workingNum = workingNum.slice(1, workingNum.length);
      } else {
        workingNum = "-" + workingNum;
      }
    } else {
      workingNum = (+workingNum * -1).toString();
    }
    updateDisplay(workingNum);
    if (operation === EQUALED) {
      previousNum = workingNum;
      workingNum = "0";
    }
  });

  $("#btn-point").click(function() {
    if (+workingNum == 0) {
      workingNum = "0.";
      updateDisplay(workingNum);
    } else if (workingNum.indexOf(".") === -1) {
      workingNum += ".";
      updateDisplay(workingNum);
    }
    if (operation === EQUALED) {
      operation = NONE;
    }
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
    if (operation) {
      previousNum = calculate(previousNum, workingNum, operation);
      updateDisplay(previousNum);
    } else {
      previousNum = workingNum;
      updateDisplay(workingNum);
    }
    workingNum = "0";
    operation = ADD;
    updateOperation("+");
  });

  $("#btn-subtract").click(function() {
    if (operation) {
      previousNum = calculate(previousNum, workingNum, operation);
      updateDisplay(previousNum);
    } else {
      previousNum = workingNum;
      updateDisplay(workingNum);
    }
    workingNum = "0";
    operation = SUBTRACT;
    updateOperation("-");
  });

  $("#btn-multiply").click(function() {
    if (operation) {
      previousNum = calculate(previousNum, workingNum, operation);
      updateDisplay(previousNum);
    } else {
      previousNum = workingNum;
      updateDisplay(workingNum);
    }
    workingNum = "0";
    operation = MULTIPLY;
    updateOperation("*");
  });
  
  $("#btn-divide").click(function() {
    if (operation) {
      previousNum = calculate(previousNum, workingNum, operation);
      updateDisplay(previousNum);
    } else {
      previousNum = workingNum;
      updateDisplay(workingNum);
    }
    workingNum = "0";
    operation = DIVIDE;
    updateOperation("÷");
  });

  $("#btn-equals").click(function() {
    if (operation && previousNum) {
      workingNum = calculate(previousNum, workingNum, operation);
      previousNum = workingNum;
      updateDisplay(workingNum);
      workingNum = "0";
      operation = EQUALED;
    } else {
      operation = EQUALED;
    }
    updateOperation("");
  });

  function updateOperation(op) {
    $("#operation").text(op);
  }

  function updateDisplay(num){
    if (+num != 0) {
      $("#screenText").text(+num.substr(0, 9));
    } else {
      $("#screenText").text(num.substr(0, 9));
    }
  }

  function inputNum(num) {
    if (!operation) {
      updateOperation("");
    }
    if (workingNum === "0") {
      workingNum = num;
    } else if (workingNum === "-0"){
      workingNum = "-" + num;
    } else if (workingNum.length < 9){
      workingNum += num;
    }
    updateDisplay(workingNum);
    if (operation === EQUALED) {
      operation = NONE;
    }
  }

  function calculate(num1, num2, op) {
    switch (op) {
      case ADD:
        return (+num1 + +num2).toString();
        break;
      case SUBTRACT:
        return (+num1 - +num2).toString();
        break;
      case MULTIPLY:
        return (+num1 * +num2).toString();
        break;
      case DIVIDE:
        if (+num2 == 0) {
          return ":(";
        }
        return (+num1 / +num2).toString();
        break;
      default:
        return num1;
        break;
    }
  }

});
