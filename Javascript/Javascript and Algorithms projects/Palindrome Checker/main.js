function palindrome(str) {
  let start = 0
  let end = str.length - 1
  // While it isn't the middle of str.
  while (end > start) {
    if (str[start].match(/[\W_]/)) 
    { // if it isn't a word character, increase start
    start++;
    continue;
    }
        //if it isn't a "word character", decrease start
    if ( str[end].match(/[\W_]/) ) 
    {
          end--;
          continue;
    }
        //finally does the comparison on the current character
    if ( str[start].toLowerCase() !== str[end].toLowerCase())
    { // if it isn't the same character, ignoring Case, then it's false.
          return false;
    }
    
    start++;
    end--;
    }

      //if it worked until end === start || end < start
      return true

    }



palindrome("es");
