const esizlid = (length, characters) => {
  var randomValues = '';
  var stringValues;

  if (!characters) {
    stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyz1234567890PQRSTUVWXYZ'
  } else {
    stringValues = characters
  }

  var sizeOfCharacter = stringValues.length;
  for (var i = 0; i < length - 1; i++) {
    randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
  }
  return randomValues;
}

// module.exports = esizlid

console.log(esizlid(9, 'abc'))