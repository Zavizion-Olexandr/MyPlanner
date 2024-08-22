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

document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.querySelector(".calendar__custom");
  const monthTitle = document.querySelector(".calendar__month-title");
  const prevMonthButton = document.querySelector(".calendar__prev-button");
  const nextMonthButton = document.querySelector(".calendar__next-button");

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  function generateCalendar(year, month) {
    const table = calendarContainer.querySelector(".calendar__table");
    table.innerHTML = ""; // Очищаем таблицу

    const date = new Date(year, month);
    const firstDayIndex = new Date(year, month, 1).getDay(); // День недели для 1-го числа месяца
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
    table.appendChild(tableHeader);

    // Заполняем таблицу днями месяца
    let currentRow = document.createElement("tr");

    // Заполнение пустых ячеек перед первым днем месяца
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }

    // Заполнение днями месяца
    for (let i = 1; i <= daysInMonth; i++) {
      const dateCell = document.createElement("td");
      dateCell.textContent = i;
      currentRow.appendChild(dateCell);

      // Обработка клика на каждый день
      dateCell.addEventListener("click", function () {
        console.log(`You clicked on day ${i}`);
      });

      // Переход на следующую строку по окончании недели
      if (new Date(year, month, i).getDay() === 6) {
        table.appendChild(currentRow);
        currentRow = document.createElement("tr");
      }
    }

    // Добавляем последнюю строку, если она неполная
    if (currentRow.children.length > 0) {
      table.appendChild(currentRow);
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
