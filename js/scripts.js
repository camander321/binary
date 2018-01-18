function camsWay(number) {
  var highestPower = 1;
  var bits = "";
  for (var i = 0; highestPower * 2 < number; i += 1) {
    highestPower *= 2;
  }
  while(highestPower >= 1 ) {
    if (number >= highestPower) {
      number -= highestPower;
      bits += "1";
    } else {
      bits += "0";
    }
    highestPower /= 2;
  }
  return bits;
}


$(document).ready(function() {
  // var base = prompt("Enter a Base...")
  // var number = prompt("Enter a Number...")

  alert(camsWay(38));
});
