// user interface
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var input = parseInt($("#number").val());

    $("#result").append(input);
  });
});
