$(document).ready(function(){
    $('.bubble').hover(function() {
      $(this).toggleClass("transform");
    }),

    $("#click1").click(function(){
      $(".insertImg").append('<img src="Business-card.jpg"/>') && $("#click1").hide();
    }),

    $("#click2").click(function(){
      $(".insertImg2").append('<img src="me.jpg"/>') && $("#click2").hide();
    })
});




let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("api").innerHTML = myObj[0].full_name;
  }
};
newRequest.open("GET", "https://api.github.com/users/jaheeli/repos", true);
newRequest.send();
