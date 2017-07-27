'use strict';

// (function(module) {
//   function Character(charactersData) {
//     Object.keys(charactersData).forEach(key => [key] = )
//   }
// })

(function(module) {

  let charactersArray = [];
  $.getJSON('/data/characters.json', function(characters) {
    characters.forEach(function(charactersDataObject) {
      charactersArray.push(characters);
      console.log(charactersArray);
      // DisplayCharacter(charactersObj);
    });
  });

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });

  function DisplayCharacter(characters) {
    // console.log(charactersObj);
    // charactersObj.name = name;
    // charactersObj.img = img;
    // charactersObj.description = description;
    // var currentCharacter = [];
    // currentCharacter.push(this);
    console.log('hey');
  };
  DisplayCharacter(characters);
}(window));
