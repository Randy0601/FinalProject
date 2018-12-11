
// Create a map object

var submit_btn = d3.select("#submit_btn1");
var feedbackTable = d3.select("tbody");

// logic to handle onClick event on "Search" button
submit_btn.on("click", function() {

  console.log("Onclick Event on Submit Button: Begin");
  //preventing refresh
  // d3.event.preventDefault();

  var searchElement = "";
  var searchKeyword = "";

  searchElement = d3.select("#email");
  email_id = searchElement.property("value").trim();
  if (email_id != ""){
    console.log(`Email is ${email_id}`);
    // feedbackTable.selectAll("tr").remove();
  }

  searchElement = d3.select("#feedback");
  feedback = searchElement.property("value").trim();
  if (feedback != ""){
    console.log(`Feedback is ${feedback}`);
  }

  submitFeedback(email_id,feedback);
  console.log("Onclick Event on Search Button: End");
});

/*
@author - Saifee Dalal
@Name - submitFeedback
@Input - keyword
@Output - JSON Response from Mongo
@Description - This function will call the flask route to connect to MongoDB to submit feedback
*/
function submitFeedback(email_id,feedback){

  console.log("Inside submitFeedback(): Begin");
  
  var url = "/submitFeedback/"+email_id+"/"+feedback;
  console.log("URL", url);
  d3.json(url,function(data) {
    console.log("Returned Response", data);

    if (data != null && data.length > 0){
      
      //document.getElementById("tablehead").classList.remove('invisible');
      d3.select("#tablehead")
        .classed("invisible", false);

      for (var i = 0; i < data.length; i++) {
        
        feedback_db = data[i].feedback;
        console.log("Feedback:", feedback_db);
        email_db = data[i].email;
        console.log("Email:", email_db);
        submitted_db = data[i].submitted_at
        console.log("Submitted:", submitted_db);

        var row;
        var cell;
        row = feedbackTable.append("tr");
        cell = row.append("td");
        cell.text(email_db);
        cell = row.append("td");
        cell.text(feedback_db);
        cell = row.append("td");
        cell.text(submitted_db);
        

      }
    }

    else
    // $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+alert_message_result+'</span></div>');
    console.log("Returned Response is null");

  });


};
