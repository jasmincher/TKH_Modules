//codepen
//https://codepen.io/jsher/pen/ZEKqQRN

//assignment #1
function saveMoney() {
    var weekly_income = parseInt(prompt("What is your weekly income?"));
    var food_cost = parseInt(prompt("What is your food cost?"));
    var housing_cost = parseInt(prompt("What is your housing cost?"));
    var transportation_cost = parseInt(
      prompt("What is your transportation cost?")
    );
    var other_cost = parseInt(prompt("What are your other cost?"));
    var save_in_a_year = parseInt(
      prompt("How much do you want to save in a year?")
    );
  
    var saved = save_in_a_year / 52;
    var left_over =
      weekly_income -
      (food_cost - housing_cost + transportation_cost + other_cost);
  
    if (left_over >= saved) {
      console.log("You are on track");
    } else {
      console.log(
        "You are not on track, you need to save " +
          (save_in_a_year - left_over) +
          " a week"
      );
    }
  }
  
  saveMoney();