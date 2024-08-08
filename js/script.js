document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");

  burgerMenu.addEventListener("click", function () {
    sidebar.style.width = "250px";
  });

  closeBtn.addEventListener("click", function () {
    sidebar.style.width = "0";
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== burgerMenu) {
      sidebar.style.width = "0";
    }
  });

  const modal = document.getElementById("task-modal");
  const closeModal = document.querySelector(".close-modal");
  const createTaskBtn = document.getElementById("create-task-btn");

  createTaskBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Закрытие модального окна при клике вне его области
  window.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && event.target !== createTaskBtn) {
      modal.classList.remove("show");
    }
  });
});
