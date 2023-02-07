const CANVAS_HEIGHT = 768;
const CANVAS_WIDTH = 1280;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

//changing placementTilesData into 2D array.
const placementTilesData2D = [];
for (let i = 0; i < placementTilesData.length; i += 20) {
  placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

const placementTiles = [];
placementTilesData2D.forEach((row, indexY) => {
  row.forEach((symbol, indexX) => {
    if (symbol === 14) {
      placementTiles.push(
        new PlacementTile({
          position: {
            x: indexX * 64,
            y: indexY * 64,
          },
        })
      );
    }
  });
});

//background image for canvas.
const gameMapImage = new Image();
gameMapImage.onload = () => {
  ctx.drawImage(gameMapImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};
gameMapImage.src = "assets/game-map.png";

const enemies = [];
for (let i = 1; i < 10; i++) {
  const xOffset = i * 150;
  enemies.push(
    new Enemy((position = { x: waypoints[0].x - xOffset, y: waypoints[0].y }))
  );
}

const mouse = {
  x: undefined,
  y: undefined,
};

const buildings = [];

function animate() {
  requestAnimationFrame(animate);
  // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(gameMapImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // looping enemies array to update their position
  enemies.forEach((enemy) => {
    enemy.update();
  });

  placementTiles.forEach((tile) => {
    tile.update(mouse);
  });

  buildings.forEach((building) => {
    building.update();
    building.target = null;

    const validateEnemies = enemies.filter(enemy => {
      const xDifference = enemy.position.x - building.position.x;
      const yDifference = enemy.position.y - building.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      return distance < enemy.radius + building.radius;
    })

    building.target = validateEnemies[0];
    
    for (let i = building.projectiles.length - 1; i >= 0; i--) {
      const projectile = building.projectiles[i];
      console.log(projectile.radius)

      projectile.update();

      const xDifference = projectile.enemy.position.x - projectile.position.x;
      const yDifference = projectile.enemy.position.y - projectile.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      
      if (distance < projectile.enemy.radius + projectile.radius) {
        building.projectiles.splice(i, 1);
      }
      console.log(distance);
    }
  })

}

animate();

let activeTile;
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  for (let i = 0; i <= placementTiles.length - 1; i++) {
    const tile = placementTiles[i];

    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile;
      break;
    }
  }
});

canvas.addEventListener('click', () => {
  if (activeTile && !activeTile.isOccupied) {
    buildings.push(new Building({
      position: {
        x: activeTile.position.x,
        y: activeTile.position.y
      }
    }))
    activeTile.isOccupied = true;
  }
})
