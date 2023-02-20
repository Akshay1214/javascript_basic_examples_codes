// Mixing Rest and Spread
// Refactor the following to use the only the rest operator


function unshift(array, ...rest) {
  return [...rest, ...array];
}
