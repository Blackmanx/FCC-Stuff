function rot13(str) {
    str = str.split("");
    let strArr = str.map( (x) => 
      {
          if (/\w/.test(x)) 
        {  // As in: En(x) = (x - n) mod 26, with n being the number of shitfs.
            return ((x.charCodeAt() - 65 + 13) % 26 + 65);
        } 
        else 
        {
           return x.charCodeAt();
        }
      });
    strArr = String.fromCharCode.apply(String, strArr);
    return strArr;
      
}

rot13("SERR PBQR PNZC");
