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
    this.name = charactersObj.name;
    this.img = charactersObj.img;
    this.description = charactersObj.description;
    var currentCharacter = [];
    currentCharacter.push(this);
  };
}(window));
