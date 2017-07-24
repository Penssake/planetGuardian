'use strict';

// (function(module) {
//   function Character(charactersData) {
//     Object.keys(charactersData).forEach(key => [key] = )
//   }
// })

(function(module) {
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    DisplayCharacter(charactersObj);
  });

  function DisplayCharacter(charactersObj) {
    console.log(charactersObj);
    charactersObj.name = name;
    charactersObj.img = img;
    charactersObj.description = description;
    var currentCharacter = [];
    currentCharacter.push(this);
  };
}(window));
