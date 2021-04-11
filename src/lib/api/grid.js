import { getWords } from './words';

function randomLetter() {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return alphabet[Math.floor(Math.random() * 26)];
}

export function getGrid() {
  const x = 15;
  const y = 15;
  const words = getWords();

  return words.map(word => {
    const letters = word.split('');
    const fillerNeeded = x - word.length;
    const filler = [];
    while (filler.length < fillerNeeded) {
      filler.push(randomLetter());
    }

    return [...letters, ...filler];
  })
}