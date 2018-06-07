const location = $("#location");

var url = window.location.search;


function handleFormSubmit(event) {
    const currentURL = window.location.origin;
    console.log("*************Location***********",location);
            $.ajax({
                url: currentURL+ "/properties/:"+location,
                method: "GET",
               // location: location,
                function(success) {
                    console.log("send");
                }
                // property: property
                // }).then(function(properties){
                //     console.log(properties);
                //     res.json(properties);
            });
            // $.get("/properties/:"+location, function(data) {
            //     location = data;
            //     // initializeRows();
            //   });
            
}

//$("#propertySearchForm").on("submit", handleFormSubmit);
$("#locationSend").on("click", handleFormSubmit);