'use strict';

(function (module) {

  function DisplayCharacter(charactersObj) {
    this.name = charactersObj.name;
    this.img = charactersObj.img;
    this.description = charactersObj.description;
  } DisplayCharacter.prototype.toHTML = function () {
    var renderDisplayCharacter = Handlebars.compile($('#entry-template').text());
    return renderDisplayCharacter(this);
  };
  $.getJSON('/data/characters.json', function (charactersData) {
    charactersData.map(function (charactersObject) {
      let characters = new DisplayCharacter(charactersObject);
      $('#characterSlot').append(characters.toHTML());
    });
  });

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  });

}(window));