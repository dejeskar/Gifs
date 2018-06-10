$("button").on("click", function() {
    var ungryfor = $(this).attr("food-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      ungryfor + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var f = $("<p>").text("Rating: " + rating);

          var foodImage = $("<img>");
          foodImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(f);
          gifDiv.prepend(foodImage);

          $("#gifs-here").prepend(gifDiv);
        }
        $("#foodButtons").empty();
      });
  });
  foodButtons ();

  // adding new buttons
// making new buttons run through loop
// alligning the gifs vertically
 