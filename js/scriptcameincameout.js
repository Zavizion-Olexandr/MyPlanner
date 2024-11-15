// Імітуємо стан користувача - залогінений чи ні
const isLoggedIn = false; // Змініть на true для тестування залогіненого стану

const greeting = document.getElementById("greeting");
const logoutBtn = document.getElementById("logoutBtn");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");

if (isLoggedIn) {
  greeting.classList.remove("hidden"); // Відображаємо привітання
  logoutBtn.classList.remove("hidden"); // Відображаємо кнопку виходу
  loginLink.classList.add("hidden"); // Ховаємо посилання для входу
  registerLink.classList.add("hidden"); // Ховаємо посилання для реєстрації
} else {
  greeting.classList.add("hidden"); // Ховаємо привітання
  logoutBtn.classList.add("hidden"); // Ховаємо кнопку виходу
  loginLink.classList.remove("hidden"); // Відображаємо посилання для входу
  registerLink.classList.remove("hidden"); // Відображаємо посилання для реєстрації
}
