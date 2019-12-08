/* Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. You should 
return an array of all the anagrams or an empty array if there are none. 

For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] */


function anagram(word, wordArrayList){
  return wordArrayList.filter(function(wordOfArray){
    return wordOfArray.split("").sort().join("") === word.split("").sort().join("")
  })
}


anagram('abba', ['abba', 'abcd', 'bbaa', 'dada']) 
anagram('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 
