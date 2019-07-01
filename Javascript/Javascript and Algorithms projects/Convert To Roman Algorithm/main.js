function convertToRoman(num) {
  let newNum = num;
  let numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let letters = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let roman = "";
  
  for (let i = 0; i < numbers.length; i++) 
  {
    while (numbers[i] <= newNum) 
    {
      roman += letters[i];
      newNum -= numbers[i];
    }
  }

  return roman;

}

convertToRoman(36);
