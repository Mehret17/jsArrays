console.log("h1");
var test="cat";
var  opp = test.split("").reverse().join("");
// var opp = "tac";
// ["c","a","t"] ["c]
if (test == opp) {
    console.log (test,true);
} else {
    console.log (test,false);
}

var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');
for(var i=0; i<animals.length; i++){
 // console.log("animals", animals[i]);
 animalzElement.innerHTML += "<h5>" + animals[i] + "</h5>";
}


var book = "catch 22";
var bookSplit = book.split("");
var realNumz = [];
for (var j=0; j<bookSplit.length; j++) {
    // cosnole.log("bookSplit", bookSplit[j]);
    if (bookSplit[j]*1){
    realNumz.push(bookSplit[j]);
    }
}
console.log("answer", realNumz.join(""))