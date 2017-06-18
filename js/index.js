$(document).ready(function() {
  console.log("Hello ellen")
  var $numbers = $("span.number") //select everything on the page with class number
  var $operators = $("span.operator")
  var $clear = $('span#clear')
  var $equals = $("span#equals")
  var $zero = $("span#zero")

  $numbers.click(appendNumber);
  $operators.click(appendOperator);
  $clear.click(clearScreen)
  $equals.click(evaluateEquation)
});

var $screen = $("div#screen")

function appendNumber() {
  var $screenText = $screen.text();
  var $currentNumber = $(this).text();
  $screen.text($screenText + $currentNumber)
}

function appendOperator() {
  var $screenText = $screen.text();
  var $currentOperator = $(this).text();

  if ($screenText === 'Error') {

  } else {
    $screen.text($screenText + $currentOperator)
  }
}

function clearScreen() {
  $screen.text("");
}

function evaluateEquation() {
  var $screenText = $screen.text();
  if ($screenText === 'Error') {

  } else {
    if ($screenText.includes("x")) {
      $screenText = $screenText.replace("x", "*")
    }
    if ($screenText.includes("÷")) {
      $screenText = $screenText.replace("÷", "/")
    }
    var lastChar = $screenText[$screenText.length - 1];
    var $zero = $("span#zero")
    var counter = 0;
    for (var i = 0; i < $screenText.length; i++) {
      if ($screenText[i] === "+" || $screenText[i] === "-" || $screenText[i] === "*" || $screenText[i] === "/") {
        counter++;
      }
      if ($screenText.includes("/0")) {
        console.log("hi")
        $screen.text("Error");
      }
      if (counter > 1) {
        $screen.text("Error");
      } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        $screen.text("Error");
      } else {
        var result = eval($screenText)
        $screen.text(result);
      }
    }
  }
}



  // function infinityCheck() {
  //   var result = eval($screenText)
  //   if (result === "Infinity") {
  //     console.log($screenText)
  //     $screen.text("Error")
  //   }

  //   if ($screenText.includes("x")) {
  //     $screenText = $screenText.replace("x", "*")
  //   }
  //   if ($screenText.includes("÷")) {
  //     $screenText = $screenText.replace("÷", "/")
  //   }
  //   var lastChar = $screenText[$screenText.length - 1];
  //   var counter = 0;
  //   for (var i = 0; i < $screenText.length; i++) {
  //     if ($screenText[i] === "+" || $screenText[i] === "-" || $screenText[i] === "*" || $screenText[i] === "/") {
  //       counter++;
  //       console.log(counter)
  //     }
  //     if (counter > 1) {
  //       $screen.text("Error");
  //     } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
  //       $screen.text("Error");
  //     } else {
  //       var result = eval($screenText)
  //       $screen.text(result);
  //     }
  //   }
  // }
  // } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
  //
  //   $screen.text("Error");
  // } else if ($screenText.includes(('/') && lastChar === "0")) {
  //   $screen.text("Error")
  //
  // } else {

  // var result = eval($screenText)
  // $screen.text(result);
