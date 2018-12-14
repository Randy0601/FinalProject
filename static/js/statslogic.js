// Create a map object
// Selecting the "Search" button

var submit_btn = d3.select("#submit_btn");

// logic to handle onClick event on "Search" button
submit_btn.on("click", function() {
  $('#result_placeholder').html('<span></span>');
  
  console.log("Onclick Event on Submit Button: Begin");

  var searchElement = "";
  var searchKeyword = "";

  searchElement = d3.select("#airline");
    airline= searchElement.property("value").trim();
    if (airline != ""){
      console.log(`Airline is ${airline}`);
  }

  searchElement = d3.select("#time");
    time= searchElement.property("value").trim();
    if (time != ""){
      console.log(`Time is ${time}`);
  }

  searchElement = d3.select("#depairport");
  depAirport= searchElement.property("value").trim();
  if (depAirport != ""){

    console.log(`Dep Airport is ${depAirport}`);

    searchElement = d3.select("#arrairport");
    arrAirport= searchElement.property("value").trim();
    if (arrAirport != ""){
      console.log(`Arr Airport is ${arrAirport}`);

      searchElement = d3.select("#date");
      date= searchElement.property("value").trim();
      if (date != ""){
           //preventing refresh
           d3.event.preventDefault();
   
        console.log(`Date is ${date}`);
        
        var d = new Date(date);
        d.setDate(d.getDate() + 1);
        console.log(`Date Object is ${d}`);

        var year = d.getFullYear();
        console.log(`Year is ${year}`);

        var calendarDay = d.getDate();
        console.log(`Calendar Day is ${calendarDay}`);

        var weekDay = d.getDay();

        if (weekDay == 0)
          weekDay = 7;
        
          console.log(`Week Day is ${weekDay}`);

        var hour = 0;

        if (time == "Early Morning (00:00 - 06:59 CST)")
          hour = 06;
        else if (time == "Morning (07:00 - 11:59 CST)")
          hour = 11;
        else if (time == "Afternoon (12:00 - 15:59 CST)")
          hour = 15;
        else if (time == "Evening (16:00 - 18:59 CST)")
          hour = 18;
        else if (time == "Late Evening (19:00 - 20:59 CST)")
          hour = 20;
        else if (time == "Night (21:00 - 23:59 CST)")
          hour = 23;
        else
          hour = 16;

        console.log(`Hour is ${hour}`);

        var airline_code = 'null';

        if (airline == 'Alaska')
          airline_code = 'AS'
        else if (airline == 'Allegiant')
          airline_code = 'G4'
        else if (airline == 'American')
          airline_code = 'AA'
        else if (airline == 'American Eagle')
          airline_code = 'MQ'
        else if (airline == 'Atlantic Southeast')
          airline_code = 'EV'
        else if (airline == 'Comair')
          airline_code = 'OH'
        else if (airline == 'Delta')
          airline_code = 'DL'
        else if (airline == 'Frontier')
          airline_code = 'F9'
        else if (airline == 'Hawaiian')
          airline_code = 'HA'
        else if (airline == 'Jetblue')
          airline_code = 'B6'
        else if (airline == 'Mesa')
          airline_code = 'YV'
        else if (airline == 'Midwest')
          airline_code = 'YX'
        else if (airline == 'Pinnacle')
          airline_code = '9E'
        else if (airline == 'Skywest')
          airline_code = 'OO'
        else if (airline == 'Southwest')
          airline_code = 'WN'
        else if (airline == 'Spirit')
          airline_code = 'NK'
        else if (airline == 'United')
          airline_code = 'UA'
        else if (airline == 'Virgin')
          airline_code = 'VX'
        
        var url = "/getFlightPrediction/"+airline_code+"/"+depAirport+"/"+arrAirport+"/"+calendarDay+"/"+weekDay+"/"+hour;
        console.log("URL", url);
        //Calling the getYelpReview method to fetch Yelp Reviews
        d3.json(url,function(data) {
          console.log("Returned Response", data);
           
          if (data == 1)
            $('#result_placeholder').html('<span><img src="../static/images/delay.jpg" height = "300px" width = "500px"><br><br><h4>Happy Travels! Please take a moment to provide your <a href = "feedback.html">feedback</a></h4></span>');
          else
            $('#result_placeholder').html('<span><img src="../static/images/ontime.jpg" height = "300px" width = "500px"><br><br><h4>Happy Travels! Please take a moment to provide your <a href = "feedback.html">feedback</a></h4></span>');
        })



      }
      else{
        // $('#alert_date_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>Please enter Travel Date</span></div>');

      }
    
    }
    else{
      // $('#alert_arrairport_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>Please enter Arrival Airport</span></div>');

    }

    
    }
  else{

    // $('#alert_depairport_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>Please enter Departure Airport</span></div>');

  }


  console.log("Onclick Event on Search Button: End");
});

