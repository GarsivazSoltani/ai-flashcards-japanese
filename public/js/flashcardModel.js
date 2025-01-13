// js/flashcardModel.js

let flashcards = [];

// افزودن فلش‌کارت جدید
export function addFlashcard(word, hiragana, meaning, example) {
  const newFlashcard = {
    word: word,
    hiragana: hiragana,
    meaning: meaning,
    example: example,
    views: 0,
    lastReviewed: Date.now()
  };
  flashcards.push(newFlashcard);
}

// گرفتن تمام فلش‌کارت‌ها
export function getAllFlashcards() {
  return flashcards;
}

// بروزرسانی اطلاعات آخرین بازبینی
export function updateLastReviewed(index) {
  flashcards[index].lastReviewed = Date.now();
  flashcards[index].views += 1;
}
