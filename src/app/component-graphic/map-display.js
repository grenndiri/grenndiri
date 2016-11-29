import './map-display.scss';


class MapDisplayController {
  $onInit() {
    this.loadImg()
  }

  loadImg() {

    // Two Dimensional Array storing our isometric map layout. Each number represents a tile.
    var map = [
      [1,0,0,0],
      [1,0,0,1],
      [0,0,1,1],
      [1,1,1,1]
    ];

    // Images to be loaded and used.
    // Tutorial Note: As water is loaded first it will be represented by a 0 on the map and land will be a 1.
    var tileGraphics = [];

    var tileGraphicsToLoad = ["./images/water.png","./images/land.png"],
            tileGraphicsLoaded = 0;

    for (var i = 0; i < tileGraphicsToLoad.length; i++) {
      tileGraphics[i] = new Image();
      tileGraphics[i].src = tileGraphicsToLoad[i];
      tileGraphics[i].onload = function() {
        // Once the image is loaded increment the loaded graphics count and check if all images are ready.
        tileGraphicsLoaded++;
        if (tileGraphicsLoaded === tileGraphicsToLoad.length) {
          //code à mettre dans une fonction
          // create the canvas context
          var ctx = document.getElementById('main').getContext('2d');

          // Set as your tile pixel sizes, alter if you are using larger tiles.
          var tileH = 25;
          var tileW = 52;

          // mapX and mapY are offsets to make sure we can position the map as we want.
          var mapX = 76;
          var mapY = 52;

          var drawTile;

          // loop through our map and draw out the image represented by the number.
          for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
              drawTile = map[i][j];
              // Draw the represented image number, at the desired X & Y coordinates followed by the graphic width and height.
              ctx.drawImage(tileGraphics[drawTile], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
            }
          }
        }
      }
    }

  }
}

export const mapDisplayComponent = {
  template: require('./map-display.html'),
  controller: MapDisplayController
}
