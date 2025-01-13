import { getRandomFlashcard } from "../models/flashcards.js";
import { renderFlashcard } from "../views/flashcardView.js";

export function displayRandomFlashcard() {
  const flashcard = getRandomFlashcard();
  const flashcardElement = renderFlashcard(flashcard);
  document.getElementById("flashcard-container").appendChild(flashcardElement);
}

export function displayMultipleFlashcards(count) {
  for (let i = 0; i < count; i++) {
    displayRandomFlashcard();
  }
}
