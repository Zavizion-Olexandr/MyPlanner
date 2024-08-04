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
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close-modal");

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрытие на любую точку //
  // window.addEventListener("click", (event) => {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // });
});
