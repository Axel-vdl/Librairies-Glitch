var url = "https://api.exchangerate-api.com/v4/latest/EUR";
$("button").click(function() {
  $(".data").empty();
  $.getJSON(url, function(result) {
    $(".data").append(
      "<p> Last update: " + new Date(result.time_last_updated * 1000).toString()
    );
    $(".data").append("<p> 1€ is valued at " + result.rates["CNY"] + "¥");
    $(".data").append("<p> 1€ is valued at " + result.rates["USD"] + "$");
  });
});
