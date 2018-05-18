var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var artist; 
  var instrument = [];
  for (var i = 0;  i< musicians.length; i ++) {
  
  artist=musicians[i] + 'plays ' + instruments[i];
  instrument [i] = artist;
}
return artist;


}