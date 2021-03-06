/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600; // x-positie van vijand
var vijandY = 200; // y-positie van vijand
var vijandX1 = 450;
var vijandX2 = 750;
var spelerHealth = 100; //health van speler
var vijandHealth = 100; //health van vijand
var punten = 0;


var LEFT_KEY = 37; //pijltje links
var RIGHT_KEY = 39;//pijltje rechts
var UP_KEY = 38;// pijltje omhoog
var DOWN_KEY = 40;//pijltje omlaag
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 20

  if (vijandY > 721) {
    vijandY = 0;
  }
  // kogel

  // speler
  if (keyIsDown(LEFT_KEY)) {
    spelerX = spelerX - 20;

  };
  if (keyIsDown(RIGHT_KEY)) {
    spelerX = spelerX + 20;
  };
  if (keyIsDown(DOWN_KEY)) {
    spelerY = spelerY + 20;
  }
  if (keyIsDown(UP_KEY)) {
    spelerY = spelerY - 20;
  };
  if (spelerX < 0) {
    spelerX = 1280;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }
  if (spelerX > 1280) {
    spelerX = 0;
  }

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (
    (vijandX - spelerX) < 50 &&
    (vijandX - spelerX) > -50 &&
    (vijandY - spelerY) < 50 &&
    (vijandY - spelerY) > -50
  ) {
    console.log("botsing")
    {spelerHealth = spelerHealth - 1}
  }
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("black");
  rect(0, 0, 1280, 720);

  // vijand
 for (var i=0; i=3; i=i+1) {
  fill("red");
  rect(vijandX +i*200 - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);
 }

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  fill("white");
textSize(50);
text("HP = " + spelerHealth, 100, 100);

  if (spelStatus === SPELEN) {
   fill("white");
textSize(50);
text("punten = " + punten, 100, 200);
  }
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerHealth < 1) {
    return true;
  } else {
     punten = punten + 1;
    return false;

  }
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt ????n keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
fill("skyblue")
textSize(40);
text("run opnieuw om nog een keer te spelen", 300, 300)
  }
}


