(function (alias) {
  "use strict";

  const IMAGES = ["up", "down", "left"];

  Graphics.startLoading = function () {
    let img = IMAGES[Math.randomInt(IMAGES.length)];
    img = "img/pictures/" + img + ".png";
    Graphics.setLoadingImage(img);
    alias.call(this);
  };
})(Graphics.startLoading);
