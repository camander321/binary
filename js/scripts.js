function digitToChar(dig){
  if (dig < 10) {
    return dig + "";
  }
  else {
    return "abcdefghijklmnop".charAt(dig - 10);
  }
}


function camsWay(base, number) {
  var highestPower = 1;
  var digits = "";
  for (var i = 0; highestPower * base < number; i += 1) {
    highestPower *= base;
  }
  while(highestPower >= 1 ) {
    var dig = Math.floor(number / highestPower);
    number -= dig * highestPower;
    digits += digitToChar(dig);
    highestPower /= base;
    console.log(dig);
  }
  return digits;
}

function russWay(base, lump) {
  var digits = "";
  while (lump !== 0) {
    console.log(lump%base);
    digits = digitToChar(lump%base) + digits;
    lump -= lump%base;
    lump /= base;
  }
  return digits;
}


$(document).ready(function() {
  // var base = prompt("Enter a Base...")
  // var number = prompt("Enter a Number...")

  alert(camsWay(16, 255));
  alert(russWay(16, 255));
});
