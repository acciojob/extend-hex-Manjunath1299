const extendHex = (shortHex) => {
 let len=shortHex.length-3,isCapital=false;
 let output='#';
  while(len<shortHex.length){
	  let asciicode=shortHex[len].charCodeAt();
	  if(asciicode>=65 && asciicode<=90){
		  isCapital=true;
	  }
	  output+=shortHex[len]+shortHex[len];
	  console.log(shortHex);
	  len++;
  }
	return isCapital?output.toUpperCase():output;
};
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
