penpot.ui.open("Tetris", "index.html", {
  width: 340,
  height: 560
});

penpot.ui.onMessage(async (message) => {
  if (message.type === "game-over") {
    const { score, lines } = message;

    const centerX = penpot.viewport.center.x;
    const centerY = penpot.viewport.center.y;

    const cardWidth = 320;
    const cardHeight = 220;
    const cardX = centerX - cardWidth / 2;
    const cardY = centerY - cardHeight / 2;

    const card = penpot.createRectangle();
    card.name = "Tetris - Výsledková karta";
    card.resize(cardWidth, cardHeight);
    card.x = cardX;
    card.y = cardY;
    card.fills = [{ fillType: "solid", fillColor: "#181825", fillOpacity: 1 }];
    card.borderRadius = 16;

    const badge = penpot.createText("PENPOT ARCADE");
    if (badge) {
      badge.name = "Štítek";
      badge.fontSize = 10;
      badge.x = cardX + 24;
      badge.y = cardY + 24;
      badge.fills = [{ fillType: "solid", fillColor: "#a6adc8", fillOpacity: 1 }];
    }

    const title = penpot.createText("GAME OVER");
    if (title) {
      title.name = "Nadpis";
      title.fontSize = 24;
      title.x = cardX + 24;
      title.y = cardY + 44;
      title.fills = [{ fillType: "solid", fillColor: "#f38ba8", fillOpacity: 1 }];
    }

    const scoreBox = penpot.createRectangle();
    scoreBox.name = "Box - Skóre";
    scoreBox.resize(130, 70);
    scoreBox.x = cardX + 24;
    scoreBox.y = cardY + 110;
    scoreBox.fills = [{ fillType: "solid", fillColor: "#313244", fillOpacity: 1 }];
    scoreBox.borderRadius = 10;

    const scoreLabel = penpot.createText("SKÓRE");
    if (scoreLabel) {
      scoreLabel.fontSize = 10;
      scoreLabel.x = cardX + 38;
      scoreLabel.y = cardY + 122;
      scoreLabel.fills = [{ fillType: "solid", fillColor: "#a6adc8", fillOpacity: 1 }];
    }

    const scoreValue = penpot.createText(`${score}`);
    if (scoreValue) {
      scoreValue.fontSize = 20;
      scoreValue.x = cardX + 38;
      scoreValue.y = cardY + 140;
      scoreValue.fills = [{ fillType: "solid", fillColor: "#fab387", fillOpacity: 1 }]; }

    const linesBox = penpot.createRectangle();
    linesBox.name = "Box - Řádky";
    linesBox.resize(130, 70);
    linesBox.x = cardX + 166;
    linesBox.y = cardY + 110;
    linesBox.fills = [{ fillType: "solid", fillColor: "#313244", fillOpacity: 1 }];
    linesBox.borderRadius = 10;

    const linesLabel = penpot.createText("DOKONČENÉ ŘÁDKY");
    if (linesLabel) {
      linesLabel.fontSize = 10;
      linesLabel.x = cardX + 180;
      linesLabel.y = cardY + 122;
      linesLabel.fills = [{ fillType: "solid", fillColor: "#a6adc8", fillOpacity: 1 }];
    }

    const linesValue = penpot.createText(`${lines}`);
    if (linesValue) {
      linesValue.fontSize = 20;
      linesValue.x = cardX + 180;
      linesValue.y = cardY + 140;
      linesValue.fills = [{ fillType: "solid", fillColor: "#a6e3a1", fillOpacity: 1 }]; }
  }
});