'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content;


  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var charCount = 4;

  function getCharacterAttribute(arr) {
    var randInt = Math.floor(Math.random() * arr.length);
    return arr[randInt];
  }

  function getCharacters() {
    var charArr = [];
    for (var i = 0; i < charCount; i++) {
      charArr.push({
        name: getCharacterAttribute(names) + ' ' + getCharacterAttribute(lastNames),
        coatColor: getCharacterAttribute(coatColors),
        eyeColor: getCharacterAttribute(eyesColors),
      });
    }
    return charArr;
  }

  var wizards = getCharacters();

  function renderWizards() {
    for (var i = 0; i < charCount; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;

      similarListElement.appendChild(wizardElement);
    }
  }
  renderWizards();
})();
