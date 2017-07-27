'use strict';

// (function(module) {
//   function Character(charactersData) {
//     Object.keys(charactersData).forEach(key => [key] = )
//   }
// })

(function(module) {

  function DisplayCharacter(characters) {
    charactersArray.name = name;
    charactersArray.img = img;
    charactersArray.description = description;
    // var currentCharacter = [];
    // currentCharacter.push(this);
    console.log('hey');
  };

  DisplayCharacter.prototype.toHTML = function() {
    let renderDisplayCharacter = Handlebars.compile($('#entry-template').text());
    return renderDisplayCharacter(this);
  }

  $.getJSON('/data/characters.json', function(charactersData) {
    charactersData.map(function(charactersObject) {
      let characters = new DisplayCharacter(charactersObject);
      $('#characterSlot').append(characters.toHTML());
      // DisplayCharacter(charactersObj);
    });
  });

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });

}(window));
