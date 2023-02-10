const CANVAS_HEIGHT = 768;
const CANVAS_WIDTH = 1280;

const NUMBER_OF_TILES_IN_ROW = 20;

const ENEMIES_OFFSET = 150;

const BUILDING_COST = 50;
const BUILDING_AMMO = 10;

const buildings = [];
const enemies = [];
let enemyCount = 0;
let livesCount = 10;
let coins = 300;
let enemyKills = 0;
let animationId;
let activeTile;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

//changing placementTilesData into 2D array.
const placementTilesData2D = [];
for (let i = 0; i < placementTilesData.length; i += NUMBER_OF_TILES_IN_ROW) {
  placementTilesData2D.push(placementTilesData.slice(i, i + NUMBER_OF_TILES_IN_ROW));
}

//loading placementTiles array.
const placementTiles = [];
placementTilesData2D.forEach((row, indexY) => {
  row.forEach((symbol, indexX) => {
    if (symbol === 1) {
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

//mouse coordinates.
const mouse = {
  x: undefined,
  y: undefined,
};

/**
 * spawns enemies according to the spawn count.
 * @param {number} spawnCount 
 */
function spawnEnemies(spawnCount) {
  for (let i = 1; i < (spawnCount+1); i++) {
    const xOffset = i * ENEMIES_OFFSET;

    //adding enemies with their initial position.
    enemies.push(
      new Enemy((position = { x: waypoints[0].x - xOffset, y: waypoints[0].y }))
    );
  }
}
spawnEnemies(enemyCount);

//event listener for mousemove
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  //loops through placementTiles array and sets activeTile if the condition fulfills.
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

//click event handler on canvas.
canvas.addEventListener("click", () => {
  if (activeTile && !activeTile.isOccupied && coins - BUILDING_COST >= 0) {
    coins -= BUILDING_COST;
    document.querySelector('.resouces__coins__count').innerHTML = coins;

    buildings.push(
      new Building({
        position: {
          x: activeTile.position.x,
          y: activeTile.position.y,
        },
        activeTile
      })
    );

    //sets active tile to occupied if the building is already placed.
    //It prevents from adding building to the tile where the building already exists.
    activeTile.isOccupied = true;
  }
});

/**
 * loops the enemies array and updates its position.
 */
function updateEnemies() {
  // looping enemies array to update their position
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();

    //checks if the x position of enemy is bigger than width of the canvas.
    if (enemy.position.x > CANVAS_WIDTH) {
      //reducing life by one count.
      livesCount -= 1; 
      document.querySelector('.resources__lives__count').innerHTML = livesCount;
      enemies.splice(i, 1);

      //stops animation/movement if the lives count reaches 0.
      if (livesCount === 0) {
        cancelAnimationFrame(animationId);
      }
    }

  }
}

/**
 * spawn new enemies if all the existing enemies are killed.
 */
function respawnEnemies() {
  if (enemies.length === 0) {
    enemyCount += 2;
    spawnEnemies(enemyCount)
  };
}

function animate() {
  animationId = requestAnimationFrame(animate);

  ctx.drawImage(gameMapImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  updateEnemies();
  
  respawnEnemies();


  placementTiles.forEach((tile) => {
    tile.update(mouse);
  });

  buildings.forEach((building, index) => {
    building.update();
    building.target = null;

    const validateEnemies = enemies.filter((enemy) => {
      const xDifference = enemy.position.x - building.center.x;
      const yDifference = enemy.position.y - building.center.y;
      const distance = Math.hypot(xDifference, yDifference);
      return distance < building.radius; // + enemy.radius;
    });

    building.target = validateEnemies[0];

    for (let i = building.projectiles.length - 1; i >= 0; i--) {
      const projectile = building.projectiles[i];

      projectile.update();

      const xDifference = projectile.enemy.position.x - projectile.position.x;
      const yDifference = projectile.enemy.position.y - projectile.position.y;
      const distance = Math.hypot(xDifference, yDifference);

      //condition check when projectile hits enemy.
      if (distance < projectile.enemy.radius + projectile.radius) {
        projectile.enemy.health -= 20;

        //enemy is removed if its health is smaller or equal to 0.
        if (projectile.enemy.health <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return projectile.enemy === enemy;
          });

          //condition check to prevent deletion of wrong enemy
          //enemyIndex is -1 if enemyIndex returns false
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            coins += 25;
            enemyKills++;
            document.querySelector('.kills__count').innerHTML = enemyKills;
            document.querySelector('.resouces__coins__count').innerHTML = coins;
          }
            
        }

        building.projectileCount++;

        //destroys tower/building after it shoots certain number of projectiles.
        if (building.projectileCount === BUILDING_AMMO) {
          buildings.splice(index, 1);

          //sets the occupied status to false so that we can place the building on same place again.
          building.activeTile.isOccupied = false;
        }
        
        building.projectiles.splice(i, 1);
       }
    }
  });
}

animate();


