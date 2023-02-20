// Many, Many Arguments
// Refactor the following function to use the rest operator.  
// Remember, an argument using the rest operator does *not* need to be called 'rest'.



function product(...numbers) {
  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}
