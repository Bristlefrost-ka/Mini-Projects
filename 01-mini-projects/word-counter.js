function countWords(sentence) {

  const words = sentence.trim().split(/\s+/);
  
  return sentence.trim() === "" ? 0 : words.length;
}

console.log(countWords("Hi")); 
