"use strict";
// DIMENSIONS IN 'PX'
const ROOM_HEIGHT = 500;
const ROOM_WIDTH = 500;
const NUMBER_OF_BOXES = 2;
const BOX = { height: 150, width: 150 };

function initializeStructure() {
  // experimental
  let box1, box2;
  let incrementX = 15; //increament must be less than box-width
  let incrementY = 8;
  let marginLeftOfBox1, marginLeftOfBox2; // = Math.floor(Math.random() * 450);
  let marginTopOfBox1, marginTopOfBox2; // = Math.floor(Math.random() * 450);
  let directionX = 1;
  let directionY = 1;
  let leftMost, topMost;
  let box1Coordinates = {},
    box2Coordinates = {},
    boxObj1 = {},
    boxObj2 = {};
  //
  let roomEl = document.createElement("div");
  roomEl.setAttribute("class", "room");
  roomEl.style.width = ROOM_WIDTH + "px";
  roomEl.style.height = ROOM_HEIGHT + "px";
  document.body.appendChild(roomEl);
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let boxEl = document.createElement("div");
    boxEl.setAttribute("class", `box box-${i + 1}`);
    roomEl.appendChild(boxEl);
    setBoxStyles(boxEl);
  }
  box1 = document.querySelector('.box-1');
  box2 = document.querySelector('.box-2');
  (function () {
    return spawnBoxes(box1, boxObj1);
  })();
function checkOverlaps(box1, box2) {
  box1Coordinates, box2Coordinates;
  console.log(typeof(box1Coordinates), "at checkoverlaps");
  console.log(typeof(box2Coordinates), "at checkoverlaps");
  let leftMostBox = findLeftMostBox(box1, box2);
  let rightMostBox = leftMostBox == box1 ? box2 : box1;
  let topMostBox = findTopMostBox(box1, box2);
  let bottomMostBox = topMostBox == box1 ? box2 : box1;
  let cssStyleObjectOfLeftMostBox = window.getComputedStyle(leftMostBox);
  let cssStyleObjectOfRightMostBox = window.getComputedStyle(rightMostBox);
  let cssStyleObjectOfTopMostBox = window.getComputedStyle(topMostBox);
  let cssStyleObjectOfBottomMostBox = window.getComputedStyle(bottomMostBox);
  let leftbox = cssStyleObjectOfLeftMostBox
    .getPropertyValue("margin-left")
    .split("px")[0];
  let rightbox = cssStyleObjectOfRightMostBox
    .getPropertyValue("margin-left")
    .split("px")[0];
  let topbox = cssStyleObjectOfTopMostBox
    .getPropertyValue("margin-top")
    .split("px")[0];
  let bottombox = cssStyleObjectOfBottomMostBox
    .getPropertyValue("margin-top")
    .split("px")[0];
  console.log("rightmost box start at", rightbox);
  console.log("leftmost box start at", leftbox);
  console.log("topmost box start at", topbox);
  console.log("bottommost box start at", bottombox);
  if (rightbox - leftbox <= BOX.width) console.log("overlapped at X");
  if (bottombox - topbox <= BOX.height) console.log("overlapped at Y");
  if (rightbox - leftbox <= BOX.width && bottombox - topbox <= BOX.height) {
    console.log("HUI HUI OVERLAP");
    return true;
  }
}
function findLeftMostBox(box1, box2) {
  console.log(typeof(box1Coordinates), "at findleftmostbox");
  console.log(typeof(box2Coordinates), "at findleftmostbox");
  let cssStyleObjectOfBox1 = window.getComputedStyle(box1);
  let cssStyleObjectOfBox2 = window.getComputedStyle(box2);
  box1Coordinates.x = cssStyleObjectOfBox1.getPropertyValue("margin-left");
  box2Coordinates.x = cssStyleObjectOfBox2.getPropertyValue("margin-left");
  console.log(
    box1Coordinates.x.split("px")[0] < box2Coordinates.x.split("px")[0]
      ? "Box-1 is leftmost"
      : "Box-2 is leftmost"
  );
  return box1Coordinates.x.split("px")[0] < box2Coordinates.x.split("px")[0]
    ? box1
    : box2;
}
function findTopMostBox(box1, box2) {
  let cssStyleObjectOfBox1 = window.getComputedStyle(box1);
  let cssStyleObjectOfBox2 = window.getComputedStyle(box2);
  box1Coordinates.y = cssStyleObjectOfBox1.getPropertyValue("margin-top");
  box2Coordinates.y = cssStyleObjectOfBox2.getPropertyValue("margin-top");
  console.log(
    box1Coordinates.y.split("px")[0] > box2Coordinates.y.split("px")[0]
      ? "Box-1 is topmost"
      : "Box-2 is topmost"
  );
  return box1Coordinates.y.split("px")[0] < box2Coordinates.y.split("px")[0]
    ? box1
    : box2;
}
(function createClosure(){
  box1Coordinates, box2Coordinates;
   while (checkOverlaps(box1, box2)) {
    spawnBoxes(box1, boxObj1), spawnBoxes(box2, boxObj2);
  }
})();
}
function spawnBoxes(box, boxObj) {
  box = document.getElementsByClassName("box")[0];
  box.textContent = "BOX ";
  box.style.marginLeft = Math.floor(Math.random() * ROOM_WIDTH) + "px";
  boxObj.marginLeftOfBox = box.style.marginLeft.split("px")[0];
  box.style.marginTop = Math.floor(Math.random() * ROOM_HEIGHT) + "px";
  boxObj.marginTopOfBox = box.style.marginTop.split("px")[0];
  // box2 = document.getElementsByClassName("box-2")[0];
  // box2.textContent = "BOX 2";
  // box2.style.marginLeft = Math.floor(Math.random() * ROOM_WIDTH) + "px";
  // boxObj2.marginLeftOfBox = box2.style.marginLeft.split("px")[0];
  // box2.style.marginTop = Math.floor(Math.random() * ROOM_HEIGHT) + "px";
  // boxObj2.marginTopOfBox = box2.style.marginTop.split("px")[0];
}
function setBoxStyles(boxEl) {
  boxEl.style.width = BOX.width + "px";
  boxEl.style.height = BOX.height + "px";
}
function translateBox(boxEl, x, y) {
  boxEl.style.marginLeft = "";
}
function translateBoxInXAxis(box, boxObj) {
  if (box.style.marginLeft.split("px")[0] >= ROOM_WIDTH - BOX.width) {
    directionX = -1;
  } else if (box.style.marginLeft.split("px")[0] <= 0) {
    directionX = 1;
  }
  //  boxObj.marginLeftOfBox = box.style.marginLeft.split("px")[0];
  boxObj.marginLeftOfBox = boxObj.marginLeftOfBox + incrementX * directionX;
  box.style.marginLeft = boxObj.marginLeftOfBox + "px";
}
function translateBoxInYAxis(box, boxObj) {
  // console.log(box.style.marginTop, 'vertical');
  if (box.style.marginTop.split("px")[0] >= ROOM_WIDTH - BOX.width) {
    //marginTop comapre till 500
    directionY = -1;
  } else if (box.style.marginTop.split("px")[0] <= 0) {
    directionY = 1;
  }
  boxObj.marginTopOfBox = box.style.marginTop.split("px")[0];
  boxObj.marginTopOfBox = boxObj.marginTopOfBox + incrementY * directionY;
  box.style.marginTop = boxObj.marginTopOfBox + "px";
}
initializeStructure();
setInterval(() => {
  translateBoxInXAxis(box1, boxObj1);
}, 2000);