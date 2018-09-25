'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupOpen = document.querySelector('.setup-open');
  window.setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = window.setup.querySelector('.setup-user-name');
  var topSetupPosition = window.setup.style.top;
  var leftSetupPosition = window.setup.style.left;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    window.setup.style.top = topSetupPosition;
    window.setup.style.left = leftSetupPosition;
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userNameInput.onfocus = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

})();
