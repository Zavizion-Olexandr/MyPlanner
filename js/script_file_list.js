// Отримуємо елементи
const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Відкриває модальне вікно при натисканні на кнопку
openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// Закриває модальне вікно при натисканні на кнопку закриття
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриває модальне вікно при натисканні поза його межами
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
