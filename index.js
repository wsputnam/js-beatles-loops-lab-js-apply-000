function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var arr = [];
 var i = 0;
 while (i < facts.length) {
   arr.push(facts[i] + '!!!');
   i++;
 }
return arr;
}
