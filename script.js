document.addEventListener("DOMContentLoaded", () => {

    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${taskText}</span>

            <div class="actions">
                <button class="complete-btn">
                    <i class="fa-solid fa-check"></i>
                </button>

                <button class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        taskList.appendChild(li);

        taskInput.value = "";
    });

    taskList.addEventListener("click", (e) => {

        if (e.target.closest(".complete-btn")) {
            e.target.closest("li")
                    .querySelector("span")
                    .classList.toggle("completed");
        }

        if (e.target.closest(".delete-btn")) {
            e.target.closest("li").remove();
        }

    });

});