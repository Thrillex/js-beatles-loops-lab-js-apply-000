// add solution here
function theBeatlesPlay(musicians,instruments){
  var factArray = [];
  for (var i = 0; i < musicians.length; i ++) {
  var factString = `${musicians[i]} plays ${instruments[i]}`;
  factArray [i] = factString;
}return factArray;
}

function johnLennonFacts(facts){
  var exclamation = [];
  var j = 0;
  while (j < facts.length) {
    exclamation [j] = `${facts[j]}!!!`;
    j++;
  } return exclamation;
}

function iLoveTheBeatles(n){
  var ray = [];
  var k = 0;
    do {
      ray [k] = "I love the Beatles !";
      k++;}
    while (k < ray.length);

  return ray;
}
