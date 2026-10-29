penpot.ui.open("Tetris", "index.html", {
  width: 340,
  height: 560
});

penpot.ui.onMessage(async (message) => {
  if (message.type === "game-over") {
    const { score, lines } = message;

    const centerX = penpot.viewport.center.x;
    const centerY = penpot.viewport.center.y;

    const card = penpot.createRectangle();
    card.name = "Výsledky";
    card.resize(300, 260);
    card.x = centerX - 150;
    card.y = centerY - 130;
    card.fills = [{ fillType: "solid", fillColor: "#1e1e2e", fillOpacity: 1 }];
    card.borderRadius = 12;

    const title = penpot.createText("GAME OVER");
    if (title) {
      title.name = "Nadpis";
      title.fontSize = 22;
      title.x = centerX - 65;
      title.y = centerY - 90;
      title.fills = [{ fillType: "solid", fillColor: "#f38ba8", fillOpacity: 1 }];
    }

    const scoreText = penpot.createText(`Skóre: ${score}   |   Řádky: ${lines}`);
    if (scoreText) {
      scoreText.name = "Skóre a statistiky";
      scoreText.fontSize = 14;
      scoreText.x = centerX - 105;
      scoreText.y = centerY - 30;
      scoreText.fills = [{ fillType: "solid", fillColor: "#cdd6f4", fillOpacity: 1 }];
    }
  }
});