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

  window.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && event.target !== createTaskBtn) {
      modal.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.querySelector(".custom-calendar");
  const monthTitle = document.querySelector(".month-title");
  const prevMonthButton = document.querySelector(".prev-month-button");
  const nextMonthButton = document.querySelector(".next-month-button");

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  function generateCalendar(year, month) {
    calendarContainer.querySelector("table").innerHTML = ""; // Очищаем таблицу

    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Обновляем заголовок месяца
    monthTitle.textContent = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    // Создаем заголовок таблицы для дней недели
    const tableHeader = document.createElement("tr");
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
      const th = document.createElement("th");
      th.textContent = day;
      tableHeader.appendChild(th);
    });
    calendarContainer.querySelector("table").appendChild(tableHeader);

    // Заполняем таблицу днями месяца
    let currentRow = document.createElement("tr");
    for (let i = 1; i <= daysInMonth; i++) {
      const dateCell = document.createElement("td");
      dateCell.textContent = i;
      currentRow.appendChild(dateCell);

      // Обработка клика на каждый день
      dateCell.addEventListener("click", function () {
        console.log(`You clicked on day ${i}`);
      });

      if (new Date(year, month, i).getDay() === 6 || i === daysInMonth) {
        calendarContainer.querySelector("table").appendChild(currentRow);
        currentRow = document.createElement("tr");
      }
    }
  }

  // Обработка кликов на кнопки переключения месяцев
  prevMonthButton.addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
  });

  nextMonthButton.addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
  });

  // Генерация календаря на текущий месяц при загрузке страницы
  generateCalendar(currentYear, currentMonth);
});
