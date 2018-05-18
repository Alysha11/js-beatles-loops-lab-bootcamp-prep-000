var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var artist; 
  var statements = [];
  for (var i = 0;  i< musicians.length; i ++) {
  
  artist=musicians[i] + ' plays ' + statements[i];
  statements [i] = artist;
}
return statements;


}