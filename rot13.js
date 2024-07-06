function rot13(str) {
  let separado = [];
  let newStr = [];

  for(let i = 0; i < str.length; i++){
    if(/\W/.test(str[i])){//controla con un regex que no sea caracter para poder asignar el unicode corresp
      separado[i] = str.toLowerCase().charCodeAt(i);
    }
    else{
      if((str.toLowerCase().charCodeAt(i) < 110) && (str.toLowerCase().charCodeAt(i) >= 97)){ 
      separado[i] = str.toLowerCase().charCodeAt(i) + 13; //controla que sea de la A a la M
      }
      else{
        separado[i] = str.toLowerCase().charCodeAt(i) - 13; // N - Z
      }
    } 
  }
  
  for(let i = 0; i < str.length; i++){
      newStr[i] = String.fromCharCode(separado[i]).toUpperCase();    
  }

  return newStr.join("");
}

rot13("SERR PBQR PNZC"); //FREE CODE CAMP
