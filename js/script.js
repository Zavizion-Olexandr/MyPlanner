// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.getElementById("burger-menu");
//   const sidebar = document.getElementById("sidebar");
//   const closeBtn = document.getElementById("close-btn");

//   burgerMenu.addEventListener("click", function () {
//     sidebar.style.width = "250px";
//   });

//   closeBtn.addEventListener("click", function () {
//     sidebar.style.width = "0";
//   });

//   document.addEventListener("click", function (event) {
//     if (!sidebar.contains(event.target) && event.target !== burgerMenu) {
//       sidebar.style.width = "0";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.querySelector(".calendar__custom");
  const monthTitle = document.querySelector(".calendar__month-title");
  const prevMonthButton = document.querySelector(".calendar__prev-button");
  const nextMonthButton = document.querySelector(".calendar__next-button");

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  function updateMonthTitle(year, month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    monthTitle.textContent = `${monthNames[month]} ${year}`;
  }

  function generateCalendar(year, month) {
    const table = calendarContainer.querySelector(".calendar__table tbody");
    table.innerHTML = ""; // Очищаем таблицу

    const firstDayIndex = new Date(year, month, 1).getDay(); // День недели для 1-го числа месяца
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Создаем первую строку
    let currentRow = document.createElement("tr");

    // Заполнение пустых ячеек перед первым днем месяца
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }

    // Заполнение ячеек с датами месяца
    for (let i = 1; i <= daysInMonth; i++) {
      const dateCell = document.createElement("td");

      // Создаем кнопку для каждой даты
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add("calendar__date-button");
      button.addEventListener("click", function () {
        console.log(`Вы нажали на дату: ${i}`);
        // Ваша логика обработки клика
      });

      dateCell.appendChild(button);
      currentRow.appendChild(dateCell);

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

    updateMonthTitle(year, month); // Обновляем заголовок месяца
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
// Получаем все элементы option
const options = document.querySelectorAll(".dropdown__option");

// Проходим по каждому элементу option и добавляем обработчик события
options.forEach((option) => {
  option.addEventListener("mouseenter", () => {
    option.classList.add("dropdown__option-focused");
  });

  option.addEventListener("mouseleave", () => {
    option.classList.remove("dropdown__option-focused");
  });
});
