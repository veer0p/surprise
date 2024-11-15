// Function to move the topmost card (last card added) between stacks when clicked
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

  // Get the other stack (the one where the card will move to)
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

// Function to update the positions of the cards in the stack
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
