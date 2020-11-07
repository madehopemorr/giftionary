$("#searchBtn").on("click", function(event){
    $("#gifs-go-here").empty();  
    $("#definition").empty();
    event.preventDefault();
  var animal = $("#search-animal").val().trim()
  //search for gif of animal searched for from Giphy API.
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(response)
      var results = response.data[0];
      var gifDiv = $("<div>");
          // Creating an image tag
          var animalImage = $("<img>");
          animalImage.attr("src", results.images.fixed_height.url);
          gifDiv.append(animalImage);
          $("#gifs-go-here").prepend(gifDiv);
      })
  
      var dictionaryURL = "https://dictionaryapi.com/api/v3/references/learners/json/"+ animal + "?key=ef3cb261-7a7c-465a-b6f5-4115280961f7"
  //Merriam Webster API to pull a short learners definition of animal from search
  $.ajax({
      url: dictionaryURL,
      method: "GET"
    })
      .then(function(response) {
          console.log(response)
          var title = response[0].meta.id
          var definition = response[0].shortdef[0]
          var defTitle = $(`<h2>${title}</h2>`)
          var defText = $(`<p>${definition}</p>`)
          $("#definition").append(defTitle)
          $("#definition").append(defText)
      })
  
    });