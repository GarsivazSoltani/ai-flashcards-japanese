// داده‌های کارت‌ها
const flashcards = [
    { question: "こんにちは", answer: "سلام" },
    { question: "ありがとう", answer: "متشکرم" },
    { question: "おはよう", answer: "صبح بخیر" },
    { question: "さようなら", answer: "خداحافظ" },
    { question: "すみません", answer: "ببخشید" }
  ];
  
  // توابع مدل برای دسترسی به داده‌ها
  export function getAllFlashcards() {
    return flashcards;
  }
  
  export function getRandomFlashcard() {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    return flashcards[randomIndex];
  }
  