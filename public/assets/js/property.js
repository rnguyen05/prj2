

var url = window.location.search;


function handleFormSubmit(event) {
    console.log("*************Location*****");
    // const currentURL = window.location.origin;
   var location = $("#location");
    console.log("*************Location***********",location);
    let locationUrl = "/?location="+location;
     $.get("/properties/location" + locationUrl, function(data) {
       console.log("*************Posts", data);
       // property = data;
       // if (!posts || !posts.length) {
       //   displayEmpty(author);
       // }
       // else {
       //   initializeRows();
       // }
     });
            // $.get("/properties/:"+location, function(data) {
            //     location = data;
            //     // initializeRows();
            //   });
            
}

// $("#propertySearchForm").on("submit", handleFormSubmit);
$("#locationSend").on("click", handleFormSubmit);