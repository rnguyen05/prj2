
$(document).ready(function() {
// var url = window.location.search;
// $("#propertySearchForm").on("submit", handleFormSubmit);
// $("#locationSend").on("click", handleFormSubmit);

// function handleFormSubmit(event) {
  $("#propertySearchForm").on("submit",function(event){
    event.preventDefault();
   // window.location.href = "/properties/location";
    console.log("*************Location*****");
    // const currentURL = window.location.origin;
   var location = $("#location").val().trim();
    console.log("*************Location***********",location);
    let locationUrl = "?lo="+location.toString();
    alert(locationUrl);
    //  $.get("/properties/location" , locationUrl, function(data) {
    //    console.log("*************Posts", data);
    //    // property = data;
    //    // if (!posts || !posts.length) {
    //    //   displayEmpty(author);
    //    // }
    //    // else {
    //    //   initializeRows();
    //    // }
    //  });
    $.get("/properties/location/"+ location);
  // $.get("/properties/location/"+ location).then(function(properties){
  //   if (properties){
  //     $.get("/properties/properties/"+properties);
  //     console.log(properties);
  //     // window.location = "/properties/properties";

  //   }
  // });
 
    // $.get("/properties/location",{location:location});
    });
  });
            // $.get("/properties/:"+location, function(data) {
            //     location = data;
            //     // initializeRows();
            //   });
            
//}

// $("#propertySearchForm").on("submit", handleFormSu
// });

//     console.log("*************Location*****");
//     // const currentURL = window.location.origin;
//    var location = $("#location");
//     console.log("*************Location***********",location.toString());
//     let locationUrl = "/?location="+location;
//      $.get("/properties/location" + locationUrl, function(data) {
//        console.log("*************Posts", data);
//        // property = data;
//        // if (!posts || !posts.length) {
//        //   displayEmpty(author);
//        // }
//        // else {
//        //   initializeRows();
//        // }
//      });
//             // $.get("/properties/:"+location, function(data) {
//             //     location = data;
//             //     // initializeRows();
//             //   });
            
// }

// // $("#propertySearchForm").on("submit", handleFormSu
// });