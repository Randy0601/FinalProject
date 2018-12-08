console.log("Inside arrairport.js")

var options = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.3
  }, {
    name: 'city',
    weight: 0.2
  }]
};

console.log("arrairport.js - before calling fuse")
var fuse = new Fuse(airports, options)
console.log("arrairport.js - after calling fuse")

console.log("arrairport.js - before fetching arrairport")
var ac = $('#arrairport')
  .on('click', function(e) {
    e.stopPropagation();
  })
  .on('focus keyup', search)
  .on('keydown', onKeyDown);

  console.log("arrairport.js - after fetching arrairport")
  console.log("arrairport.js - before adding arrairport-wrapper")
var wrap = $('<div>')
  .addClass('arrairport-wrapper')
  .insertBefore(ac)
  .append(ac);

  console.log("arrairport.js - after adding arrairport-wrapper")
  console.log("arrairport.js - before adding arrairport-results")
var list = $('<div>')
  .addClass('arrairport-results')
  .on('click', '.arrairport-result', function(e) {
    e.preventDefault();
    e.stopPropagation();
    selectIndex($(this).data('index'));
  })
  .appendTo(wrap);

  console.log("arrairport.js - after adding arrairport-results")
$(document)
  .on('mouseover', '.arrairport-result', function(e) {
    var index = parseInt($(this).data('index'), 10);
    console.log("index :" +index)
    if (!isNaN(index)) {
      list.attr('data-highlight1', index);
    }
  })
  .on('click', clearResults);

function clearResults() {
  results = [];
  numResults = 0;
  list.empty();
}

function selectIndex(index) {
  if (results.length >= index + 1) {
    ac.val(results[index].iata);
    clearResults();
  }  
}

var results = [];
var numResults = 0;
var selectedIndex = -1;

function search(e) {
  if (e.which === 38 || e.which === 13 || e.which === 40) {
    return;
  }
  
  if (ac.val().length > 0) {
    results = _.take(fuse.search(ac.val()), 7);
    numResults = results.length;
    
    var divs = results.map(function(r, i) {
        return '<div class="arrairport-result" data-index="'+ i +'">'
             + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
             + '<div class="arrairport-location">'+ r.city +', '+ r.country +'</div>'
             + '</div>';
     });
    
    selectedIndex = -1;
    list.html(divs.join(''))
      .attr('data-highlight1', selectedIndex);

  } else {
    numResults = 0;
    list.empty();
  }
}

function onKeyDown(e) {
  switch(e.which) {
    case 38: // up
      selectedIndex--;
      if (selectedIndex <= -1) {
        selectedIndex = -1;
      }
      list.attr('data-highlight1', selectedIndex);
      break;
    case 13: // enter
      selectIndex(selectedIndex);
      break;
    case 9: // enter
      selectIndex(selectedIndex);
      e.stopPropagation();
      return;
    case 40: // down
      selectedIndex++;
      if (selectedIndex >= numResults) {
        selectedIndex = numResults-1;
      }
      list.attr('data-highlight1', selectedIndex);
      break;

    default: return; // exit this handler for other keys
  }
  e.stopPropagation();
  e.preventDefault(); // prevent the default action (scroll / move caret)
}