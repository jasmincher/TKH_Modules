//codepen
//https://codepen.io/jsher/pen/OJmBMwQ

//assignment #2
function grades(grade) {
    switch (true) {
      case grade >= 95:
        console.log("A+");
        break;
      case grade > 88 && grade <= 90:
        console.log("A");
        break;
      case grade > 84 && grade <= 88:
        console.log("B+");
        break;
      case grade > 76 && grade <= 84:
        console.log("C+");
        break;
      case grade > 70 && grade <= 76:
        console.log("C");
        break;
      case grade > 67 && grade <= 70:
        console.log("D+");
        break;
      case grade > 64 && grade <= 67:
        console.log("D");
        break;
      case grade <= 64:
        console.log("F");
        break;
      default:
      // nothing to do
    }
  }
  
  grades(100);
  