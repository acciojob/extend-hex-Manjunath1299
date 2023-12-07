const extendHex = (shortHex) => {
 if(shortHex==4){
   return `#${shortHex[1]}${shortHex[1]}${shortHex[2]${shortHex[2]}${shortHex[3]}${shortHex[3]}`
}
else
return `#${shortHex[0]}${shortHex[0]}${shortHex[1]${shortHex[1]}${shortHex[2]}${shortHex[2]}`
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
