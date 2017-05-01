$(function () {
  var rankArray = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suitArray = ["clubs", "hearts", "spades", "diamonds"];
  suitArray.forEach(function (suit) {
    rankArray.forEach(function (rank) {
      $("#list").append("<li>"+ rank + " of " + suit + ".</li>");
    })
  })
});
