// Create a map object
// Selecting the "Search" button

var submit_btn = d3.select("#submit_btn");

// logic to handle onClick event on "Search" button
submit_btn.on("click", function() {

  console.log("Onclick Event on Submit Button: Begin");
  //preventing refresh
  d3.event.preventDefault();

  var searchElement = "";
  var searchKeyword = "";

  searchElement = d3.select("#depairport");
  depCity= searchElement.property("value").trim();
  if (depCity != ""){
    console.log(`Dep City is ${depCity}`);
  }

  searchElement = d3.select("#arrairport");
  arrCity= searchElement.property("value").trim();
  if (arrCity != ""){
    console.log(`Arr City is ${arrCity}`);
  }

  searchElement = d3.select("#airline");
  airline= searchElement.property("value").trim();
  if (airline != ""){
    console.log(`Airline is ${airline}`);
  }

  
  searchElement = d3.select("#date");
  date= searchElement.property("value").trim();
  if (date != ""){
    console.log(`date is ${date}`);
  }

  
  searchElement = d3.select("#time");
  time= searchElement.property("value").trim();
  if (time != ""){
    console.log(`Time is ${time}`);
  }

  //Calling the getYelpReview method to fetch Yelp Reviews
  
  console.log("Onclick Event on Search Button: End");
});

