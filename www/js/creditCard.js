$(document).ready(function() {
  $('#credit-card-entry-form').submit(function(e) {
    e.preventDefault();
    var creditCardNumber = $('input[name="credit-card-number"]').val();

    is_luhn_valid(creditCardNumber);
  });
});

var luhnChk = (function(arr) {
  return function(ccNum) {
    var
      len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

function is_luhn_valid(cardNumber) {
  if (luhnChk(cardNumber) === true){
	$('#type').html('<h1><b><font color="green">Valid Credit Card Number</font></b></h1>');
  } else { 
  $('#type').html('<h1><b><font color="red">Invalid Credit Card Number</font></b></h1>');
  }
}
