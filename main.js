function getTot() {
    var bott = document.getElementById("numWinBott").value;
    var winPrice = bott * 10.99;
    if (bott > 11) {
      winPrice = bott * (10.99 * .9);
    }
    var tax = .0945 * winPrice;
    var totPrice = winPrice + tax;
    var finPrice = totPrice.toFixed(2);
    document.getElementById("totPrice").value = "$" + finPrice;
  }