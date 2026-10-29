penpot.ui.open("Tetris", "index.html", {
  width: 340,
  height: 560
});

const TETRIS_COLORS = [
  null, 
  '#f38ba8', '#fab387', '#f9e2af', '#a6e3a1', '#74c7ec', '#b4befe', '#cba6f7'  ];

penpot.ui.onMessage(async (message) => {
  if (message.type === "game-over") {
    const { score, lines, boardData } = message;

    const centerX = penpot.viewport.center.x;
    const centerY = penpot.viewport.center.y;

    const card = penpot.createRectangle();
    card.name = "Tetris - Výsledková karta";
    card.resize(260, 430);
    card.x = centerX - 130;
    card.y = centerY - 215;
    card.fills = [{ fillType: "solid", fillColor: "#1e1e2e", fillOpacity: 1 }];
    card.borderRadius = 12;

    const title = penpot.createText("GAME OVER");
    if (title) {
      title.name = "Nadpis";
      title.fontSize = 20;
      title.x = centerX - 58;
      title.y = centerY - 190;
      title.fills = [{ fillType: "solid", fillColor: "#f38ba8", fillOpacity: 1 }];
    }

    const scoreText = penpot.createText(`Skóre: ${score}   |   Řádky: ${lines}`);
    if (scoreText) {
      scoreText.name = "Skóre";
      scoreText.fontSize = 12;
      scoreText.x = centerX - 95;
      scoreText.y = centerY - 155;
      scoreText.fills = [{ fillType: "solid", fillColor: "#cdd6f4", fillOpacity: 1 }];
    }

    const BLOCK_SIZE = 16; const startX = centerX - (10 * BLOCK_SIZE) / 2; const startY = centerY - 120; 
    const boardBg = penpot.createRectangle();
    boardBg.name = "Hrací plocha - pozadí";
    boardBg.resize(10 * BLOCK_SIZE, 16 * BLOCK_SIZE);
    boardBg.x = startX;
    boardBg.y = startY;
    boardBg.fills = [{ fillType: "solid", fillColor: "#11111b", fillOpacity: 1 }];
    boardBg.borderRadius = 4;

    if (boardData && Array.isArray(boardData)) {
      boardData.forEach((row, y) => {
        row.forEach((cellValue, x) => {
          if (cellValue > 0) {
            const block = penpot.createRectangle();
            block.name = `Kostka [${x},${y}]`;
            block.resize(BLOCK_SIZE - 1, BLOCK_SIZE - 1); block.x = startX + (x * BLOCK_SIZE);
            block.y = startY + (y * BLOCK_SIZE);
            block.fills = [{ 
              fillType: "solid", 
              fillColor: TETRIS_COLORS[cellValue] || '#ffffff', 
              fillOpacity: 1 
            }];
            block.borderRadius = 2;
          }
        });
      });
    }
  }
});