function rgb(r, g, b){
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
    if(n <= 0 ) {return "00";}
    if(n > 255 ) {return "FF";}
    if(n > 0 && n <= 15) {return "0"+(Number(n).toString(16)).toUpperCase();}
    else {return (Number(n).toString(16)).toUpperCase();}
}
