// تابع برای نمایش کارت‌های فلش
export function renderFlashcard(flashcard) {
    const flashcardElement = document.createElement("div");
    flashcardElement.classList.add("flashcard");
  
    // نمایش سوال (kanji)
    flashcardElement.innerHTML = `
      <div class="flashcard-question">${flashcard.question}</div>
      <div class="flashcard-answer" style="display: none;">${flashcard.answer}</div>
    `;
  
    // ایجاد افکت برای نمایش جواب با کلیک
    flashcardElement.addEventListener("click", function () {
      const answerElement = flashcardElement.querySelector(".flashcard-answer");
      if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
      } else {
        answerElement.style.display = "none";
      }
    });
  
    return flashcardElement;
  }
  