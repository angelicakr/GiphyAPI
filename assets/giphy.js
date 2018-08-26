$(document).ready(function () {
    

            // Array puppies  
            var allPuppies = ['poodles', 'labrador', 'beagle', 'bulldog', 'pug', 'husky', 'corgi', 'pitbull', 'maltese', 'dachshund'];

            // Functions

            // Adding the buttons

            function giphyButtons() {

                $("#puppyLibrary").empty();

                for ( var i = 0; i < allPuppies.length; i++) {
                    var button = $("<button>" + allPuppies[i] + "</button>");
                    button.attr("data-dog-type",allPuppies[i]);
                    $("#puppyLibrary").append(button);
                }
            };

            //Displaying input to array

            $("#submitDogs").on("click", function (event) {
                console.log("click");
                event.preventDefault();

                var newButton = $("#dogs-input").val();
                allPuppies.push(buttonHtml);
                giphyButtons();
                $("#inputForm").append("dogs-input").val("");
            });
            // create buttons html

            // function buttonHtml() {
            //     var displayButton = $("<button>");
            //     displayButton.attr("giphy");
            //     displayButton.text();
            //     displayButton.on('click');
            //     return displayButton;
            // }

            $("#puppyLibrary").on("click", "button", function () {
                var dog = $(this).attr("data-dog-type");
                console.log(this);
                $("#puppies-show-here").empty();
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    dog + "&api_key=oQQBL7UcXyRm6AT2IAd2iMMMlNeoLfPL&limit=10&offset=0&rating=G&lang=en";
                    console.log(queryURL);
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);

                    var results = response.data;

                    for (var i = 0; i < results.length; i++) {

                        // Creates div with jQuery and stores it in a variable puppiesDiv.
                        var puppiesDiv = $("<div>");
                        // Creates paragraph tag with jQuery and stores value in a variable 
                        var rating = results[i].rating
                        var p = $("<p>").text("Rating: " + rating);
                        // This image tag with jQuery will store images in a variable puppyImage.
                        var puppyImage = $("<img>");

                        puppyImage.attr("src", results[i].images.fixed_height.url);

                        // Appending p variable to show buttons on puppiesDiv variable.
                        puppiesDiv.append(p);
                        puppiesDiv.append(puppyImage);
                        $("#puppies-show-here").prepend(puppiesDiv);
                    }
                });

          
                
            });
            
            giphyButtons();
        });   