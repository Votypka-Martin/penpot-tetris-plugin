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
    card.name = "Výsledky";
    card.resize(300, 480);
    card.x = centerX - 150;
    card.y = centerY - 240;
    card.fills = [{ fillColor: "#1e1e2e", fillOpacity: 1 }];
    card.borderRadius = 12;

    const title = penpot.createText("GAME OVER");
    if (title) {
      title.name = "Nadpis";
      title.fontSize = 22;
      title.x = centerX - 65;
      title.y = centerY - 210;
      title.fills = [{ fillColor: "#f38ba8", fillOpacity: 1 }];
    }

    const scoreText = penpot.createText(`Skóre: ${score}   |   Řádky: ${lines}`);
    if (scoreText) {
      scoreText.name = "Skóre";
      scoreText.fontSize = 14;
      scoreText.x = centerX - 105;
      scoreText.y = centerY - 170;
      scoreText.fills = [{ fillColor: "#cdd6f4", fillOpacity: 1 }];
    }

    const boardImg = penpot.createRectangle();
    boardImg.name = "Konečné uspořádání kostek";
    boardImg.resize(200, 320); boardImg.x = centerX - 100;
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