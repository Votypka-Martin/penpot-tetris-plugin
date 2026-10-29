penpot.ui.open("Tetris", "index.html", {
  width: 340,
  height: 560
});

penpot.ui.onMessage(async (message) => {
  if (message.type === "game-over") {
    const { score, lines, boardImageDataUrl } = message;

    const centerX = penpot.viewport.center.x;
    const centerY = penpot.viewport.center.y;

    const card = penpot.createRectangle();
    card.name = "Tetris - Výsledková karta";
    card.resize(320, 520);
    card.x = centerX - 160;
    card.y = centerY - 260;
    card.fills = [{ fillColor: "#1e1e2e", fillOpacity: 1 }];
    card.borderRadius = 12;

    const title = penpot.createText();
    title.name = "Nadpis";
    title.characters = "GAME OVER";
    title.fontSize = 24;
    title.fontId = "sans-serif";
    title.x = centerX - 80;
    title.y = centerY - 230;
    title.fills = [{ fillColor: "#f38ba8", fillOpacity: 1 }];

    const scoreText = penpot.createText();
    scoreText.name = "Skóre";
    scoreText.characters = `Skóre: ${score}\nŘádky: ${lines}`;
    scoreText.fontSize = 16;
    scoreText.x = centerX - 100;
    scoreText.y = centerY - 190;
    scoreText.fills = [{ fillColor: "#cdd6f4", fillOpacity: 1 }];

    const boardImg = penpot.createRectangle();
    boardImg.name = "Konečné uspořádání kostek";
    boardImg.resize(200, 320);     boardImg.x = centerX - 100;
    boardImg.y = centerY - 130;
    boardImg.fills = [
      {
        fillOpacity: 1,
        fillImage: {
          url: boardImageDataUrl
        }
      }
    ];
    boardImg.borderRadius = 6;
  }
});