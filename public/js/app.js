// js/app.js

import { addFlashcard, getAllFlashcards } from './flashcardModel.js';

// فلش‌کارت‌های اولیه
addFlashcard("ありがとう", "ありがとう", "تشکر", "ありがとうございます。");
addFlashcard("学校", "がっこう", "مدرسه", "私は学校に行きます。");

// نمایش فلش‌کارت‌ها در صفحه
const flashcardContainer = document.getElementById("flashcard-container");

function displayFlashcards() {
  const flashcards = getAllFlashcards();
  flashcards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('flashcard');
    cardElement.innerHTML = `
      <h3>${card.word} (${card.hiragana})</h3>
      <p><strong>Meaning:</strong> ${card.meaning}</p>
      <p><strong>Example:</strong> ${card.example}</p>
      <p><strong>Views:</strong> ${card.views}</p>
      <p><strong>Last Reviewed:</strong> ${new Date(card.lastReviewed).toLocaleString()}</p>
    `;
    flashcardContainer.appendChild(cardElement);
  });
}

// نمایش فلش‌کارت‌ها هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", displayFlashcards);
