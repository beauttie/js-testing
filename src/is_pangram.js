const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = function(text) {
  const letterCount = {};

  text.split('').forEach(letter => {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });

  for (const letter of ALPHABET) {
    if (!letterCount[letter]) {
      return false;
    } 
  };

  return true;
};

module.exports = isPangram;
