// codepen
// https://codepen.io/jsher/pen/GRmYoYM

//challenge #3
function lyrics() {
  let quote =
    "Wipe the sweat off my dome, spit the phlegm on the streets suede Timbs on my feets makes my cipher complete Whether cruising in a sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me";
  let quoteArray = quote.split(" ");
  let newArr = [];
  let finalLyrics;

  for (let i = 0; i < quoteArray.length; i++) {
    //only replacing lowercase s based on instructions on slides
    let newLyrics = quoteArray[i].replaceAll("s", "$");
    newArr.push(newLyrics);
  }

  finalLyrics = newArr.join(' ');
  console.log(finalLyrics);
}

lyrics()