//codepen
//https://codepen.io/jsher/pen/YzVJwOZ

//challenge #1

function callName() {
    var first_name = [];
    var last_name = [];
  
    var names = [
      "Westly Snipes",
      "Nicholas Cages",
      "Nasir Jones",
      "Sean Carter",
      "Sean Combs",
      "Michael Jordan",
      "Patrick Ewing",
    ];
  
    first_name = names.map((name) => {
      [first, last] = name.split(" ");
      return first;
    });
  
    last_name = names.map((name) => {
      [first, last] = name.split(" ");
      return last;
    });
  
    console.log(first_name);
    console.log(last_name);
  }
  
  // callName();
  