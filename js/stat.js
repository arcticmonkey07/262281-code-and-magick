'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TEXT_WIDTH = 50;
  var TEXT_TOP = 65;
  var BAR_HEIGHT = CLOUD_HEIGHT - GAP - TEXT_TOP - TEXT_WIDTH - GAP;
  var barGap = 80;
  var barWidth = 40;

  // отрисовывает окно
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // находит максимальный элемент
  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 125, 45);
    ctx.fillText('Список результатов:', 125, 65);

    var maxTime = getMaxElement(times);

    // отрисовывает имена и очки
    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + GAP + barWidth + barGap * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + barWidth + barGap * i, (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) + 90);
    }

    // отрисовывает столбики
    for (i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = randomColor();
      }
      ctx.fillRect(CLOUD_X + GAP + barWidth + barGap * i, (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) + 100, barWidth, (BAR_HEIGHT * times[i]) / maxTime);
    }

    // Выводит случайный цвет
    function randomColor() {
      var r = 20;
      var g = Math.floor(Math.random() * (256));
      var b = 255;
      var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      return c;
    }
  };
})();
