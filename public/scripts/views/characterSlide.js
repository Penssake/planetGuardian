'use strict';

// (function(module) {
//   function Character(charactersData) {
//     Object.keys(charactersData).forEach(key => [key] = )
//   }
// })

(function (module) {

  function DisplayCharacter(charactersObj) {
    this.name = charactersObj.name;
    this.img = charactersObj.img;
    this.description = charactersObj.description;
    // var currentCharacter = [];
    // currentCharacter.push(this);
  }

  DisplayCharacter.prototype.toHTML = function () {
    var renderDisplayCharacter = Handlebars.compile($('#entry-template').text());
    return renderDisplayCharacter(this);
  }

  $.getJSON('/data/characters.json', function (charactersData) {
    charactersData.map(function (charactersObject) {
      let characters = new DisplayCharacter(charactersObject);
      $('#characterSlot').append(characters.toHTML());
      // DisplayCharacter(charactersObj);
    });
  });

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  });

}(window));
