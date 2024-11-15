// // Check if the device is a touch device
// const isTouchDevice =
//   "ontouchstart" in window ||
//   navigator.maxTouchPoints > 0 ||
//   navigator.msMaxTouchPoints > 0;

// if (isTouchDevice) {
//   // Mobile version
//   let highestZ = 1;

//   class Paper {
//     holdingPaper = false;
//     touchStartX = 0;
//     touchStartY = 0;
//     touchMoveX = 0;
//     touchMoveY = 0;
//     prevTouchX = 0;
//     prevTouchY = 0;
//     velX = 0;
//     velY = 0;
//     rotation = Math.random() * 30 - 15;
//     currentPaperX = 0;
//     currentPaperY = 0;
//     rotating = false;

//     init(paper) {
//       paper.addEventListener("touchmove", (e) => {
//         e.preventDefault();
//         if (!this.rotating) {
//           this.touchMoveX = e.touches[0].clientX;
//           this.touchMoveY = e.touches[0].clientY;

//           this.velX = this.touchMoveX - this.prevTouchX;
//           this.velY = this.touchMoveY - this.prevTouchY;
//         }

//         if (this.holdingPaper) {
//           if (!this.rotating) {
//             this.currentPaperX += this.velX;
//             this.currentPaperY += this.velY;
//           }
//           this.prevTouchX = this.touchMoveX;
//           this.prevTouchY = this.touchMoveY;

//           paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//         }
//       });

//       paper.addEventListener("touchstart", (e) => {
//         if (this.holdingPaper) return;
//         this.holdingPaper = true;

//         paper.style.zIndex = highestZ;
//         highestZ += 1;

//         this.touchStartX = e.touches[0].clientX;
//         this.touchStartY = e.touches[0].clientY;
//         this.prevTouchX = this.touchStartX;
//         this.prevTouchY = this.touchStartY;
//       });

//       paper.addEventListener("touchend", () => {
//         this.holdingPaper = false;
//         this.rotating = false;
//       });

//       // For two-finger rotation
//       paper.addEventListener("gesturestart", (e) => {
//         e.preventDefault();
//         this.rotating = true;
//       });
//       paper.addEventListener("gestureend", () => {
//         this.rotating = false;
//       });
//     }
//   }

//   const papers = Array.from(document.querySelectorAll(".paper"));

//   papers.forEach((paper) => {
//     const p = new Paper();
//     p.init(paper);
//   });
// } else {
//   // Desktop version
//   function moveCard(e) {
//     const clickedPaper = e.target.closest(".paper");
//     if (!clickedPaper) return;

//     // Get the current stack of the clicked card
//     const currentStack = clickedPaper.parentElement;

//     // Get the last card (topmost card) in the current stack
//     const lastCard = currentStack.querySelector(".paper:last-child");

//     // If the clicked card is not the last card, do nothing
//     if (clickedPaper !== lastCard) {
//       return;
//     }

//     // Get the other stack
//     const otherStack =
//       currentStack.id === "stack1"
//         ? document.getElementById("stack2")
//         : document.getElementById("stack1");

//     // Move the last card to the other stack
//     otherStack.appendChild(lastCard);

//     // Update the positions of the cards in both stacks
//     updateStackPositions(currentStack);
//     updateStackPositions(otherStack);
//   }

//   function updateStackPositions(stack) {
//     const papers = stack.querySelectorAll(".paper");
//     papers.forEach((paper, index) => {
//       paper.style.top = `${index * 20}px`; // Stack the cards with a small gap between them
//     });
//   }

//   // Add event listeners for click events on the stacks
//   document.getElementById("stack1").addEventListener("click", moveCard);
//   document.getElementById("stack2").addEventListener("click", moveCard);

//   // Initially update positions for both stacks
//   updateStackPositions(document.getElementById("stack1"));
//   updateStackPositions(document.getElementById("stack2"));
// }

// Desktop version
function moveCard(e) {
  const clickedPaper = e.target.closest(".paper");
  if (!clickedPaper) return;

  // Get the current stack of the clicked card
  const currentStack = clickedPaper.parentElement;

  // Get the last card (topmost card) in the current stack
  const lastCard = currentStack.querySelector(".paper:last-child");

  // If the clicked card is not the last card, do nothing
  if (clickedPaper !== lastCard) {
    return;
  }

  // Get the other stack
  const otherStack =
    currentStack.id === "stack1"
      ? document.getElementById("stack2")
      : document.getElementById("stack1");

  // Move the last card to the other stack
  otherStack.appendChild(lastCard);

  // Update the positions of the cards in both stacks
  updateStackPositions(currentStack);
  updateStackPositions(otherStack);
}

function updateStackPositions(stack) {
  const papers = stack.querySelectorAll(".paper");
  papers.forEach((paper, index) => {
    paper.style.top = `${index * 20}px`; // Stack the cards with a small gap between them
  });
}

// Add event listeners for click events on the stacks
document.getElementById("stack1").addEventListener("click", moveCard);
document.getElementById("stack2").addEventListener("click", moveCard);

// Initially update positions for both stacks
updateStackPositions(document.getElementById("stack1"));
updateStackPositions(document.getElementById("stack2"));
