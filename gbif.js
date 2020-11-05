
queryURL = "https://api.gbif.org/v1/species"

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(response)

    })